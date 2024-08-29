import React, { useRef } from 'react'
import "./assets/style.scss"
import html2canvas from 'html2canvas';
import { CommonImageProps } from '../../utils/commonImageProps'

const DownloadImage: React.FC<CommonImageProps> = ({ url }) => {
    const componentRef = useRef<HTMLDivElement>(null);
    // Função para fazer o download da div através do html2canvas
    const handleDownload = () => {
      // Verificando se o componente existe
        if (componentRef.current) {
          // Transformando o componente em imagem e especificando suas informações
          html2canvas(componentRef.current).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'downloaded-image.png';
            link.click();
          });
        }
      };

    return (
      <div >
        {/* Criando o componente com a imagem e o botão de download */}
          <div className='generic__container teste' ref={componentRef}>
              <img src={url} className='generic__image' />
              <button className='generic__button downloadImage__overlayButton'> Imovel Guide </button>
          </div>
          <div className='downloadImage__buttonContainer'>
              <button className='generic__button downloadImage__button' onClick={handleDownload}> Download </button>
          </div>
      </div>
    );
  };

export default DownloadImage