import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Leopoldo Riquelme" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Larissa Miranda" idade={25} nerd={false}></DiretaFilho>
        </div>
    )
}