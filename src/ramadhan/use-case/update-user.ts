export default function makeUpdateUser ({ramadhanDb}) {
  return async function updateUser (body) {
    try {

      if(!body.id){
        throw new Error('You must supply an id')
      }

      let checkAccountNumber = {
        accountNumber : body.accountNumber
      }
      const checkAccountNumberExist = await ramadhanDb.checkUserExist(checkAccountNumber)
      if(checkAccountNumberExist.length == 0 || checkAccountNumberExist[0].id == body.id){
        let checkIdentityNumber = {
          identityNumber : body.identityNumber
        }
        const checkIdentityNumberExist = await ramadhanDb.checkUserExist(checkIdentityNumber)
        if(checkIdentityNumberExist.length == 0 || checkIdentityNumberExist[0].id == body.id){
          const result = ramadhanDb.updateUserDb(body)
          return true
        }else{
          throw new Error('Identity Number Already Exist');
        }
      }else{
        throw new Error('Account Number Already Exist');
      }
    }catch(error){
      throw new Error(error);
    }
  }
}
