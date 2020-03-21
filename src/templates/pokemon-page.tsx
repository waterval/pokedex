import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/pokemon-page/header";
import Attacks from "../components/pokemon-page/attacks";
import Info from "../components/pokemon-page/info";
import Wrapper from "../components/pokemon-page/wrapper";
import Image from "../components/pokemon-page/image";
import Energy from "../components/pokemon-page/energy";
import Measurement from "../components/pokemon-page/measurement";
import Catch from "../components/pokemon-page/catch";
import SEO from "../components/seo";

const PokemonPage = ({ pageContext }) => {
    const { pokemon } = pageContext;
    return (
        <Layout>
            {console.log(pokemon)}
            <SEO title={pokemon.name} />
            <Wrapper className={"container"}>
                <Wrapper className={"name"}>
                    <Wrapper className={"portrait"}>
                        <Image src={pokemon.image} alt={pokemon.name} />
                        <Header title={pokemon.name} />
                    </Wrapper>
                    <Energy energy={pokemon.types} />
                </Wrapper>
                <Wrapper className="stats">
                    <Header title="Stats" />
                    <Info category="Health" value={pokemon.maxHP} />
                    <Info category="Resistance" />
                    <Energy energy={pokemon.resistant} />
                    <Info category="Weaknesses" />
                    <Energy energy={pokemon.weaknesses} />
                </Wrapper>
                <Wrapper className="catch">
                    <Header title="Catch" />
                    <Catch rate={pokemon.fleeRate} />
                </Wrapper>
                <Wrapper className="origin">
                    <Header title="Origin" />
                    <Info category="Number" value={pokemon.number} />
                    <Info category="Family" value={pokemon.classification} />
                    <Measurement
                        category="Weight"
                        minimum={pokemon.weight.minimum}
                        maximum={pokemon.weight.maximum}
                        number={2}
                        unit={"kilogram"}
                    />
                    <Measurement
                        category="Height"
                        minimum={pokemon.height.minimum}
                        maximum={pokemon.height.maximum}
                        number={1}
                        unit={"meter"}
                    />
                </Wrapper>
                <Wrapper className="attacks">
                    <Header title="Attacks" />
                    <Attacks attacks={pokemon.attacks.fast} type={"fast"} />
                    <Attacks
                        attacks={pokemon.attacks.special}
                        type={"special"}
                    />
                </Wrapper>
            </Wrapper>
        </Layout>
    );
};

export default PokemonPage;
