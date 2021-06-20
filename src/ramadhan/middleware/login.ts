var jwt = require('jsonwebtoken');

export default function makeLogin(){
    return Object.freeze({
        createToken
    })
    async function createToken(body){
        return new Promise(async function(resolve,reject){
            try {
                if(body.userName == 'admin' && body.password == 'admin' ){
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: body.userName
                      }, 'secret');

                    resolve(token)
                }else{
                    reject(new Error('Account Not Found'))
                }
                
                
            } catch (error) {
                console.log('err',error);    
                reject (error) 
            }
        })
    }
}