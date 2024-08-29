import React, { useState } from 'react';
import './assets/style.scss';
import { CommonImageProps } from '../../utils/commonImageProps'


const ImagemModal: React.FC<CommonImageProps> = ({ url }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  {/* Variável de controle para abrir e fechar o modal */}  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  {/* Funções para abrir e fechar o Modal */}  
  return (
    <div>
      {/* Container Genérico */}  
      <div className='generic__container'>
        <img src={url} className='generic__image'/>
      </div>
      <div>
        <button className='generic__button imagemModal__button' onClick={openModal}>ABRIR IMAGEM NO MODAL</button>
      </div>

       {/* Corpo do Modal e seus atributos */}  
      {isModalOpen && (
        <div className='imagemModal__modal'>
          <div className='imagemModal__modalOverlay' onClick={closeModal}></div>
          <div className='imagemModal__content'>
            <div className='modal__closeButtonContainer'>
                <button onClick={closeModal}>X</button>
            </div>
            <img src={url} className='imagemModal__image' alt='Imagem' />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagemModal;
