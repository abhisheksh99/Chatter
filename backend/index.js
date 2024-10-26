import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/authRoute.js"
import messageRoute from "./routes/messageRoutes.js"
import userRoute from "./routes/userRoute.js"
import connectDB from "./db/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors";

const app = express()
connectDB()

// Enable CORS for requests from localhost:5173
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json())
app.use(cookieParser())

//Routes
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoute)
app.use("/api/users",messageRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`);
    
})