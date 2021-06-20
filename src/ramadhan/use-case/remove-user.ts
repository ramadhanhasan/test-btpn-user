export default function makeRemoveUser ({ramadhanDb}) {
    return async function RemoveUser (body) {
      try {
        if(!body.id){
          throw new Error('You must supply an id')
        }
        const result = ramadhanDb.deleteUserDb(body)
        return true
      }catch(error){
        throw new Error(error);
      }
    }
  }
  