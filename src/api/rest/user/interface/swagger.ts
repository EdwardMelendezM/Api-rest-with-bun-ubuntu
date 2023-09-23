export const tagsAuth = {
  detail: {
    tags: ["Auth"],
    summary: "Login app",
    description: "You can login into app",
    operationId: "updatePetWithForm",
    consumes: ["application/x-www-form-urlencoded"],
    produces: ["application/json", "application/xml"],
    parameters: [
      {
        name: "body",
        in: "body",
        description: "user to add to the system",
        required: true,
        schema: {
          type: "object",
          properties: {
            username: {
              type: "string",
              example: "user1" // Ejemplo de valor para username
            },
            password: {
              type: "string",
              example: "123123" // Ejemplo de valor para password
            }
          }
        }
      }
    ],
    responses: {
      "200": {
        description: "Successful response",
        content: {
          "application/json": {
            example: {
              token: "ADsd12312adsdsad",
              error: false
            }
          }
        }
      },
      "405": {
        description: "Error response",
        content: {
          "application/json": {
            example: {
              token: "error",
              error: true
            }
          }
        }
      }
    }
  }
};
