import Link from "next/link";
import Menu from "@/components/menu";

export default function VerAlimentacao(){
    return (
        <>
            <Menu/>
            <h1>Ver Alimentação</h1>
            <Link href="/">Voltar</Link>
        </>
    );
}