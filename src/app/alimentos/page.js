"use client"
import React from 'react';
import Botao from "@/components/botao";
import Card from "@/components/card";
import Menu from "@/components/menu";
import { useClient } from '@/utils/api'; // Ensure the path is correctly configured in your project

export default function Alimentos() {
    const { data, selectedData, texto, handleInputChange, Clicou } = useClient();

    return(
        <div>
            <Menu/> 
            <input type="text" id="search" name="Pesquisa" placeholder="Pesquise Aqui" value={texto} onChange={handleInputChange} />
            <Botao />
            {data && typeof data === 'object' && (
                <Card id={data.id} descricao={data.descricao} quantidade={data.quantidade} calorias={data.calorias} onClick={() => Clicou(data)}/>
            )}
            {selectedData && <div>{selectedData}</div>}
        </div>
    );
}