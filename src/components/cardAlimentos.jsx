"use client"
import React from 'react';
import Style from './cardAlimentos.module.css';

const CardAlimentos = ({ data, comidas, handleDeleteComida, calcularCaloriasTotais }) => {
    const formatarData = (data) => {
        const dataParts = data.split('/');
        return `${dataParts[0]}/${dataParts[1]}/${dataParts[2]}`;
    };    
    return (
        <div className={Style.cardAlimentos}>
            <div className={Style.excluirprinc} onClick={() => handleDeleteComida(data)} role="button" tabIndex="0">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxN_VqMCMn-ISlIoj1w46st9jk0Sj40SZae5NM5FOMYy9Axvn' className={Style.foto} alt="Excluir comida"></img>
                <div className={Style.excluir}><span>X</span></div>
            </div>
            <div className={Style.edicao}>
                <h2 className={Style.alimentos}>ALIMENTOS:</h2>
                <div><img src='https://super.so/icon/dark/edit-3.svg' alt="Editar"></img></div>
            </div>
            <ul className={Style.lista}>
                {comidas.map((comida, index) => (
                    <li key={index}>
                        <p className={Style.comida}>{comida.descricao} ({comida.quantidade})</p>
                    </li>
                ))}
            </ul>
            <p className={Style.datas}>DATA: {data}</p>
            <div className={Style.total}>
                <p className={Style.totalcal}>TOTAL DE CALORIAS:</p>
                <p className={Style.kcal}>{calcularCaloriasTotais(comidas)}KCAL</p>
            </div>
        </div>
    );
};

export default CardAlimentos;