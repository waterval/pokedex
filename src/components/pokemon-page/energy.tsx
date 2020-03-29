import * as React from "react";
import Type from "../pokemon-page/type";
import Wrapper from "../pokemon-page/wrapper";
import * as styles from "../../templates/pokemon-page.module.css";

const Energy = (props: any) => (
    <Wrapper className={styles.energy}>
        {props.energy.map((type: string, index: number) => {
            return <Type type={type} key={index} />;
        })}
    </Wrapper>
);

export default Energy;
