const express = require("express")
const app = express()
const porta = 8806
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let arrayPostagens = []

app.get('/', (req, res) => {
    res.send(`  
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#FFAA00" />

            <title>Informações do ISBN</title>
        </head>
        <body>
            <h1 style='background-color: #FFAA00;'>Ola Mundo</h1>
        </body>
        </html>
        `)
})

app.get('/formulario', (req, res) => {
    res.render('formulario')
})

app.post('/cadastrarPostagem', (req, res) => {
    arrayPostagens.push({titulo: req.body.titulo, conteudo: req.body.conteudo})
    res.render('postagens', {arrayPostagens})
})

app.get('/postagens', (req, res) => {
    res.render('postagens', {arrayPostagens})
})

app.get('/isbn/:isbn', (req, res) => {
    fetch(`https://brasilapi.com.br/api/isbn/v1/${req.params.isbn}`)
        .then((response) => response.json())
        .then((nome) => {
            const author = Array.isArray(nome.authors) ? nome.authors.map(author => `<li>${author}</li>`).join('') : "Autor não encontrado";
            const subject = Array.isArray(nome.subjects) ? nome.subjects.map(subject => `<li>${subject}</li>`).join('') : "Tema não encontrado";

            res.send(`
                <!DOCTYPE html>
                <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Informações do ISBN</title>
                </head>
                <body>
                    <h1>Detalhes do Livro</h1>
                    <p><strong>Nome:</strong> ${nome.title}</p>
                    <p><strong>Autor:</strong> ${author}</p>
                    <p><strong>Tema:</strong> ${subject}</p>
                </body>
                </html>
                `)
        })
        .catch(error => {
            res.send("Algo deu erro")
        })
})

app.get('/ddd/:ddd', (req, res) => {
    fetch(`https://brasilapi.com.br/api/ddd/v1/${req.params.ddd}`)
        .then((response) => response.json())
        .then((cidade) => {
            const cities = Array.isArray(cidade.cities) ? cidade.cities.map(city => `<li>${city}</li>`).join('') : "Cidades não encontradas";

            res.send(`
                <!DOCTYPE html>
                <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Informações do ISBN</title>
                </head>
                <body>
                    <h1>Estados e cidades do DDD</h1>
                    <p><strong>Estado:</strong> ${cidade.state}</p>
                    <p><strong>Cidades:</strong> ${cities}</p>
                </body>
                </html>
                `)
        })
        .catch(error => {
            res.send("Algo deu erro")
        })
})

const feriados = [
    ['Confraternização Universal: Ano Novo'],
    ['Carnaval'],
    ['Padroeira de CM'],
    ['Páscoa'],
    ['Dia Mundial do Trabalho'],
    ['Corpus Christi'],
    [],
    [],
    ['Independência'],
    ["Aniversário Saraaaaaaaaaa"],
    ["Aniversário Pedrooooooooooo"],
    ["Natal"],
]

app.get('/feriado', (req, res) => {
    const mes = req.query.mes
   
    if (mes > 12 || mes < 1) {
        return res.send("Erro: Mês inválido")
    }

    res.send(feriados[mes - 1])
})

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`);    
})