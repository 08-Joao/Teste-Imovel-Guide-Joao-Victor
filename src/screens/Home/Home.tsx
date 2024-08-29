import React from 'react'
import './assets/style.scss'
import Navbar from '../../components/Navbar/Navbar'
import logo from '../../assets/logo-imovel-guide.webp';
import { MenuItem } from '../../utils/MenuItem'
import { RedirectItem } from '../../utils/RedirectItem';
import ListaCorretores from '../../components/listaCorretores/ListaCorretores';
import { Corretor } from '../../utils/corretor';
import photoCorretora1 from "../../assets/corretora-1.jpeg";
import photoCorretor1 from "../../assets/corretor-1.jpg";
import photoCorretora2 from "../../assets/corretora-2.png";
import photoCorretor2 from "../../assets/corretor-2.jpg";
import MandeUmaMensagem from '../../components/mandeMensagem/MandeUmaMensagem';
import RegraDeTres from '../../components/regraDeTres/RegraDeTres';
import ImagemModal from '../../components/imagemModal/ImagemModal';
import photoHouse from "../../assets/generic-house.jpg";
import DownloadImage from '../../components/downloadImage/DownloadImage';
import ZoomImage from '../../components/zoomImage/ZoomImage';
import Footer from '../../components/Footer/Footer';

// Informando os itens da primeira metade da navbar. Passamos o nome de cada item e uma página para aonde eles redirecionarão(todas as páginas estão vazias pois não temos conteúdo para mostrar) Ademais, temos também a opção de colocar botões dropdown, aos quais abrirão um menu próprio com suas própras opções
const navItems1: MenuItem[] = [
    { 
        redirectItem: { itemName: "Condomínios", path: "/" }, 
        type: "simpleButton" 
    },
    { 
        redirectItem: { itemName: "Fórum", path: "/" }, 
        type: "dropdown", 
        dropdownItems: [
            { itemName: "Imoveis", path: "/" },
            { itemName: "Jurídico Imobiliário", path: "/" },
            { itemName: "Condomínuo", path: "/" },
            { itemName: "Financiamento e Consórcio", path: "/" },
            { itemName: "Contabilidade Imobiliária", path: "/" },
            { itemName: "Engenharia Civil", path: "/" },
            { itemName: "Engenharia Elétrica", path: "/" },
            { itemName: "Reforma", path: "/" },
            { itemName: "Arquitetura", path: "/" },
            { itemName: "Decoração e Design de Interiores", path: "/" },
            { itemName: "Bairros do Brasil", path: "/" }
        ]
    },
    { 
        redirectItem: { itemName: "Guia", path: "/" }, 
        type: "dropdown", 
        dropdownItems: [
            { itemName: "Imobiliárias e Corretores", path: "/" },
            { itemName: "Imobiliárias", path: "/" },
            { itemName: "Corretores de imóveis", path: "/" },
            { itemName: "Guia de CRM", path: "/" },
            { itemName: "Advogados", path: "/" },
            { itemName: "Síndicos", path: "/" },
            { itemName: "Assessores de Financiamento", path: "/" },
            { itemName: "Vendedores de Consórcio", path: "/" },
            { itemName: "Arquitetos", path: "/" },
            { itemName: "Engenheiros Civis", path: "/" },
            { itemName: "Engenheiros Elétricos", path: "/" },
            { itemName: "Construtores e Reformadores", path: "/" },
            { itemName: "Decoradores", path: "/" },
            { itemName: "Designers de Interiores", path: "/" },
            { itemName: "Contadores", path: "/" },
            { itemName: "Blogs", path: "/" },
        ]
    },
    { 
        redirectItem: { itemName: "Artigos", path: "/" }, 
        type: "simpleButton" 
    },
    { 
        redirectItem: { itemName: "Ferramentas", path: "/" }, 
        type: "simpleButton" 
    },
];

// Segunda metade dos itens da Navbar(Dividimos em 2 para ficar com o espacamento correto)
const navItems2: MenuItem[] = [
    { 
        redirectItem: { itemName: "Cotar Imóvel", path: "/" }, 
        type: "simpleButton" 
    },
    { 
        redirectItem: { itemName: "Planos", path: "/" }, 
        type: "simpleButton" 
    },
    { 
        redirectItem: { itemName: "Entrar", path: "/" }, 
        type: "simpleButton" 
    },
];

// Itens do Footer
const footerItems: MenuItem[] = [
    { 
        redirectItem: { itemName: "Termos", path: "/" }, 
        type: "simpleButton" 
    },
    { 
        redirectItem: { itemName: "Contatos", path: "/" }, 
        type: "simpleButton" 
    },
    { 
        redirectItem: { itemName: "Sobre", path: "/" }, 
        type: "simpleButton" 
    }
]

// Interface Redirect para o botão de cadastro
const cadastrar: RedirectItem = { itemName: "CADASTRE-SE", path: "/" };
const listaCorretores: Corretor[] = [
    { name: "Nome Corretora", photo: photoCorretora1, points: 3000, phone: "99 99999-9999" },
    { name: "Nome Corretor", photo: photoCorretor1, points: 1260, phone: "(99) 91234-5678" },
    { name: "Nome Corretora 2", photo: photoCorretora2, points: 1954, phone: "(99) 987654321" },
    { name: "Nome Corretor 2", photo: photoCorretor2, points: 745, phone: "99 99999 9999" },
]

function Home() {
  return (
    <div>
        {/* Instanciação e Passagem de atributos da Navbar */} 
        <Navbar logoPath={logo} 
            navItem_1={navItems1}
            navItem_2={navItems2}
            buttonCadastro={cadastrar}
        />
        {/* Div para controlar o display Grid */} 
        <div className='home__body'>
            {/* Instanciamos cada item do teste 1, 2,...,6 com seus devidos atributos */} 
            <ListaCorretores corretores={listaCorretores}/>
            <MandeUmaMensagem/>
            <RegraDeTres/>
            <ImagemModal url={photoHouse}/>
            <DownloadImage  url={photoHouse}/>
            <ZoomImage url={photoHouse}/>
        </div>
        {/* Instanciação e Passagem de atributos do Footer */} 
        <Footer logoPath={logo} 
            footerItens={footerItems}
        />
    </div>
  )
}

export default Home