import express from "express";
import { getTypes } from "../model/type.js";

const router = express.Router();

router.get("/", async function (_, res, next) {
    const results = await getTypes();
    res.send(results);
});
    

export default router;
