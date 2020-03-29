import * as React from "react";
import { typeToColor } from "../general/typeToColor";
import * as styles from "../../templates/pokemon-page.module.css";

const Progress = (props: any) => {
    let proportionedWidth = (props.value / props.max) * 100 + "%";
    return (
        <div className={styles.progressContainer}>
            <div
                className={styles.progressItem}
                style={{
                    width: proportionedWidth,
                    backgroundColor: typeToColor[props.type]
                }}
            ></div>
        </div>
    );
};

export default Progress;
