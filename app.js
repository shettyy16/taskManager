const express = require('express');
const app = express();
const tasks = require('./routes/task')
const connectDb = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

//middleware
app.use(express.json());
app.use(errorHandlerMiddleware)

app.use('/api/v1/tasks', tasks)
app.use(notFound)
const PORT = 8000;
const start =async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT, console.log(`APP IS RUNNING ON PORT ${PORT}...`))
    }catch(error){
        console.log(error)
    }
}
start()