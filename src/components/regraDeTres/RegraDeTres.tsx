import React, { useState } from 'react'
import './assets/style.scss'
function RegraDeTres() {
    {/* Variáveis para guardar o valor de cada input */} 
    const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('');
    const [value3, setValue3] = useState<string>('');
    const [value4, setValue4] = useState<string>('Resultado');


    {/* Função de Regra de 3 Simples */} 
    const handleRegraDeTres = () => {
        {/* Convertemos o input de String para Float */} 
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
        const num3 = parseFloat(value3);

        {/* Verificamos se conseguimos converter adequadamente */} 
        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
            const result = (num3 * num2) / num1;
            {/* Fazemos a regra de 3 e armazenamos no valor do retângulo laranja */} 
            setValue4(result.toFixed(2).toString());
        } else {
            {/* Caso falhemos em converter, mostramos um valor vazio para o resultado */} 
            setValue4('');
        }
    };

  return (
    <div className='generic__container'>
        <h1 className='generic__containerTitle'>Regra de 3</h1>
        <div className='generic__containerDivision'>
            <div className='regraTres__inputs'>
                <div className='regraTres__inputsContainer'>
                    {/* Max Lenght apenas para previnir que o usuário entre com uma grande quantidade de caracteres possivelmente gerando algo erro */} 
                    <input type='text' className='generic__input' placeholder='60' maxLength={1000} onChange={(e) => setValue1((e.target.value))}/>
                    <div className="regraTres__lineContainer">
                        <div className="regraTres__line"></div>
                    </div>
                    <input type='text' className='generic__input' placeholder='100' maxLength={1000} onChange={(e) => setValue2((e.target.value))}/>
                </div>
                <div className='regraTres__inputsContainer'>
                    <input type='text' className='generic__input' placeholder='30' maxLength={1000} onChange={(e) => setValue3((e.target.value))}/>
                    <div className="regraTres__lineContainer">
                        <div className="regraTres__line"></div>
                    </div>
                    <input type='text' className='generic__input generic__inputResult' disabled={true} placeholder={value4} maxLength={1000}/>
                </div>
            </div>
            <div>
                <button className='generic__button' onClick={handleRegraDeTres}>Calcular</button>
            </div>
        </div>
    </div>
  )
}

export default RegraDeTres