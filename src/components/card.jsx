"use client"
import Style from './card.module.css';

export default function Card() {
    return (
        <>
            <div className={Style.container1}>
                <div className={Style.img}></div>
                <div className={Style.textos}>
                    <h1>BATATA</h1>
                    <p>Uma batata média contém aproximadamente 165 calorias.</p>
                    <p style={{ color: '#63E100' }}>Ver Mais</p>
                </div>

            </div>

        </>
    );
}
