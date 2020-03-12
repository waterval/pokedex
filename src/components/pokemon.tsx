import * as React from "react";
const styles = require("./pokemon.module.css");
const typeToColor = {
    Grass: "green",
    Bug: "green",
    Poison: "green",
    Fairy: "grey",
    Normal: "grey",
    Dragon: "grey",
    Ground: "brown",
    Rock: "brown",
    Fighting: "brown",
    Water: "blue",
    Ice: "blue",
    Psychic: "purple",
    Ghost: "purple",
    Fire: "red",
    Electric: "yellow"
};

const Pokemon = ({ queried, type }) => (
    <div className={styles.container}>
        {console.log("queried: ", queried)}
        {console.log("type: ", type)}
        {queried.map(pokemon => (
            <div
                className={styles.item}
                key={pokemon.id}
                style={{ backgroundColor: typeToColor[pokemon.types[0]] }}
            >
                <div className={styles.image}>
                    <a href={"pokemon/" + pokemon.name.toLowerCase()}>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </a>
                </div>
                <div className={styles.text}>
                    <a href={"pokemon/" + pokemon.name.toLowerCase()}>
                        <p className={styles + pokemon.types[0]}>
                            {pokemon.name} #{pokemon.number}
                            {pokemon.types[0]} {pokemon.types[1]}
                        </p>
                    </a>
                </div>
            </div>
        ))}
    </div>
);

export default Pokemon;
