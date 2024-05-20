"use client"
import Style from './card.module.css';

export default function Card({ descricao, quantidade, calorias }) {
    return (
        <>
            <div className={Style.container1}>
<<<<<<< HEAD
                <div className={Style.img} style={{ backgroundImage: `url('https://source.unsplash.com/800x600/?${descricao}')` }}></div>
                <div className={Style.textos}>
                    <h1>{descricao}</h1>
                    <p>{`Um(a) ${descricao} média contém aproximadamente ${calorias}`}</p>
                </div>
            </div>
        </>
    );
}
=======
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
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
