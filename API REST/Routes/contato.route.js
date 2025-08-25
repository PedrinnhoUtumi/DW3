import express from "express"
import { getContatos, getContatoByID, createContato, updateContato, deleteContato } from "../controller/contato.controller.js"
const router = express.Router()

router.get("/", getContatos)
router.get("/:id", getContatoByID)
router.post('/', createContato)
router.put('/:id', updateContato)
router.delete('/:id', deleteContato)
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
