const express = require('express')
const app = express()
const db = require('./db/db')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const cors = require('cors')
const Port = 8000 || process.env.PORT

dotenv.config()
db()

app.use(cors({
    origin:"https://ecommerce-adminav.vercel.app",
    methods:["POST","GET"],
    credentials:true
},{
    origin:"https://ecommerce-usern.vercel.app/",
    methods:["POST","GET"],
    credentials:true
}
}))
app.use(bodyparser.json())
app.use(express.json())


const Authroute = require('./routes/authRoutes')
app.use('/auth',Authroute)

const AdminRoute = require('./routes/AdminRoute')
app.use('/admin',AdminRoute)

const UserRouter = require('./routes/UserRoute')
app.use('/user',UserRouter)

const payment = require('./routes/paymentroutes')
app.use('/payment',payment)



app.listen(process.env.PORT,()=>console.log("Server Started"))
