const express = require('express');
const socket = require('socket.io');
const cors = require('cors');
const app = express();
const db = require('./models/db');
const Usuario = require('./models/Usuario');

app.use(express.json());

//midlleware - qualquer url pode fazer requisição
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-type, Authorization");
  app.use(cors());
  next();

})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/cadastrar-usuario', async (req, res) => {
  
  var dados = req.body;

  const usuario = await Usuario.findOne({
    where: {
      email: dados.email,
    }
  });

  if(usuario){
    return res.status(400).json({
      erro: false,
      mensagem: "Email já cadastrado"
    });
  }

  await Usuario.create(dados)
  .then(() => {
    return res.json({
      erro: false,
      mensagem: "Usuário cadastrado"
    });
  }).catch(() => {
    return res.status(400).json({
      erro: true,
      mensagem: "Usuário não cadastrado"
    });
  });
  
});
/*
app.post('/validar-acesso', async (req, res) => {
  const usuario = await Usuario.findOne({
    where: {
      email: req.body.email,

    }
  });

  if(usuario === null){
    return res.status(400).json({
      erro: false,
      mensagem: "Erro: usuário não encontrado"
    });
  };
  return res.status(400).json({
    erro: false,
    mensagem: "Login realizado com sucesso"
    
  }); 
});
*/
const server = app.listen(8080, ()=>{
  console.log("servidor -> http://localhost:8080/");
  
});
//cors origin permite que qualquer url pode fazer requisição via socketio
io = socket(server, {cors: {origin: "*"}});

//io.on recebe do servidor por uma id
io.on("connection", (socket)=>{
  console.log(socket.id);
    //recebendo dados no back via socket.oi
    socket.on("conectar_sala", (dados)=>{
      console.log("sala selecionada: " + dados);
      socket.join(dados);
    });
    //recebendo dados no back via socket.oi
    socket.on("enviar_mensagem", (dados) => {
      console.log(dados);
      //eviando mesagem para todos que estão na mesma sala
      socket.to(dados.sala).emit("receber_mensagem", dados.conteudo);
    });
});

