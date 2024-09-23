const mongoose = require('mongoose')
// const MongooseUri = "mongodb://0.0.0.0:27017/ecomapp"
// P1pSutPNiRngj468
const MongooseUri = `mongodb+srv://navneetshahi2004:P1pSutPNiRngj468@cluster123.uy6np.mongodb.net/?retryWrites=true&w=majority&appName=Cluster123`

const mongooseConnect=async()=>{
    // console.log(process.env.MONGOOSEURI)
    await mongoose.connect(MongooseUri)
    let db = mongoose.connection
    db.on('error',()=>console.log("Some Error in connecting database"))
    db.once('open',()=>console.log("Database connected"))
}

module.exports = mongooseConnect
