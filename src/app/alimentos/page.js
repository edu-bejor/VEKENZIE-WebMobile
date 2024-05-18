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

    return (
        <div>
            <Menu />
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
        </div>
    );
}