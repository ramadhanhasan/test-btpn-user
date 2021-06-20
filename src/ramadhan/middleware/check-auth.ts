var jwt = require('jsonwebtoken');

export default function makeCheckAuth(){
    return Object.freeze({
        validateToken
    })
    async function validateToken(body){
        return new Promise(async function(resolve,reject){
            try {

                const decoded = jwt.verify(body, 'secret')
                
                resolve (decoded)
                
            } catch (error) {
                console.log('err',error);    
                reject (error) 
            }
        })
    }
}