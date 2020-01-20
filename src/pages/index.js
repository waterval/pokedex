import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.pokeAPI.pokemons.map(poke => (
      <div key={poke.id}>
        <p>{poke.name}</p>
        <img src={poke.image} alt={poke.name} />
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
