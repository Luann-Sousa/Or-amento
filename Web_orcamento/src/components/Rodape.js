import React from 'react';

import {Container, Jumbotron} from 'reactstrap'

const Rodape = () =>{
    return(
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color:#0503D3;
                    color:white;
                    padding-top:20px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }`}
            </style>
            <Container>
               <h1 className="lead text-center">Desenvolvido por Weverson Luan &copy;</h1>
            </Container>
        </Jumbotron>
    )
}

export default Rodape;