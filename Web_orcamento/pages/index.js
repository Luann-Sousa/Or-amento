
import React from 'react';
import '../pages/_app';
import Head from 'next/head';
import Menu from '../src/components/Menu';
import { Jumbotron, Button, Container } from 'reactstrap';
import Rodape from '../src/components/Rodape';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Home({data}) {
    return (
        <div>
            <Head>
               <title> Home -WL-Programador</title>
               <meta name="description" content="sit de Orcamento de Software"/>
            </Head>
            <Menu />

            <Jumbotron fluid className="descr_top">
                <style>
                    {`.descr_top{
                        background-color:#050c3d;
                        color:white;
                        margin:0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">{data.home.topTitulo}</h1>
                    <p className="lead">{data.home.topSubTitulo}</p>

                    <a href={data.home.topLinkbtn}className="btn btn-outline-primary btn-lg mt-4">{data.home.topTextobtn}</a>

                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background:#FFF;
                        margin-bottom: 0;
                    }
                    .circulo{
                        width:140px;
                        height:140px;
                        background-color:#0a197d;
                        color:white;
                        font-size:52px;
                        padding-top: 24px;
                    }
                    .centralizar{
                        margin:0 auto !important;
                        float:none !important;
                    }
                    `}
                </style>
                <Container className="text-center">
                    <div className="servicos">
                        <h2 className="display-4">{data.home.serTitulo}</h2>
                        <p className="lead pb-6">{data.home.serSubTitulo}</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={data.home.serUmIncone}/>
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serUmTitulo}</h2>
                            <p>{data.home.serUmDesc}</p>
                        </div>

                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon={data.home.serDoisIncone}/>
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serDoisTitulo}</h2>
                            <p> {data.home.serdDoisDesc}   </p>
                        </div>

                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                 <FontAwesomeIcon icon={data.home.serTresIncone}/>
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.serTresTitulo}</h2>
                            <p> {data.home.serTresDesc} </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Rodape/>
        </div>
    )
}

//funcao pra trazer dados do nosso banco de dados pro sit
export async function getServerSideProps (){
   const response = await fetch("http://localhost:8080/home");
   const data = await response.json();
   
   // Pass data to the page via props
  return { props: { data } }
}

export default Home;