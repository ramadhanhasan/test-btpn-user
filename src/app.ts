import express from 'express';

import ramadhan from './ramadhan';

const app = express();

app.use('/ramadhan', ramadhan);

app.listen(3300,()=> console.log('server run in 3300'));
