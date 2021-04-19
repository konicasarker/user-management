const mongoose = require('mongoose');
const { request } = require('express');
const config = require('config');

const connectTpDatabase = async () => {
    try{
        await mongoose.connect(
            config.get('mongoURI'),
            {
                useCreateIndex: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        )
        console.log("Mongo DB is connected!")

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectTpDatabase;