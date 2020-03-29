import * as React from "react";
import Wrapper from "../pokemon-page/wrapper";
import * as styles from "../../templates/pokemon-page.module.css";
import { typeToColor } from "../general/typeToColor";

const Type = props => (
    <Wrapper
        className={styles.type}
        key={props.index}
        style={{
            backgroundColor: typeToColor[props.type]
        }}
    >
        {props.type}
    </Wrapper>
);

export default Type;
