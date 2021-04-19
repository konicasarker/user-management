const mongoose = require('mongoose');
const mongoPath = 'mongodb+srv://konica123:konica123@cluster0.pdlk9.mongodb.net/users?retryWrites=true&w=majority';


module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}

 