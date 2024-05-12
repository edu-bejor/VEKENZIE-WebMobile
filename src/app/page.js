import Menu from "@/components/menu";
import Style from './page.module.css';
import Botao from "@/components/botao";
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <Menu />
      <main className={Style.container1}>
        <div className={Style.verAlimentos}>
          <h1>SAIBA A CALORIA DE ALGUNS ALIMENTOS VEGANOS</h1>
          <Botao texto="VER MAIS" />
        </div>
        <div className={Style.containerCard}>
          <Card />
          <Card />
        </div>
        <div className={Style.importancia}>
          <h1>IMPORTÂNCIA DE CONTROLAR A CALORIA NAS SUAS ALIMENTAÇÕES</h1>
          <p>Controlar a ingestão de calorias é uma prática fundamental para manter um estilo de vida saudável, mesmo em uma dieta vegana. Embora os alimentos de origem vegetal sejam geralmente mais baixos em calorias do que seus equivalentes de origem animal, ainda é crucial garantir um equilíbrio adequado para atender às necessidades nutricionais.</p>
        </div>
        <div className={Style.controle}>
          <h1>FAÇA SEU CONTROLE</h1>
          <Botao texto="VER MAIS" />
        </div>
      </main>
    </>
  );
}