import {
    createUser,
    getDataUserByAccountNumber,
    getDataUserByIdentityNumber,
    updateDataUser,
    removeUser,
    getDataUserAll
  } from '../use-case'

import { login, checkAuth } from '../middleware/'
  
  import makePostUser from './post-user'
  import makeGetUserByAccountNumber from './get-user-by-account-number'
  import makePatchUser from './patch-user'
  import makeGetUserByIdentityNumber from './get-user-by-identity-number'
  import makeDeleteUser from './delete-user'
  import makeGetUserAll from './get-user-all'
  import makeLoginUser from './login-user'
  
  const postUser = makePostUser({createUser, checkAuth})
  const getUserByAccountNumber = makeGetUserByAccountNumber({getDataUserByAccountNumber, checkAuth})
  const getUserByIdentityNumber = makeGetUserByIdentityNumber ({getDataUserByIdentityNumber, checkAuth})
  const patchUser = makePatchUser({updateDataUser, checkAuth})
  const deleteUser = makeDeleteUser({removeUser, checkAuth})
  const getUserAll = makeGetUserAll({getDataUserAll, checkAuth})
  const loginUser = makeLoginUser({login})

  const ramadhanController =  Object.freeze({
    postUser,
    getUserByAccountNumber,
    getUserByIdentityNumber,
    patchUser,
    deleteUser,
    getUserAll,
    loginUser
  })
  
  export default  ramadhanController
  export { postUser, getUserByAccountNumber, getUserByIdentityNumber, patchUser, deleteUser, getUserAll, loginUser }
  