import makeLogin from './login'
import makeCheckAuth from './check-auth'

const login = makeLogin();
const checkAuth = makeCheckAuth()

const middlewareService =  Object.freeze({
    login,
    checkAuth,
})

export default middlewareService
export{login, checkAuth}
