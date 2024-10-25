import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { getUserForSidebar } from "../controllers/userController.js"


const router = express.Router()


router.route("/").get(protect,getUserForSidebar)




export default router