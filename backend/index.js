import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/authRoute.js"
import connectDB from "./db/connectDb.js"

const app = express()
connectDB()

app.use(express.json())

//Routes
app.use("/api/auth",authRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`);
    
})