import * as React from "react";
import * as styles from "../../templates/pokemon-page.module.css";

const Breadcrumbs = (props: { name: string }) => (
    <div className={styles.breadcrumbsContainer}>
        <div className={styles.breadcrumbsItem}>
            <a href="/pokedex/">Pokédex</a> > Pokemon > {props.name}
        </div>
    </div>
);

export default Breadcrumbs;
