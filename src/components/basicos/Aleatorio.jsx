import React from "react";

export default function Aleatorio(props) {
    const {min, max} = props;
    const numeroAleatorio = parseInt(Math.random() * (max - min), 10) + min;

    return (
        <div>
            <span>Número Aleátorio entre {min} e {max}: </span>
            <strong>{numeroAleatorio}</strong>
        </div>
    )
}