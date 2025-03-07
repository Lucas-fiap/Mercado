import ListaDeCompras from "../components/ListaDeCompras"
import { listaData, listaFrustas } from "../data/listaData"


const Home = () => {
  return (
    <>
      <h1>MERCADO</h1>
      <ListaDeCompras itens={listaData} />
      <ListaDeCompras itens={listaFrustas} />
    </>
  )
}

export default Home