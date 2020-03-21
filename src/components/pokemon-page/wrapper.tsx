import * as React from "react";

const Wrapper = props => (
    <div className={props.className} key={props.index}>
        {props.children}
    </div>
);

export default Wrapper;
