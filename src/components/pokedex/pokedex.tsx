import * as React from "react";
import { typeToColor } from ".././general/typeToColor";
import Type from "./pokemon-type";
import * as styles from "./pokedex.module.css";

const Pokedex = ({ queried, type }) => (
    <div className={styles.container}>
        {console.log("queried: ", queried)}
        {console.log("type: ", type)}
        {queried.map(pokemon => (
            <div
                className={styles.item}
                style={{ backgroundColor: typeToColor[pokemon.types[0]] }}
                key={pokemon.id}
            >
                <div className={styles.image}>
                    <a href={"pokemon/" + pokemon.name.toLowerCase()}>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </a>
                </div>
                <div>
                    <a href={"pokemon/" + pokemon.name.toLowerCase()}>
                        <p>
                            {pokemon.name} #{pokemon.number}
                        </p>
                        <Type type={pokemon.types[0]} />
                        {pokemon.types[1] && <Type type={pokemon.types[1]} />}
                    </a>
                </div>
            </div>
        ))}
    </div>
);

export default Pokedex;
