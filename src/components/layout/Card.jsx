import React from "react";
import "./Card.css";

export default props => {

    const cardStyle = {
        backgroudColor: props.color || '#008',
        borderColor: props.color || '#008',
    };

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}