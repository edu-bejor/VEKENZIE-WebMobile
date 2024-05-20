import Menu from "@/components/menu";
import Style from './page.module.css';
import Card from "@/components/card";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Menu />
      <main className={Style.container1}>
        <div className={Style.verAlimentos}>
          <h1>SAIBA A CALORIA DE ALGUNS ALIMENTOS VEGANOS</h1>
          <button className={Style.Botao}><Link className={Style.link} href="/alimentos">VER MAIS</Link></button>
        </div>
        <div className={Style.containerCard}>
          <Card descricao="Banana" quantidade={1} calorias={10} />
          <Card descricao="Kiwi" quantidade={1} calorias={10} />
          <Card descricao="Blueberry" quantidade={1} calorias={10} />
          <button className={Style.seta}><Link href="/alimentos"><img className={Style.seta_icon} src="https://super.so/icon/light/arrow-right.svg"></img></Link></button>
        </div>
        <div className={Style.importancia}>
          <h1>IMPORTÂNCIA DE CONTROLAR A CALORIA NAS SUAS ALIMENTAÇÕES</h1>
          <p>Controlar a ingestão de calorias é uma prática fundamental para manter um estilo de vida saudável, mesmo em uma dieta vegana. Embora os alimentos de origem vegetal sejam geralmente mais baixos em calorias do que seus equivalentes de origem animal, ainda é crucial garantir um equilíbrio adequado para atender às necessidades nutricionais.</p>
        </div>
        <div className={Style.controle}>
          <h1>FAÇA SEU CONTROLE</h1>
          <button className={Style.Botao}><Link className={Style.link} href="/alimentos">VER MAIS</Link></button>
        </div>
      </main>
    </>
  );
}