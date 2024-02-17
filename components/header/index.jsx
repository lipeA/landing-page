import Logo from '../../public/imagens/logo.svg';
import Imagem from 'next/image'
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div>
                <div>
                    <Imagem src={Logo} />
                </div>
                <div>
                    <ul>
                        <li> <Link href={"/"}/> Home </li>
                        <li> <Link href={"/"}/>O que fazemos </li>
                        <li> <Link href={"/"}/>Case </li>
                    </ul>
                </div>
                <div>
                    <button>Fale conosco</button>
                </div>
            </div>
        </>
    );
}