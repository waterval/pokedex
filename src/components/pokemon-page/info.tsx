import * as React from "react";

const Info = (props: any) => (
    <p>
        <strong>{props.category}:</strong> {props.value}
    </p>
);

export default Info;
