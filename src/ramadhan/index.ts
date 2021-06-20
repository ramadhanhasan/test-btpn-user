import express from 'express';
import bodyParser from 'body-parser';
import camelcaseKeys from 'camelcase-keys';
import dotenv from 'dotenv'
// import cors from 'cors'

dotenv.config()
const app = express();
const makeCallback = require ('./callback')

import {
    postUser,
    patchUser,
    deleteUser,
    getUserByAccountNumber,
    getUserByIdentityNumber,
    getUserAll,
    loginUser
} from './controller'

// app.use(cors());
app.use(bodyParser.json());

app.post('/', makeCallback(postUser,camelcaseKeys));
app.put('/', makeCallback(patchUser,camelcaseKeys));
app.delete('/', makeCallback(deleteUser,camelcaseKeys));
app.get('/', makeCallback(getUserAll,camelcaseKeys));
app.get('/account-number/:accountNumber', makeCallback(getUserByAccountNumber,camelcaseKeys));
app.get('/identity-number/:identityNumber', makeCallback(getUserByIdentityNumber,camelcaseKeys));
app.post('/login', makeCallback(loginUser,camelcaseKeys));

app.get('/healthcheck',function(req,res){
    res.send();
})

export default app;
