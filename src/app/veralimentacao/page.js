"use client"
import React, { useState, useEffect } from 'react';
import Menu from "@/components/menu";
import Style from './page.module.css';
import Link from 'next/link';
import { deleteComida, getComidas } from '@/utils/api';
import CardAlimentos from '@/components/cardAlimentos';

export default function Alimentos() {
    const [comidasPorDia, setComidasPorDia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const comidasResponse = await fetch("http://localhost:8000/comidas");
                if (!comidasResponse.ok) {
                    throw new Error('Failed to fetch data');
                }
                const comidas = await comidasResponse.json();
                const comidasOrganizadasPorDia = organizarComidasPorDia(comidas);
                setComidasPorDia(comidasOrganizadasPorDia);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const organizarComidasPorDia = (comidas) => {
        const comidasPorDia = {};
        comidas.forEach((comida) => {
            const dataParts = comida.date.split('/');
            const formattedDate = `${dataParts[0]}/${dataParts[1]}/${dataParts[2]}`;
            if (!comidasPorDia[formattedDate]) {
                comidasPorDia[formattedDate] = [];
            }
            comidasPorDia[formattedDate].push(comida);
        });
        return comidasPorDia;
    };

    const calcularCaloriasTotais = (comidasDoDia) => {
        return comidasDoDia.reduce((total, comida) => {
            return total + parseInt(comida.calorias.replace(' kcal', ''), 10);
        }, 0);
    };

    const handleDeleteComida = async (date) => {
        try {
            const comidasParaDeletar = comidasPorDia[date];
            const promises = comidasParaDeletar.map(comida => deleteComida(comida.id.timestamp));
            await Promise.all(promises);
    
            // Remover a data dos comidasPorDia
            const updatedComidas = { ...comidasPorDia };
            delete updatedComidas[date];
            setComidasPorDia(updatedComidas);
        } catch (error) {
            console.error("Erro ao excluir comida:", error);
        }
    };

    if (loading) {
        return <div className={Style.carregando}>Carregando...</div>;
    }

    if (error) {
        return <div className={Style.ocorreuerro}>Ocorreu um erro: {error.message}</div>;
    }

    return (
        <div>
            <Menu />
            <div className={Style.mobile}></div>
            <div className={Style.header}>
                <h1 className={Style.titulo}>Meu Controle</h1>
                <button className={Style.Botao}><Link className={Style.link} href="/registraralimentacao">ADICIONAR</Link></button>
            </div>
            <div className={Style.resultado}>
                {Object.entries(comidasPorDia).map(([data, comidas]) => (
                    <CardAlimentos
                        key={data}
                        data={data}
                        comidas={comidas}
                        handleDeleteComida={handleDeleteComida}
                        calcularCaloriasTotais={calcularCaloriasTotais}
                    />
                ))}
            </div>
        </div>
    );
}