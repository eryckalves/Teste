
    const libserver = require('../src/server/server')
    const libdatabase = require('../src/database/index')

    const server = libserver.server();
    const con = libdatabase.database();

    // server web
    server.listen(3001, () =>{
        console.log('Server funcionando em localhost:3001')
        console.log('Para derrubar o server express : ctrl + c no terminal')
    })

    //tabela do banco
    server.get('/',  (req, res) => {
      res.write(`<h1> Tabela Excel <h1>`);

      const sql = "SELECT * FROM teste";
      libdatabase.call(sql,con,function(result){
        for (const key in result) {  
          if (result.hasOwnProperty(key)) {
              nome = result['nome'];
              endereco = result['endereco'];

              res.write(
            `<table style="width:12%">
            <tr>
              <th>Nome</th>
              <th>Endereco</th> 
            </tr>
            <tr>
              <td style="padding: 0px 0px 0px 15px;">` + nome +  `</td>
              <td style="padding: 0px 0px 0px 15px;">` + endereco + `</td>
            </tr>
          </table>`);
          }
        }
      });
    });

    //grafico1 
    server.get('/grafico',  (req, res) => {
      res.write(`<h1> Tabela Excel <h1>`);

      const sql = "SELECT * FROM teste";
      libdatabase.call(sql,con,function(result){
        for (const key in result) {  
          if (result.hasOwnProperty(key)) {
              nome = result['nome'];
              endereco = result['endereco'];

              res.write(
            `<table style="width:12%">
            <tr>
              <th>Nome</th>
              <th>Endereco</th> 
            </tr>
            <tr>
              <td style="padding: 0px 0px 0px 15px;">` + nome +  `</td>
              <td style="padding: 0px 0px 0px 15px;">` + endereco + `</td>
            </tr>
          </table>`);
          }
        }
      });
    });

    //finaliza conect com o sql
    //con.end();