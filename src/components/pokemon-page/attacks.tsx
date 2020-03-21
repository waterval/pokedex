import * as React from "react";
import Type from "../pokemon-page/type";
import Progress from "../pokemon-page/progress";
import Wrapper from "../pokemon-page/wrapper";
import Paragraph from "../pokemon-page/paragraph";

const Attacks = props => (
    <Wrapper className={props.type}>
        {props.attacks.map(attack => {
            return (
                <Wrapper className="attack" key={attack.name}>
                    <Paragraph text={attack.name} />
                    <Paragraph text={attack.damage} />
                    <Type type={attack.type} />
                    <Progress value={attack.damage} max={"120"} />
                </Wrapper>
            );
        })}
    </Wrapper>
);

export default Attacks;
