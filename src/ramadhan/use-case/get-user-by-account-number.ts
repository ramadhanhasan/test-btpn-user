import redis from 'redis'

const client = redis.createClient(6379);

export default function makeGetDataUserByAccountNumber ({ramadhanDb}) {
  return async function GetDataUserByAccountNumber (body) {
    try {
      if(!body.accountNumber || body.accountNumber == ''){
        throw new Error('You must supply an account number')
      }
      const result = await ramadhanDb.getUserByAccountNumber(body)
      
      const data = JSON.stringify(result)
      const params = 'accountNumber-'+body.accountNumber      
      client.setex(params, 3600, data);

      return result

    }catch (error) {
      throw new Error(error);
    }
  }
}
