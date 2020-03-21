import * as React from "react";
import Info from "../pokemon-page/info";
import Progress from "../pokemon-page/progress";
import Wrapper from "../pokemon-page/wrapper";

const Catch = props => {
    const rate = (1 - props.rate) * 100;
    const chance = rate + "%";
    return (
        <Wrapper className={"catch"}>
            <Info category="Catch rate" value={chance} />
            <Progress value={rate} max={"100"} />
        </Wrapper>
    );
};

export default Catch;
