import redis from 'redis'

const client = redis.createClient(6379);

export default function makeGetDataUserByIdentityNumber ({ramadhanDb}) {
  return async function GetDataUserByIdentityNumber (body) {
    try {
      if(!body.identityNumber || body.identityNumber == ''){
        throw new Error('You must supply an identity number')
      }
      const result = await ramadhanDb.getUserByIdentityNumber(body)
      
      const data = JSON.stringify(result)
      const params = 'identityNumber-'+body.accountNumber      
      client.setex(params, 3600, data);

      return result

    }catch (error) {
      throw new Error(error);
    }
  }
}
