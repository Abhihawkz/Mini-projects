import express from "express";
import {handleGenerateNewShortURL,redirectUrl} from "../controller/url.controller.js";

const router = express.Router();


router.post("/",handleGenerateNewShortURL)

router.get("/:shortid",redirectUrl)


export default router;