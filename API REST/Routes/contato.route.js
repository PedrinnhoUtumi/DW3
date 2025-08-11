import express from "express"
import { getContatos, getContatoByID } from "../controller/contato.controller.js"
const router = express.Router()

router.get("/contato", getContatos)
router.get("/contato/:id", getContatoByID)
// router.post("/contato", (req, res) => {
//     res.send("contato Sara")
// })
// router.put("/contato", (req, res) => {
//     res.send("contato Sara")
// })
// router.delete("/contato", (req, res) => {
//     res.send("contato Sara")
// })

export default router
