import Menu from "@/components/menu";
import Style from './page.module.css';
<<<<<<< HEAD
import Card from "@/components/card";
import Link from 'next/link';
=======
import Botao from "@/components/botao";
import Card from "@/components/card";
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b

export default function Home() {
  return (
    <>
      <Menu />
      <main className={Style.container1}>
        <div className={Style.verAlimentos}>
          <h1>SAIBA A CALORIA DE ALGUNS ALIMENTOS VEGANOS</h1>
<<<<<<< HEAD
          <button className={Style.Botao}><Link className={Style.link} href="/alimentos">VER MAIS</Link></button>
        </div>
        <div className={Style.containerCard}>
          <Card descricao="Banana" quantidade={1} calorias={10} />
          <Card descricao="Kiwi" quantidade={1} calorias={10} />
          <Card descricao="Blueberry" quantidade={1} calorias={10} />
          <button className={Style.seta}><Link href="/alimentos"><img className={Style.seta_icon} src="https://super.so/icon/light/arrow-right.svg"></img></Link></button>
=======
          <Botao texto="VER MAIS" />
        </div>
        <div className={Style.containerCard}>
          <Card />
          <Card />
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
        </div>
        <div className={Style.importancia}>
          <h1>IMPORTÂNCIA DE CONTROLAR A CALORIA NAS SUAS ALIMENTAÇÕES</h1>
          <p>Controlar a ingestão de calorias é uma prática fundamental para manter um estilo de vida saudável, mesmo em uma dieta vegana. Embora os alimentos de origem vegetal sejam geralmente mais baixos em calorias do que seus equivalentes de origem animal, ainda é crucial garantir um equilíbrio adequado para atender às necessidades nutricionais.</p>
        </div>
        <div className={Style.controle}>
          <h1>FAÇA SEU CONTROLE</h1>
<<<<<<< HEAD
          <button className={Style.Botao}><Link className={Style.link} href="/alimentos">VER MAIS</Link></button>
=======
          <Botao texto="VER MAIS" />
>>>>>>> 23cca3be5b4f62680f13ec5620d2a68100c2d40b
        </div>
      </main>
    </>
  );
}