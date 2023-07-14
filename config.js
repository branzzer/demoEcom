const mongoose = require('mongoose');


const connectMongo = (uri) => {

    try {
        mongoose.connect(uri);
        console.log('connected to mongodb')
    } catch (error) {
        console.log(`error in connectMongo ERROR =>  ${error}`)
    }
}


module.exports = {
    connectMongo
}






