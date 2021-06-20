import redis from 'redis'
const client = redis.createClient(6379)

export default function makeUserDb({schemaDb}) {
  return Object.freeze({
    getUserByAccountNumber,
    getUserByIdentityNumber,
    getUserByAll,
    checkUserExist,
    createUser,
    updateUserDb,
    deleteUserDb
  })

  async function createUser (body) {
    return new Promise(function(resolve, reject) {
      schemaDb.find().sort({['id']:[-1]})
      .then(result => {
        let id = 0
        if(result.length == 0){
          id = 1
        }else{
          id = result[0].id + 1
        }
        body.id = id
        schemaDb.create({...body})
        .then(result => {
          resolve('User success created')
        })
        .catch(error =>{
            console.log(error);
            reject(error);
        })
      })
      .catch(err =>{
          console.log(err);
          reject(err);
      })
    })
  }

  async function getUserByAccountNumber (accountNumber) {
    return new Promise(function(resolve, reject) {
      const params = 'accountNumber-'+accountNumber.accountNumber
      client.get(params, (err, data) => {
        if (err) throw err;
        if (data !== null) {
          resolve(JSON.parse(data));
        } else {
          schemaDb.find(accountNumber)
          .then(result => {
            console.log(result)
            resolve(result);
          })
          .catch(err =>{
              console.log(err);
              reject(err);
          })
        }
      });
    })
  }
  
  async function getUserByIdentityNumber (identityNumber) {
    return new Promise(function(resolve, reject) {
      const params = 'identityNumber-'+identityNumber.identityNumber
      client.get(params, (err, data) => {
        if (err) throw err;
        if (data !== null) {
          resolve(JSON.parse(data));
        } else {
          schemaDb.find(identityNumber)
          .then(result => {
            console.log(result)
            resolve(result);
          })
          .catch(err =>{
              console.log(err);
              reject(err);
          })
        }
      });
    })
  }

  async function getUserByAll () {
    return new Promise(function(resolve, reject) {
      const params = 'all'
      client.get(params, (err, data) => {
        if (err) throw err;
        if (data !== null) {
          resolve(JSON.parse(data));
        } else {
          schemaDb.find()
          .then(result => {
            console.log(result)
            resolve(result);
          })
          .catch(err =>{
              console.log(err);
              reject(err);
          })
        }
      });
    })
  }

  async function checkUserExist(data) {
    return new Promise(function(resolve, reject) {
      schemaDb.find({...data})
      .then(result => {
        resolve(result);
      })
      .catch(err =>{
          console.log(err);
          reject(err);
      })
    })
  }

  async function updateUserDb (body) {
    return new Promise(function(resolve, reject) {
      schemaDb.updateOne({id : body.id}, { $set: {...body} })
      .then(result => {
        client.flushdb( function (err, succeeded) {
          console.log(succeeded); // will be true if successfull
        });
        resolve('update user success')
      })
      .catch(err =>{
          console.log(err)
          reject('failed update user '+err)
      })
    })
  }

  async function deleteUserDb (body) {
    return new Promise(function(resolve, reject) {
      schemaDb.deleteOne({id : body.id})
      .then(result => {
        // console.log('update',result)
        if(result.deletedCount == 0){
          reject('user id '+body.id+' not found')
        }else{
          client.flushdb( function (err, succeeded) {
            console.log(succeeded); // will be true if successfull
          });
          resolve('delete user success')
        }
      })
      .catch(err =>{
          console.log(err)
          reject('failed delete user '+err)
      })
    })
  }

}
