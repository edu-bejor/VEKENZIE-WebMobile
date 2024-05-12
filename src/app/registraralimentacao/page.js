import Link from "next/link";
import Menu from "@/components/menu";

export default function RegistrarAlimentacao(){
    return (
        <>
            <Menu/>
            <h1>Registrar Alimentação</h1>
            <Link href="/">Voltar</Link>
        </>
    );
}