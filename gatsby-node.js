const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
        query {
            pokeAPI {
                pokemons(first: 151) {
                    name
                }
            }
        }
    `);
    result.data.pokeAPI.pokemons.forEach(({ name }) => {
        actions.createPage({
            path: "pokemon/" + name.toLowerCase(),
            component: path.resolve(`./src/templates/individual-pokemon.tsx`),
            context: {
                slug: "pokemon/" + name.toLowerCase()
            }
        });
    });
};
