import BunDatabase, {Bun} from "./bun.database";
import BunService from "./connectSqLite";

const db = new BunDatabase()
const bunService = new  BunService(db)

export default {
  port:5000,
  async fetch(request: Request){
    const { method, url } = request
    const { pathname, searchParams } = new URL(url)
    console.log(`${method} ${pathname}`);

    if(method === 'GET' && pathname === "/buns"){
      const buns = bunService.getBuns()
      return new Response(JSON.stringify(buns))
    }

    if (method === 'POST' && pathname === "/buns") {
      const data:Bun  = await request.json()
      bunService.createByb(data.type)
      return new Response(JSON.stringify({
        success:'success'
      }))
    }

    if (method === 'PUT' && pathname === "/buns") {
      const data: Bun = await request.json()
      bunService.updateBun(data)
      return new Response(JSON.stringify({
        success: 'updated succesfully'
      }))
    }
    if (method === 'DELETE' && pathname === "/buns") {
      const data: Bun = await request.json()
      bunService.daleteBun(data.id)
      return new Response(JSON.stringify({
        success: 'delete succesfully'
      }))
    }

    return new Response("Not found", { status:400})
  }
}