const moongose = require('mongoose')
const Schema = moongose.Schema;

const UserSchema = new Schema({
  name:{
   firstname: String,
   lastname: String
  },
 username:{type: String, min:8},
 identification:{
     type1: String,
     number: String
 },
 password: String,
 active:{
    type: Boolean,
    default: false
  },
  foto:String
});

module.exports = moongose.model('users', UserSchema);



