"use client"
import React, { useState, useEffect } from 'react';
import Menu from "@/components/menu";
import Style from './page.module.css';
import Link from 'next/link';
import { getComidas } from '@/utils/api'; // Importação do método correto

export default function Alimentos() {
    const [comidasPorDia, setComidasPorDia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const comidas = await getComidas(); // Obter os dados corretamente

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
            const data = new Date(comida.id.timestamp * 1000).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            if (!comidasPorDia[data]) {
                comidasPorDia[data] = [];
            }
            comidasPorDia[data].push(comida);
        });

        return comidasPorDia;
    };

    const calcularCaloriasTotais = (comidasDoDia) => {
        return comidasDoDia.reduce((total, comida) => {
            return total + parseInt(comida.calorias.replace(' kcal', ''), 10);
        }, 0);
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro: {error.message}</div>;
    }

    return (
        <div>
            <Menu />
            <div className={Style.header}>
                <div className={Style.mobile}></div>
                <h1 className={Style.titulo}>Meu Controle</h1>
                <button className={Style.Botao}><Link className={Style.link} href="/registraralimentacao">ADICIONAR</Link></button>
            </div>
            <div className={Style.resultado}>
                {Object.entries(comidasPorDia).map(([data, comidas]) => (
                    <div key={data} className={Style.cardWrapper}>
                        <h2>ALIMENTOS:</h2>
                        <ul>
                            {comidas.map((comida, index) => (
                                <li key={index}>
                                    <p>{comida.descricao} ({comida.quantidade})</p>
                                </li>
                            ))}
                        </ul>
                        <p>DATA: {data}</p>
                        <p>TOTAL DE CALORIAS: {calcularCaloriasTotais(comidas)}KCAL</p>
                    </div>
                ))}
            </div>
        </div>
    );
}