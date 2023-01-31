import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { 
       Container,
       Conteudo, 
       Header, 
       Form, 
       Campo, 
       Input, 
       Select, 
       BtnAcessar,
       ConteudoChat, 
       HeaderChat, 
       ImgUsuario,
       NomeUsuario,
       ChatBox,
       MsgEnviada,
       DetMsgEnviada,
       TextMsgEnviada,
       MsgRecebida,
       DetMsgRecebida,
       TextMsgRecebida,
       EnviarMsg,
       CampoMsg,
       BtnEnviarMsg,


      } from "./styles/styles";

let socket;

function App() {

  const ENDPOINT = "http://localhost:8080/";
  
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState("");
  const [sala, setSala] = useState("");
  /*
  const [logado, setLogado] = useState(true);
  const [nome, setNome] = useState("cacau");
  const [sala, setSala] = useState("1");
  */
  const [mensagem, setMensagem] = useState("");
  const [listaMensagem, setListaMensagem] = useState([]);

  useEffect(()=>{
    socket = socketIOClient(ENDPOINT);

  },[]);

  useEffect(()=>{
    socket.on("receber_mensagem", (dados) => {
      setListaMensagem([ ...listaMensagem, dados]);
    });
  });

  const conectarSala = () => {
    console.log("o usuário " +nome + " acessou a sala " +sala);
    setLogado(true);
    socket.emit("conectar_sala", sala);
  }

  const enviarMensagem = async () => {
    console.log("Mensagem: " + mensagem);
    /*cria o objeto:
    {sala: '4', conteudo: {…}}
     conteudo:{nome: 'algum nome', mensagem: 'alguma mensagem'}
     sala:"4"
     [[Prototype]]: Object*/
    const conteudoMensagem = {
      sala,
      conteudo: {
        nome,
        mensagem
      }
    }
    console.log(conteudoMensagem);
    await socket.emit("enviar_mensagem", conteudoMensagem);
    setListaMensagem([ ...listaMensagem, conteudoMensagem.conteudo]);
    setMensagem("");
  }

  return (
    <Container>
            
      {!logado ?
      <Conteudo>
        <Header>CHATINHO</Header>
        <Form>
        <Campo>
          <Input type="text" placeholder="Digite um nome de usuário" value={nome} onChange={(text) =>
          {setNome(text.target.value)}}/>
       </Campo>
        
       <Campo> 
         <Select name="sala" value={sala} onChange={text => setSala(text.target.value)}>
          <option value="">Selecione sua sala</option>
          <option value="1">RH</option>
          <option value="2">TI</option>
          <option value="3">Administrativo</option>
          <option value="4">Financeiro</option>
         </Select>
       </Campo>

       <BtnAcessar onClick={conectarSala}>Acessar</BtnAcessar>
       </Form>
      </Conteudo>
      :
      <ConteudoChat>
        <HeaderChat>
          <ImgUsuario src="usrr.png" alt={nome} />
          <NomeUsuario>{nome}</NomeUsuario>
        </HeaderChat>
        <ChatBox>
        {listaMensagem.map((msg, key) => {
         return(
           <div key={key}>
            {nome === msg.nome ? 
            <MsgEnviada>
             <DetMsgEnviada>
              <TextMsgEnviada>{msg.nome} : {msg.mensagem}</TextMsgEnviada>
             </DetMsgEnviada>
            </MsgEnviada>
            : 
            <MsgRecebida>
             <DetMsgRecebida>
              <TextMsgRecebida>{msg.nome} : {msg.mensagem}</TextMsgRecebida>
             </DetMsgRecebida>
            </MsgRecebida>
            }
           </div>
         )
        })}
        </ChatBox>
        <EnviarMsg>
         <CampoMsg type="text" name="mensagem" placeholder="Mensagem..." value={mensagem}
         onChange={(text)=>{setMensagem(text.target.value)}}/>

         <BtnEnviarMsg onClick={enviarMensagem}>Enviar</BtnEnviarMsg>
        </EnviarMsg>
      </ConteudoChat>
      }
      
    </Container>
  );
}

export default App;
