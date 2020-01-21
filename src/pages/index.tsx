import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        {console.log("data", data)}
        {data.pokeAPI.pokemons.map(pokemon => (
            <div key={pokemon.id}>
                <p>{pokemon.name}</p>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
        ))}
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query {
        pokeAPI {
            pokemons(first: 151) {
                id
                name
                image
            }
        }
    }
`
