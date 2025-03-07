import { listaData } from "@/data/listaData";
import Link from "next/link";
 
function exibirLista() {
    return (
        <>
            <h1>Lista de produtos em tabela</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Produto</td>
                        <td>Detalhes</td>
                    </tr>
                </thead>
                <tbody>
                    {listaData.map(function (item) {
                        return (
                            <tr key={item.id} >
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>
                                    <Link href={'/detalhesProduto/' + item.id}>Ver Detalhes</Link>
                                </td>
                            </tr>
                        )
                    })}
 
                </tbody>
            </table>
        </>
    )
}
export default exibirLista;