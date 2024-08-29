import React from 'react'
import "./assets/style.scss"
import { MenuItem } from '../../utils/MenuItem'

// Interface que vai receber os itens do footer
interface FooterProps {
    logoPath: string;
    footerItens?: MenuItem[]
}
const Footer: React.FC<FooterProps> = ({logoPath, footerItens}) => {
  return (
    <div className='footer'> {/* Div base do footer */}
        <div className='footer__genericHalf'>  {/* Primeira metade do Footer */}
            {/* Verificando se a quantidade de itens do footer é maior que 0 */}  
            {footerItens && footerItens.length > 0 ? (           
                footerItens.map((item, index) => (
                    <div className='footer__item' key={index}>                    
                        <a href={item.redirectItem.path} >
                            <h3>{item.redirectItem.itemName}</h3>
                        </a>
                    </div>
                ))
            ) : null}
        </div>
        <div className='footer__genericHalf'>  {/* Segunda metade do Footer */}
            <h3>© Copyright 2024. Todos os direitos reservados.</h3>
            <img src={logoPath}></img>  {/* Caminho da imagem recebido como props */}
        </div>
    </div>
  )
}

export default Footer