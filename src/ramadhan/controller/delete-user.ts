export default function makeDeleteUser({removeUser, checkAuth}) {
    return async function DeleteUser (httpRequest) {
      try {
  
        const bodyparam  = httpRequest.body
        const validate = await checkAuth.validateToken(httpRequest.headers.authorization.split(" ")[1])
        const posted = await removeUser(bodyparam)
        
        return {
          headers: {
            'Content-Type': 'application/json',
            // 'Last-Modified': new Date(posted.createdTime).toUTCString()
          },
          statusCode: 200,
          body: {
            status : true,
            response_code : 200,
            message : "OK",
            data: 'success delete user id '+bodyparam.id
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
  