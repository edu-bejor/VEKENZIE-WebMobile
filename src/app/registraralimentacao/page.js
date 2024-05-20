"use client"
import React, { useState } from 'react';
import Card from "@/components/card";
import Menu from "@/components/menu";
import Style from './page.module.css';

export default function Alimentos() {
    const [texto, setTexto] = useState('');
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

    const handleAddToJSON = async (comida) => {
        try {
            const response = await fetch("http://localhost:8000/comidas", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(comida)
            });

            if (response.status === 201) {
                alert('Alimento adicionado com sucesso!');
            } else {
                alert('Erro ao adicionar o alimento. Por favor, tente novamente.');
            }
        } catch (error) {
            console.log("ERROR: " + error);
            alert('Ocorreu um erro ao adicionar o alimento. Por favor, tente novamente.');
        }
    };

    return (
        <div>
            <Menu />
            <div className={Style.mobile}></div>
            <h1 className={Style.titulo}>Registrar Alimentação</h1>
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
                    <img src='https://super.so/icon/dark/search.svg' alt="search icon" />
                </button>
            </div>
            <div className={Style.resultado}>
                {comidas && comidas.map((comida) => (
                    <div key={comida.id} className={Style.cardWrapper}>
                        <Card {...comida} />
                        <button className={Style.botaoadicionar} onClick={() => handleAddToJSON(comida)}><img src='https://super.so/icon/light/plus.svg'></img></button>
                    </div>
                ))}
            </div>
        </div>
    );
}
