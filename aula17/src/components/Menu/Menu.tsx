import Link from "next/link";

export default function Menu() {
  return (
    <nav className="menu">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/produtos">Produtos</Link></li>
            <li><Link href="/produtos/cad-produto">Cadastro</Link></li>
        </ul>
    </nav>
  )
}
