const mongoose = require('mongoose');

const mongoPath = REACT_APP_DATABASE_ACCESS

// check this
module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}

 
