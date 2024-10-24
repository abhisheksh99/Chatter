import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/authRoute.js"
import messageRoute from "./routes/messageRoutes.js"
import connectDB from "./db/connectDb.js"
import cookieParser from "cookie-parser"

const app = express()
connectDB()

app.use(express.json())
app.use(cookieParser())

//Routes
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`);
    
})