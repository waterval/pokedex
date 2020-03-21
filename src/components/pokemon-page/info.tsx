import * as React from "react";

const Info = props => (
    <p>
        <strong>{props.category}:</strong> {props.value}
    </p>
);

export default Info;
