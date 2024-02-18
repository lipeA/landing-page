import Logo from '../../public/imagens/logo.svg';
import Imagem from 'next/image'
import Link from "next/link";
import './Header.css'


export default function Header() {
    return (
        <>
            <div className='container'>
                <div>
                   <Link href="/" > <Imagem src={Logo} /> </Link>
                </div>
                <div className=''>
                    <ul className='listMenu'>
                        <li> <Link href="/" /> Home </li>
                        <li> <Link href="/" />O que fazemos </li>
                        <li> <Link href="/" />Case </li>
                    </ul>
                </div>
                <div>
                    <button className='buttonMenu'>Fale conosco</button>
                </div>
            </div>
        </>
    );
}