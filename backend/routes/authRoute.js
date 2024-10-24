import express from "express"
import { userLogin, userLogout, userSignUp } from "../controllers/authController.js"

const router = express.Router()

router.route("/login").post(userLogin)
router.route("/signup").post(userSignUp)
router.route("/logout").post(userLogout)



export default router