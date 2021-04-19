const express = require('express');
const app = express();

// for environment variable, install dotenv package
// const dotenv = require('dotenv');
// dotenv.config();

 const routesUrls = require('./routes/routes')
 const cors = require('cors');
 const { request } = require('express');
 const connectToDatabase = require('./config/connectToDb');

 connectToDatabase();

// // connect with mongoDB 
//  const mongoose = require('mongoose');
//  const { response } = require('express');
//  const dbInfo = 'mongodb+srv://konica123:konica123@cluster0.pdlk9.mongodb.net/users?retryWrites=true&w=majority';
//  mongoose.connect(dbInfo, () => console.log("Database connected"));


/*
const mongo = require('./mongo')
const userSchema = require('./models/SignUpModels');


const connectToMongoDB = async () => {
    await mongo().then((mongoose) => {
        try {
            console.log('Connected to mongoDB!')
            const user = {
                email: 'test@email.com',
                username: 'Joe',
                password: 'PAssword!'
            }
            await new userSchema(user).save();

        } finally {
            mongoose.connection.close()
        }
    })
}

 connectToMongoDB()
*/


app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);
app.listen(8000, () => console.log("Server is up and running on port 8000"))