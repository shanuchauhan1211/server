import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {home , CreateUser,logIn} from "../controllers/auth-controller.js";
//const register = require("../controllers/auth-controller.js");
router.post("/NewUser",CreateUser);
router.route("/logIn").post(logIn);
router.route("/").get(auth,home);




export default router;