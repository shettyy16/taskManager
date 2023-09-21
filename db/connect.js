const mongoose = require('mongoose')

const connectToMongo =(url)=>{
    mongoose.connect(url)
}

module.exports = connectToMongo
