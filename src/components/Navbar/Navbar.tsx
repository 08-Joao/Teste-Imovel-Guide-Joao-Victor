import React, { useState, useEffect } from 'react'
import "./assets/style.scss"
import { MenuItem } from '../../utils/MenuItem'
import { RedirectItem } from "../../utils/RedirectItem";
import { FaAngleDown } from "react-icons/fa6";

// Propriedados da Navbar
interface NavbarProps { 
    logoPath : string;
    navItem_1?: MenuItem[]; // ? Permitindo que seja Nulo
    navItem_2?: MenuItem[]; 
    buttonCadastro?: RedirectItem;
}
const Navbar: React.FC<NavbarProps> = ({ logoPath, navItem_1, navItem_2, buttonCadastro }) => {
    const [isOpen, setIsOpen] = useState(false);
    {/* Variável de Controle */} 
  return (
    <div className={isOpen ? 'navbar navbar__opened' : 'navbar'}>
        {/* Alterando a classe de acordo com a variável de controle */} 
        <div className='navbar__genericHalf navbar__1stHalf'>{/* Metade da navbar */} 
            <div className='navbar__logo__burguer'> {/* Div que contém o logo e o burguer permitindo que fiquem na mesma linha nos dispositivos mobile */} 
                <img src={logoPath} alt='Navbar_Logo' className='navbar__logo' />
                <div className={isOpen ? 'navbar__hamburguer navbar__hamburguer__opened' : 'navbar__hamburguer'} onClick={() => setIsOpen(!isOpen)}>
                    <div className='navbar__burguer'></div>
                    <div className='navbar__burguer'></div>
                    <div className='navbar__burguer'></div>
                </div>
            </div>
            {/* Verificamos se o primeiro conjunto de itens não é vazio, caso não seja, iteramos sobre seu conteúdo através do map */} 
            {navItem_1 && navItem_1.length > 0 ? (
            navItem_1.map((item, index) => (
                <div className='navbar__item' key={index}>
                    <a href={item.redirectItem.path}> {item.redirectItem.itemName} {item.type == "dropdown" ? <FaAngleDown className='navbar__dropdown__arrow' /> : null}</a>
                    {item.type == "dropdown" ? (
                        <ul className='navbar__dropdown'>
                            {item.dropdownItems && item.dropdownItems.length > 0 ? (
                                item.dropdownItems.map((dropdownItem, index2) => (
                                    <li className='navbar__dropdownItem' key={index2}>
                                        <a href={dropdownItem.path}>{dropdownItem.itemName}</a>
                                    </li>
                                ))
                            ) : null}
                        </ul>
                    ) : null}
                </div>
            ))
            ) : null}
        </div>
        <div className='navbar__genericHalf navbar__2ndHalf'> {/* Outra metade da navbar */}  
            {navItem_2 && navItem_2.length > 0 ? (
            navItem_2.map((item, index) => (
                <div className='navbar__item' key={index}>
                    <a href={item.redirectItem.path}>{item.redirectItem.itemName}</a>
                </div>
            ))
            ) : null}
            {buttonCadastro ? (
                <div className='navbar__bttnCadastro'>
                    <a href={buttonCadastro.path}>{buttonCadastro.itemName}</a>
                </div>
            ) : null}
        </div>
        
    </div>
  )
}

export default Navbar
