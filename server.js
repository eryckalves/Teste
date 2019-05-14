
const express = require('express')
const server = express()


server.post('/contato' , (req,res) =>{
    res.send('Coletar Dados')
})

server.get('/' , (req, res) => {
    res.send(`
                <h1>Menu<h1>
                <form action="/contato" method="POST">
                    <label for="email">Email:</label>
                        <input type="email" name="email" id="email">
                    <label for="mensagem">Mensagem:</label>
                        <textarea name ="mensagem" id="mensagem"></textarea>
                        <input type="submit" value="Enviar"> 
                </form>
    `)

})

server.get('/grafico1' , (req,res) =>{
    res.send('<h1>testeGrafico1<h1>')
})

server.listen(3001, () =>{
    console.log('Server funcionando em localhost:3001')
    console.log('Para derrubar o server : ctrl+c no terminal')
})

