import React from "react";
import { listaData } from "@/data/listaData";

type detalhesProduto = {
    params: {
        id: string;
    }
}

const detalhesProduto = (props: detalhesProduto) => {
    const produtoID = Number(props.params.id);
    const produto = listaData.find(function (item) {
        return item.id === produtoID;
    });
    return(
        <>
            <h2>DETALHES PRODUTO</h2>
            <p><strong>ID: </strong>{produto?.id}</p>
            <p><strong>Nome: </strong>{produto?.nome}</p>
            <p><strong>Quantidade: </strong>{produto?.quantidade}</p>
        </>

    )
};
export default detalhesProduto;