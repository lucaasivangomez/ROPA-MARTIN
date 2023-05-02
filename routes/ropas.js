import express from "express";
import { deleteRopa, editRopa, getRopa, saveRopa } from "./../model/ropa.js";

const router = express.Router();

router.get("/", async function (_, res, next) {
    const results = await getRopa();
    res.send(results);
});

router.post("/", async function (req, res, next) {
  await saveRopa(req.body);
  res.send("Ropa Guardada");
});
router.put("/:id", async function (req, res, next) {
  await editRopa(req.params.id,req.body);
  res.send("Ropa Actualizada");
});
router.delete("/:id", async function (req, res, next) {
  await deleteRopa(req.params.id);
  res.send("Ropa Eliminada");
});


export default router;
