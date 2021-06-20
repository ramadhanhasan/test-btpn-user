import makeUserDb from './ramadhan-db'
import mongoose from 'mongoose'

let mongoAccess = `mongodb://localhost:27017/ramadhandb`
 mongoose.connect(mongoAccess, { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => {
     console.log('mongoDB connected to ramadhandb');
   })
   .catch(err => console.log(err.message));

  let Schema = mongoose.Schema;
  let userSchema = new Schema({
    id: Number,
    userName: String,
    accountNumber: Number,
    emailAddress: String,
    identityNumber: Number,
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now}
    }, {
      collection: 'ramadhan'
  })

const schemaDb = mongoose.model(`ramadhan`,userSchema);
const ramadhanDb = makeUserDb({schemaDb})

export default ramadhanDb
