// Success response
class ApiResponses {
    constructor(statusCode, message, data, errors) {
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.success = statusCode < 400
    }
}
