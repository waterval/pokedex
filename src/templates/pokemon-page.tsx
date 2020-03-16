import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PokemonPage = ({ pageContext }) => {
    const { pokemon } = pageContext;
    return (
        <Layout>
            <SEO title={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
            {console.log(pokemon)}
        </Layout>
    );
};

export default PokemonPage;
