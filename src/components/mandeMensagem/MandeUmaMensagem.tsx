import React, { useState } from 'react';
import './assets/style.scss';
import { formatCPF } from '../../utils/cpfFormatter';
import { formatPhoneNumber } from '../../utils/phoneNumberFormatter';

function MandeUmaMensagem() {
    const [cpf, setCpf] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
     
     {/* Função para formatar o CPF e setar o valor na variável na hora que um novo digito for inserido*/}  
    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        setCpf(formatCPF(input));
    };

    {/* Função para formatar o Numero e setar o valor na variável na hora que um novo digito for inserido*/} 
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("phone")
        const input = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        setPhone(formatPhoneNumber(input));
    };

    return (
        <div className='generic__container'>            
            <h1 className='generic__containerTitle'>Envie sua mensagem</h1>
            <div className='generic__containerDivision'>
                <div>
                    <input type='text' className='generic__input' placeholder='Digite seu CPF' value={cpf} onChange={handleCpfChange}  maxLength={14}/>
                    <input type='text' className='generic__input' placeholder='Digite seu Telefone' value={phone} onChange={handlePhoneChange}  maxLength={15}/>
                    <textarea className='generic__input generic__textarea' placeholder='Digite o assunto' maxLength={2000}/>
                </div>
                <div >
                    {/* Quando clicar no botão um alert é exibido, contudo, ainda não há nenhuma função para utilizar essas informações */} 
                    <button className='generic__button' onClick={() => alert('Mensagem enviada com sucesso!')}> Enviar Mensagem</button>
                </div>
            </div>
        </div>

    );
}

export default MandeUmaMensagem;
