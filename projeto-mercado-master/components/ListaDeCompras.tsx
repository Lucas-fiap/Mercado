import { Item } from '../data/listaData'

type listaDeComprasProps = {
    itens: Item[]
}

const ListaDeCompras = (props: listaDeComprasProps) => {
    return (
        <>
            <h2>Lista de Compras</h2>
            {props.itens.map(item => {
                return (
                    <div key={item.id}>
                        <p>Produto: {item.nome}</p>
                        <p>Quantidade: {item.quantidade}</p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default ListaDeCompras