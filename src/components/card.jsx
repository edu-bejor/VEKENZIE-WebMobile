"use client"
import Style from './card.module.css';

export default function Card({ descricao, quantidade, calorias }) {
    return (
        <>
            <div className={Style.container1}>
                <div className={Style.img}></div>
                <div className={Style.textos}>
                    <h1>{descricao}</h1>
                    <p>{`Um(a) ${descricao} média contém aproximadamente ${calorias}`}</p>
                    <p style={{ color: '#63E100' }}>Ver Mais</p>
                </div>

            </div>

        </>
    );
}
