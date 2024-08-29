import React, { useState } from 'react';
import { Corretor } from '../../utils/corretor';
import './assets/style.scss';
import '../../assets/Global.scss';
import { formatPhoneNumber } from "../../utils/phoneNumberFormatter";

interface listaDeCorretores {
    corretores: Corretor[];
}

const ListaCorretores: React.FC<listaDeCorretores> = ({ corretores }) => {
  const [phoneTimers, setPhoneTimers] = useState<{ [key: number]: number }>({});
  const [phoneTexts, setPhoneTexts] = useState<{ [key: number]: string }>({});

   {/* Funçao para formatar o número de pontos */}  
  const formatNumber = (number: number): string => {
    return number.toLocaleString('pt-BR');
  }
 {/* Função para mostrar o telefone e esconder após 10 segundos */}  
  const handlePhoneTimer = (index: number, phoneNumber: string) => {
    setPhoneTimers((prevTimers) => ({ ...prevTimers, [index]: 5 }));
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber)
    setPhoneTexts((prevTexts) => ({ ...prevTexts, [index]: formattedPhoneNumber ? formattedPhoneNumber : 'Ver Telefone' }));
    setTimeout(() => {
      setPhoneTimers((prevTimers) => {
        const { [index]: _, ...rest } = prevTimers; 
        return rest;
      });
      setPhoneTexts((prevTexts) => ({ ...prevTexts, [index]: 'Ver Telefone' }));
    }, 10000); 
  };

  return (
    <div className='generic__container'>
       {/* Container Genérico */}  
      {corretores.map((corretor, index) => (
        <div className='corretor__container' key={index}>
           {/* Container Do Corretor contendo suas informações */}  
          <div className="corretor__imageContainer">
            <img src={corretor.photo} alt={corretor.name} className='corretor__backgroundPhoto'/>
            <img src={corretor.photo} alt={corretor.name} className='corretor__photo'/>
          </div>
          <div className='corretor__information'>
            <h3>{corretor.name}</h3>
            <p>{formatNumber(corretor.points)} pontos</p>
             {/* Ao clicar no botão o telefone aparece */}  
            <button onClick={() => handlePhoneTimer(index, corretor.phone)}>
              {phoneTexts[index] || 'Ver Telefone'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaCorretores;
