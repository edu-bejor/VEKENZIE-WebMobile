"use client"
import { useState } from 'react';
import Link from 'next/link';
import Style from './menu.module.css';

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <main className={Style.main}>
                <header className={Style.header}>
                    <div className={Style.icone}>
                        <h1 className={Style.titulo}>VEKENZIE</h1>
                        <div className={Style.hamburguer} onClick={toggleMenu}>☰</div>
                    </div>
                    <div className={Style.slogan}>
                        <h2>Viva bem, coma consciente - contagem de calorias para uma vida vegana!</h2>
                    </div>
                </header>
                <nav className={`${Style.menu} ${menuOpen ? Style.open : ''}`}>
                    <div className={Style.mobileMenu}>
                        <div onClick={toggleMenu} className={Style.closeButton}>X</div>
                    </div>
                    <ul>
                        <li>
                            <Link href="/">IMPORTÂNCIA</Link>
                        </li>
                        <li>
                            <Link href="/alimentos">ALIMENTOS</Link>
                        </li>
                        <li>
                            <Link href="/registraralimentacao">REGISTRAR ALIMENTAÇÃO</Link>
                        </li>
                        <li>
                            <Link href="/veralimentacao">VER ALIMENTAÇÃO</Link>
                        </li>
                    </ul>
                </nav>
            </main>
        </div>
    );
}