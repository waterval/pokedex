import * as React from "react";
import Type from "../pokemon-page/type";
import Progress from "../pokemon-page/progress";
import Wrapper from "../pokemon-page/wrapper";
import Paragraph from "../pokemon-page/paragraph";
import * as styles from "../../templates/pokemon-page.module.css";

interface Attack {
    name: string;
    type: string;
    damage: number;
}

const Attacks = (props: any) => (
    <Wrapper className={props.type}>
        {props.attacks.map((attack: Attack) => {
            if (attack.name === null) {
                return null;
            }
            return (
                <Wrapper className={styles.attack} key={attack.name}>
                    <Paragraph text={attack.name} />
                    <Wrapper>
                        <Type type={attack.type} />
                    </Wrapper>
                    <Paragraph text={attack.damage} />
                    <Progress
                        value={attack.damage}
                        max={"120"}
                        type={attack.type}
                    />
                </Wrapper>
            );
        })}
    </Wrapper>
);

export default Attacks;
