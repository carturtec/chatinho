import styled from "styled-components";

const Container = styled.section`
     background: #fff;
     width: 450px;
     max-width:450px;
     border-radius: 16px;
     box-shadow: 0 0 128px 0 rgba(0,0,0,0.1),
                 0 32px 64px -48px rgba(0,0,0,0.5);
`;

const Conteudo = styled.section`
     padding: 35px 30px;      
`;

const Header = styled.header`
     font-size: 25px;
     font-weight: 500;
     padding-bottom : 10px;
     border-bottom: 1px solid #e6e6e6;
     color: #6fbced; 
     text-align: center;    
`;

const Form = styled.form`
     margin: 20px 0;      
`;

const Campo = styled.div`
     display: flex;
     margin-bottom: 10px;
     flex-direction: column;
     position: relative;     
`;
/*
const Label = styled.label`
     margin-bottom: 4px;
     margin-top: 10px;
`;
*/
const Input = styled.input`
     height: 40px;
     width: 390px;
     font-size: 16px;
     padding: 0 10px;
     border-radius: 5px;
     border: 1px solid #ccc;
`;

const Select = styled.select`
     height: 40px;
     width: 390px;
     font-size: 16px;
     padding: 0 10px;
     border-radius: 5px;
     border: 1px solid #ccc;
`;

const BtnAcessar = styled.button`
     border: none;
     color: #fff;
     font-size: 17px;
     background: #6fbced;
     border-radius: 5px;
     cursor: pointer;
     padding: 10px;
     margin-top: 13px;
`;

const ConteudoChat = styled.section`
     padding: 25px 0px;
     
`;

const HeaderChat = styled.header`
     width: 450px;
     display: flex;
     align-items: center;
     padding: 18px 30px;
     color: #6fbced;     
`;

const ImgUsuario = styled.img`
     height: 45px;
     width: 45px;
     margin: 0 15px;
`;

const NomeUsuario = styled.div`
     font-size: 17px;
     font-weight: 500;
`;

const ChatBox = styled.div`
     position: relative;
     min-height: 400px;
     max-height: 400px;
     overflow-y: auto;
     padding: 10px 10px 20px 10px;
     background: #f7f7f7;
     box-shadow: insert 0 32px 32px -32px rgb(0 0 0 / 5%),
                 insert 0 -32px 32px -32px rgb(0 0 0 / 5%)
`;

const MsgEnviada = styled.div`
     margin: 15px 14px 15px 0px;
     display: flex;
`;

const DetMsgEnviada = styled.div`
     margin-left: auto;
     max-width: calc(100% - 130px);
`;

const TextMsgEnviada = styled.p`
     background: #6fbced;
     color: #fff;
     border-radius: 18px 18px 0 18px;
     word-wrap: break-word;
     padding: 8px 16px;
     box-shadow: 0 0 32px rgb(0 0 0 / 8%),
                 0rem 16px 16px -16px rgb(0 0 0 / 10%);
`;

const MsgRecebida = styled.div`
     margin: 15px 0px;
     display: flex;
     align-items: flex-end;
`;

const DetMsgRecebida = styled.div`
     margin-right: auto;
     margin-left: 10px;
     max-width: calc(100% - 130px);
`;

const TextMsgRecebida = styled.p`
     background: #58b666;
     color: #fff;
     border-radius: 18px 18px 18px 0;
     word-wrap: break-word;
     padding: 8px 16px;
     box-shadow: 0 0 32px rgb(0 0 0 / 8%),
                 0rem 16px 16px -16px rgb(0 0 0 / 10%);
`;

const EnviarMsg = styled.div`
     padding: 18px 15px;
     display: flex;
     justify-content: space-between;
`;

const CampoMsg = styled.input`
     height: 45px;
     width: calc(100% - 58px);
     font-size: 16px;
     padding: 0px 13px;
     border: 1px solid #e6e6e6;
     outline: none;
     border-radius: 5px 0 0 5px;
`;

const BtnEnviarMsg = styled.button`
     background: #6fbced;
     color: #fff;
     width: 75px;
     border: none;
     outline: none;
     font-size: 19px;
     cursor: pointer;
     border-radius: 0 5px 5px 0;
`;

export{
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
};
