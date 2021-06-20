import redis from 'redis'

const client = redis.createClient(6379);

export default function makeGetDataUserAll ({ramadhanDb}) {
    return async function GetDataUserAll (body) {
      try {
        
        const result = await ramadhanDb.getUserByAll(body)
        
        const data = JSON.stringify(result)
        const params = 'all'
        client.setex(params, 3600, data);

        return result
  
      }catch (error) {
        throw new Error(error);
      }
    }
  }
  