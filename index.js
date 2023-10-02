import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userRoutes from "./routes/userRoutes.js"

const app = express()

const port = process.env.PORT || 4000
const hostName = 'localhost'

app.use(bodyParser.json())
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})