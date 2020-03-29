import * as React from "react";
import Info from "../pokemon-page/info";
import Wrapper from "../pokemon-page/wrapper";

const Catch = (props: { rate: number }) => {
    let chance: string;
    if (props.rate >= 0.15) {
        chance = "Common";
    } else if (props.rate >= 0.125) {
        chance = "Uncommon";
    } else if (props.rate >= 0.075) {
        chance = "Rare";
    } else {
        chance = "Very rare";
    }
    return (
        <Wrapper>
            <Info category="Rarity" value={chance} />
        </Wrapper>
    );
};

export default Catch;
