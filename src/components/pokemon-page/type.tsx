import * as React from "react";
import Wrapper from "../pokemon-page/wrapper";

const Type = props => (
    <Wrapper className={"type"} key={props.index}>
        {props.type}
    </Wrapper>
);

export default Type;
