import * as React from "react";

const Progress = props => (
    <progress value={props.value} max={props.max}></progress>
);

export default Progress;
