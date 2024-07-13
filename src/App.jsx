import React from "react";

import './App.css';
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Famila from "./components/basicos/Famila";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default _ =>
    <div className="App">
        <h1>Fundamentos React (Arrow) _ default </h1>

        <div className="Cards">

            <Card titulo="#11 - Componente Controlado (Input)" color="#999112">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#999112">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#999112">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#EEFF11">
                <ParOuImpar numero={333}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Ricardo' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'ricardoconstantino30@gmail.com' }}></UsuarioInfo>
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Repetição Exercicio" color="#111000">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#554EEE">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#787FFE">
                <Famila sobrenome="Constantino">
                    <FamiliaMembro nome="Ricardo" />
                    <FamiliaMembro nome="Camila" />
                    <FamiliaMembro nome="Isabela" />
                </Famila>
            </Card>

            <Card titulo="#04 - Exemplo de Card" color="#FA6900">
                <Aleatorio min={10} max={40} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#e94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#FFF000">
                <ComParametro
                    titulo="Student Situation"
                    aluno="Ricardo" nota={9.5}
                />
                <ComParametro
                    titulo="Student Situation"
                    aluno="Camila" nota={9.9}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#545AAA">
                <Primeiro />
            </Card>
        </div>
    </div>