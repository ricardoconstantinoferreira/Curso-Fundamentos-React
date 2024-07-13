import React from "react";

export default props => {
    const qc = props.quandoClicar;
    const [min, max] = [50, 70];
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>

            <button onClick={_ => qc('Leopoldo Senna', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}