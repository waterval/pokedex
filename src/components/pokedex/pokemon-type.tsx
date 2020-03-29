import * as React from "react";
import * as styles from "./pokedex.module.css";
import { typeToColor } from ".././general/typeToColor";

const Type = props => (
    <p
        key={props.index}
        className={styles.type}
        style={{
            backgroundColor: typeToColor[props.type]
        }}
    >
        {props.type}
    </p>
);

export default Type;
