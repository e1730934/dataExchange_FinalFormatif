module.exports = {
    post: {
        tags: [
            "Users"
        ],
        summary: "Register",
        description: "",
        operationId: "signUp",
        parameters: [
            {
                in: "body",
                name: "body",
                description: "Add a user to the DB",
                required: true,
                schema: {
                    $ref: "#/components/schemas/Register"
                }
            }
        ],
        responses: {
            200: {
                description: "User created",
                schema: {
                    $ref: "#/components/schemas/Register"
                }
            },
            400: {
                description: "Bad request",
                schema: {
                    $ref: "#/components/schemas/Error"
                }
            }
        }
    },
}
