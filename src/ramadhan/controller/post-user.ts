export default function makePostUser ({createUser, checkAuth}) {
  return async function postTestimony (httpRequest) {
    try {
      const bodyparam  = httpRequest.body
      const validate = await checkAuth.validateToken(httpRequest.headers.authorization.split(" ")[1])
      const posted = await createUser(bodyparam)
      
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: {
          status : true,
          response_code : 200,
          message : "OK",
          data: 'success create new user '+bodyparam.userName
        }
      }
    } catch (e) {
        console.log(e)
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 400,
          body: {
            status        : false,
            response_code : 400,
            message       : e.message,
          }
        }
    }
  }
}
