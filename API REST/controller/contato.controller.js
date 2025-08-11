import contatos from "../model/contato.model.js";

function getContatos(req, res){
    res.status(200).json(contatos)
}

function getContatoByID(req, res){
    const { id } = req.params
    const contato = contatos.find((elemento) => elemento.id == id)
    if (!contato) {
        res.status(404).json({message: "errado"})
    }
    res.status(200).json(contatos)
}

export {
    getContatos,
    getContatoByID,
}