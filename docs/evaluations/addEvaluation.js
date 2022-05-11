module.exports = {
    post: {
        tags: [
            "Evaluation"
        ],
        description: "Add a new evaluation",
        operationId: "addEvaluation",
        summary: "Add a new evaluation",
        parameters: [
            {
                name: "file",
                in: "formData",
                description: "The evaluation to add",
                required: true,
                type: "file",
                schema: {
                    $ref: "#/components/schemas/AddEvaluation"
                },
            }
        ],
        responses:{
            "200":{
                description: "The evaluation was added",
                schema: {
                    $ref: "#/components/schemas/AddEvaluation"
                }
            },
            "500":{
                description: "The evaluation was not added",
                schema: {
                    $ref: "#/components/schemas/Error"
                }
            }
        }
    }
}
