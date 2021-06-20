export default function buildMakeUser(){
  return function makeUser({
    userName        = '',
    accountNumber   = 0,
    emailAddress    = '',
    identityNumber  = 0,
  } = {}) {

    if (!userName){
      throw new Error('User Name must be exist')
    }

    if (!accountNumber || accountNumber == 0){
      throw new Error('Account Number must be exist')
    }

    if (!emailAddress){
      throw new Error('Email Address must be exist')
    }

    if (!identityNumber || identityNumber == 0){
      throw new Error('Identity Number must be exist')
    }

    return Object.freeze({
      getUserName : () => userName,
      getAccountNumber : () => accountNumber,
      getEmailAddress : () => emailAddress,
      getIdentityNumber: () => identityNumber
    })
  }
}
