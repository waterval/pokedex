import * as React from "react";
import Type from "../pokemon-page/type";
import Wrapper from "../pokemon-page/wrapper";

const Energy = props => (
    <Wrapper className={"energy"}>
        {props.energy.map((type, index) => {
            return <Type type={type} key={index} />;
        })}
    </Wrapper>
);

export default Energy;
