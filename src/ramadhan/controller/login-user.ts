export default function makeLoginUser({login}) {
    return async function LoginUser (httpRequest) {
      try {
  
        const bodyparam  = httpRequest.body
        const posted     = await login.createToken(bodyparam)
  
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
            data: posted
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
  