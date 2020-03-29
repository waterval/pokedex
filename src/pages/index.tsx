import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/general/layout";
import SEO from "../components/general/seo";
import Pokedex from "../components/pokedex/pokedex";

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Pokedex queried={data.pokeAPI.pokemons} />
    </Layout>
);

export default IndexPage;

export const query = graphql`
    query {
        pokeAPI {
            pokemons(first: 151) {
                id
                name
                image
                number
                types
            }
        }
    }
`;
