import * as React from "react";

const Body = props => {
    const minimum = props.minimum.substring(
        0,
        props.minimum.length - props.number
    );
    const maximum = props.maximum.substring(
        0,
        props.maximum.length - props.number
    );
    const amount = (Number(minimum) + Number(maximum)) / 2;
    return (
        <p>
            <strong>{props.category}:</strong> {amount} {props.unit}
        </p>
    );
};

export default Body;
