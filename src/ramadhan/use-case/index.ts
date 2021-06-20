import makeCreateUser from './create-user'
import makeGetDataUserByAccountNumber from './get-user-by-account-number'
import makeGetDataUserByIdentityNumber from './get-user-by-identity-number'
import makeUpdateUser from './update-user'
import makeRemoveUser from './remove-user'
import makeGetDataUserAll from './get-user-all'
import ramadhanDb from '../data-access'

const createUser = makeCreateUser ({ramadhanDb})
const getDataUserByAccountNumber = makeGetDataUserByAccountNumber({ramadhanDb})
const getDataUserByIdentityNumber = makeGetDataUserByIdentityNumber ({ramadhanDb})
const updateDataUser = makeUpdateUser ({ramadhanDb})
const removeUser = makeRemoveUser ({ramadhanDb})
const getDataUserAll = makeGetDataUserAll ({ramadhanDb})

const UserService = Object.freeze({
  createUser,
  getDataUserByAccountNumber,
  getDataUserByIdentityNumber,
  updateDataUser,
  removeUser,
  getDataUserAll
})

export default UserService
export {createUser, getDataUserByAccountNumber, getDataUserByIdentityNumber, updateDataUser, removeUser, getDataUserAll}
