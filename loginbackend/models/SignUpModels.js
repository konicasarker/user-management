const mongoose = require('mongoose');

// const signUpTemplate = new mongoose.Schema({
//     fullName : {
//         type: String,
//         required:true
//     },
//     userName : {
//         type:String,
//         required: true
//     },
//     email: {
//         type:String,
//         required: true
//     },
//     password: {
//         type:String,
//         required: true
//     },
//     date :{
//         type:Date,
//         default: Date.now
//     }
// })

const userSchema = new mongoose.Schema({
        email: String,
        username: String,
        password: String,
        address: String,
        role: String,
        phone: String
})

module.exports = mongoose.model('users', userSchema);