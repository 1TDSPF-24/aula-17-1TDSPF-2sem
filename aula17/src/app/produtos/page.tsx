
import Link from "next/link";

export default function Produtos() {



  return (
    <div>
        <h2>Produtos</h2>

            {/* <table className="custom-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td> <Link href={`/produto/${p.id}`}>Editar</Link> </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <h2>Quantidade de registros:{listaProdutos.length}</h2>
                        </td>
                    </tr>
                </tfoot>
            </table> */}

    </div>
  )
}
