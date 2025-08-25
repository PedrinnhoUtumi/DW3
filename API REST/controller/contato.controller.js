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
    res.status(200).json(contato)
}

function createContato(req, res){
    const { nome, email, telefone } = req.body
    contatos.push({id: contatos.length + 1, nome, email, telefone})
    res.status(201).json({message: "Criado com sucesso"})
}

function updateContato(req, res) {
    const { id } = req.params
    const { nome, email, telefone } = req.body
    const contato = contatos.find((elemento) => elemento.id == id)
    if (!contato) {
        res.status(404).json({message: "errado"})
    }
    contato.nome = nome
    contato.email = email
    contato.telefone = telefone
    res.status(200).json({message: "Atualizado com sucesso"})

}
function deleteContato(req, res) {
    const { id } = req.params
    const contatoIndex = contatos.findIndex((elemento) => elemento.id == id)
    if (contatoIndex == -1) {
        res.status(404).json({message: "errado"})
    }
    contatos.splice(contatoIndex, 1)
    res.status(200).json({message: "Removido com sucesso"})
}

export {
    getContatos,
    getContatoByID,
    createContato,
    updateContato,
    deleteContato,
}