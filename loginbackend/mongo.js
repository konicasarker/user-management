const mongoose = require('mongoose');
const mongoPath = REACT_APP_DATABASE_ACCESS

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}

 
