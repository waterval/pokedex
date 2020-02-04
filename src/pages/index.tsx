import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Pokemon from "../components/pokemon";

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Pokemon queried={data} />
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
