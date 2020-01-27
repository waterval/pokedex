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
            path: name,
            component: path.resolve(`./src/templates/individual-pokemon.tsk`),
            context: {
                slug: name
            }
        });
    });
};
