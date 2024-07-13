import './TabelaProdutos.css';
import React from "react";
import produtos from "../../data/produtos";

export default props => {

    const listaProdutos = produtos.map((produtos, i) => {
        return (
            <tr className={i % 2 == 0 ? 'Par' : 'Impar'} key={produtos.id}>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td>R$ {produtos.preco.toFixed(2)}</td>
            </tr>
        )
    });

    return (
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    )
}