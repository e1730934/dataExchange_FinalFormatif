module.exports = {
    get: {
        tags: [
            "Results"
        ],
        description: "Display the results of all evaluations",
        operationId: "getResults",
        summary: "Display the results of all evaluations",
        parameters: [
            {
                name: "body",
                in: "body",
                description: "The evaluation to add",
                required: false,
                schema: {
                    $ref: "#/components/schemas/GetResultsList"
                },
            }
        ],
        responses:{
            "200":{
                description: "Success",
                schema: {
                    $ref: "#/components/schemas/GetResultsList"
                }
            },
            "500":{
                description: "Internal server error",
                schema: {
                    $ref: "#/components/schemas/Error"
                }
            }
        }

    }
}
