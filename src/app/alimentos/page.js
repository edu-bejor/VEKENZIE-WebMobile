<<<<<<< HEAD
"use client";
import React, { useState } from 'react';
import Card from "@/components/card";
import Menu from "@/components/menu";
import Style from './page.module.css';
// import { useClient } from '@/utils/api'; // Removido pois não está sendo usado

export default function Alimentos() {
    const [texto, setTexto] = useState('');
    console.log(texto);

    const [comidas, setComidas] = useState(null);

    const handleSubmitComida = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/comidas/?texto=${texto}`);
            const dataJson = await response.json();
            setComidas(dataJson);
        } catch (error) {
            console.log(error);
        }
    };
=======
"use client"
import React, { useState } from 'react';
import Botao from "@/components/botao";
import Card from "@/components/card";
import Menu from "@/components/menu";
import { useClient } from '@/utils/api';

export default function Alimentos() {
    //  const { data, selectedData, texto, handleInputChange, Clicou } = useClient();
    const [texto, setTexto] = useState('');
    console.log(texto)

    const [comidas, setComidas] = useState(null);


    const handleSubmitComida = async (e) => {
        e.preventDefault()
        try {
            const data = await fetch(`/api/comidas/?texto=${texto}`)
            const dataJson = await data.json()
            setComidas(dataJson)
        } catch (error) {
            console.log(error)
        }
    }
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b

    return (
        <div>
            <Menu />
<<<<<<< HEAD
            <div className={Style.mobile}></div>
            <h1 className={Style.titulo}>Alimentos</h1>
            <div className={Style.pesquisa}>
                <input
                    className={Style.input}
                    type="text"
                    id="search"
                    name="Pesquisa"
                    placeholder="DIGITE O ALIMENTO"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
                <button className={Style.botaopesquisa} onClick={handleSubmitComida}>
                    <img src='https://super.so/icon/dark/search.svg'></img>
                </button>
            </div>
            <div className={Style.resultado}>
                {comidas && comidas.map((comida) => (
                    <div key={comida.id} className={Style.cardWrapper}>
                        <Card {...comida} />
                    </div>
                ))}
            </div>
            {/* {data && typeof data === 'object' && (
                <Card id={data.id} descricao={data.descricao} quantidade={data.quantidade} calorias={data.calorias} onClick={() => Clicou(data)} />
            )}
            {selectedData && <div>{selectedData}</div>} */}
=======
            <input type="text" id="search" name="Pesquisa" placeholder="Pesquise Aqui" value={texto} onChange={(e) => setTexto(e.target.value)} />
            <Botao texto="ver comida" onClick={handleSubmitComida} />
            {
                comidas && (
                    comidas.map((comida) => {
                        return (
                            <Card key={comida.id.timestamp} {...comida} />

                        )

                    }))
            }
            {/* {data && typeof data === 'object' && (
                <Card id={data.id} descricao={data.descricao} quantidade={data.quantidade} calorias={data.calorias} onClick={() => Clicou(data)} />
             )}
            {selectedData && <div>{selectedData}</div>}*/}
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
        </div>
    );
}