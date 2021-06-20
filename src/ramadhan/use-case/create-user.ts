import makeUser from '../entity'

export default function makeCreateUser({ramadhanDb}) {
  return async function CreateUser(body){
      try {

        const user  = makeUser(body);

        let checkAccountNumber = {
          accountNumber : body.accountNumber
        }
        const checkAccountNumberExist = await ramadhanDb.checkUserExist(checkAccountNumber)
        if(checkAccountNumberExist.length == 0){
          let checkIdentityNumber = {
            identityNumber : body.identityNumber
          }
          const checkIdentityNumberExist = await ramadhanDb.checkUserExist(checkIdentityNumber)
          if(checkIdentityNumberExist.length == 0){
          
            const result = await ramadhanDb.createUser(body)
            return true
          }else{
            throw new Error('Identity Number Already Exist');
          }
        }else{
          throw new Error('Account Number Already Exist');
        }
      }catch(error){
        throw new Error(error)
      }
  }
}
