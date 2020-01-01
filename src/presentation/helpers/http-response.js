const UnauthoridedError = require('./unauthorized-error')
const ServerError = require('./server-error')

module.exports = class HttpReponse {
  static badRequest (error) {
    return {
      statusCode: 400,
      body: error
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static unauthoridedError () {
    return {
      statusCode: 401,
      body: new UnauthoridedError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
