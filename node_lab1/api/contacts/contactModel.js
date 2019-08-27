import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {type:String, required:true},
  address: {type:String, required:true},
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  email:   String,//{type: mongoose.SchemaTypes.Email},
  updated: {
    type: Date,
    default: Date.now,
  },
});

ContactSchema.path('address').validate((v)=>{
    if(v.length>50||v.length<5){
        return false;
    }
    return true;

});

ContactSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    //var emailRegex = ^\S+@\S+$;
    return emailRegex.test(email.text); // Assuming email has a text attribute
 }, 'A valid email address id required');


export default mongoose.model('Contact', ContactSchema);