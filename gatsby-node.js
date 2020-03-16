const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
        query {
            pokeAPI {
                pokemons(first: 151) {
                    id
                    number
                    name
                    weight {
                        minimum
                        maximum
                    }
                    height {
                        minimum
                        maximum
                    }
                    classification
                    types
                    resistant
                    attacks {
                        fast {
                            name
                            type
                            damage
                        }
                        special {
                            name
                            type
                            damage
                        }
                    }
                    weaknesses
                    fleeRate
                    maxCP
                    maxHP
                    image
                    evolutionRequirements {
                        amount
                        name
                    }
                    evolutions {
                        id
                        number
                        name
                        weight {
                            minimum
                            maximum
                        }
                        height {
                            minimum
                            maximum
                        }
                        classification
                        types
                        resistant
                        attacks {
                            fast {
                                name
                                type
                                damage
                            }
                            special {
                                name
                                type
                                damage
                            }
                        }
                        weaknesses
                        fleeRate
                        maxCP
                        maxHP
                        image
                    }
                }
            }
        }
    `);
    result.data.pokeAPI.pokemons.forEach(pokemon => {
        actions.createPage({
            path: `pokemon/` + pokemon.name.toLowerCase(),
            component: path.resolve(`./src/templates/pokemon-page.tsx`),
            context: {
                slug: `pokemon/` + pokemon.name.toLowerCase(),
                pokemon: pokemon
            }
        });
    });
};
