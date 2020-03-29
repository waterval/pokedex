import * as React from "react";

const Measurement = (props: any) => {
    const minimum: number = props.minimum.substring(
        0,
        props.minimum.length - props.number
    );
    const maximum: number = props.maximum.substring(
        0,
        props.maximum.length - props.number
    );
    const amount: number = (Number(minimum) + Number(maximum)) / 2;
    const roundedAmount: string = amount.toFixed(2);
    return (
        <p>
            <strong>{props.category}:</strong> {roundedAmount} {props.unit}
        </p>
    );
};

export default Measurement;
