import React, { useState } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import Menu from '../src/components/Menu';
import Head from 'next/head';
import { Form, FormGroup, Label, Input,Alert } from 'reactstrap';
import Rodape from '../src/components/Rodape';

function Orcamento() {
    //vamos usar o useState para pegarmos dados do form
    const [orcamento, setOrcamento] = useState({
        name: "",
        email: "",
        phone: "",
        WhatsaApp: "",
        projeto: "",

    });

    const [response, setResponse] =useState({
        formSave: false,
        type: "",
        message: "",
    })



    //criando uma const atrbuido a func event para a pagina nao ser carregada caso tenha erro
    const onchangeInput = e => setOrcamento({ ...orcamento, [e.target.name]: e.target.value });

    const sendOrcamento = async e => {
        e.preventDefault();
        setResponse({formSave: true})
        console.log(orcamento)
    
        try {
          const res = await fetch('http://localhost:8080/orcamento', {
            method: 'POST',
            body: JSON.stringify(orcamento),
            headers: { 'Content-Type': 'application/json' }
          });
    
          const responseEnv = await res.json();
    
          if (responseEnv.error) {
            setResponse({
              formSave: false,
              type: 'error',
              message: responseEnv.message
            });
          } else {
            setResponse({
              formSave: false,
              type: 'success',
              message: responseEnv.message
            });
          }
        } catch (err) {
          setResponse({
            formSave: false,
            type: 'error',
            message: "Erro: Orçamento não enviado com sucesso!"
          });
        }
    
    
      }

    return (
        <div>
            <Head>
                <title> Orçamento -WL-Programador</title>
                <meta name="description" content="sit de Orcamento de Software" />
            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color:#050C3D;
                        color:#00A1FC;
                        padding-top:40px;
                        padding-bottom: 40px;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Orçamento</h1>
                </Container>

            </Jumbotron>

            <Jumbotron fluid className="form-orcamento">
                <style>
                    {`.form-orcamento{
                        padding-top:50px;
                        padding-botton:80px;
                        background-color:#FFF;
                        margin-bottom: 0rem !important;

                        }`}
                </style>

                <Container>
                {response.type === "error"? <Alert color="danger">{response.message}</Alert> : ""}
                {response.type === "success"? <Alert color="success">{response.message}</Alert> : ""}
                    <Form onSubmit={sendOrcamento}>
                        <FormGroup>

                            <Label for="name">Nome:</Label>
                            <Input type="text" name="name" id="name" placeholder="Prencha com seu nome completo" onChange={onchangeInput} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input type="email" name="email" id="email" placeholder="wlprogramador@exemple.com" onChange={onchangeInput} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="name">Telefone:</Label>
                            <Input type="text" name="phone" id="phone" placeholder="(xx) XXXX-XXXX" onChange={onchangeInput} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="name">WhatsaApp:</Label>
                            <Input type="text" name="WhatsaApp" id="WhatsaApp" placeholder="(xx) XXXX-XXXX" onChange={onchangeInput} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="name">Fale sobre seu Projeto:</Label>
                            <Input type="textarea" name="projeto" id="projeto" placeholder="welcome Friends ! ..." onChange={onchangeInput} />
                        </FormGroup>


                       <Button type="submit" outline color="primary">Solicitar Orçamento</Button> 
                        
                
                       
                    </Form>
                </Container>
            </Jumbotron>

            <Rodape />
        </div>
    )
}

export default Orcamento;