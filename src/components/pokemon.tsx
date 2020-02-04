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

const Pokemon = ({ queried }) => (
    <div className={styles.container}>
        {queried.pokeAPI.pokemons.map(pokemon => (
            <div
                className={styles.item}
                key={pokemon.id}
                style={{ backgroundColor: typeToColor[pokemon.types[0]] }}
            >
                <a href={"pokemon/" + pokemon.name.toLowerCase()}>
                    <img
                        className={styles.image}
                        src={pokemon.image}
                        alt={pokemon.name}
                    />
                    <p className={styles + pokemon.types[0]}>
                        #{pokemon.number} {pokemon.name} {pokemon.types[0]}
                    </p>
                </a>
            </div>
        ))}
    </div>
);

export default Pokemon;
