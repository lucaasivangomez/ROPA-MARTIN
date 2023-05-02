import express from "express";
import { deleteSize, editSize, getSizes, saveSize } from "../model/size.js";

const router = express.Router();
router.get("/", async function (_, res, next) {
const results = await getSizes();
res.send(results);
});

router.post("/", async function (req, res, next) {
await saveSize(req.body);
res.send("Talle Agregado con exito");
});

router.put("/:id", async function (req, res, next) {
await editSize(req.params.id,req.body);
res.send("Talle editado");
});

router.delete("/:id", async function (req, res, next){
await deleteSize(req.params.id);
res.send("Eliminado");
});

export default router;