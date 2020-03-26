import * as React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/pokemon-page/header";
import Attacks from "../components/pokemon-page/attacks";
import Info from "../components/pokemon-page/info";
import Wrapper from "../components/pokemon-page/wrapper";
import Image from "../components/pokemon-page/image";
import Energy from "../components/pokemon-page/energy";
import Measurement from "../components/pokemon-page/measurement";
import Catch from "../components/pokemon-page/catch";
import Biography from "../components/pokemon-page/biography";
import Breadcrumbs from "../components/pokemon-page/breadcrumbs";
import * as styles from "./pokemon-page.module.css";

const PokemonPage = ({ pageContext }) => {
    const { pokemon } = pageContext;
    return (
        <Layout>
            {console.log(pokemon)}
            <SEO title={pokemon.name} />
            <Breadcrumbs name={pokemon.name} />
            <Wrapper className={styles.container}>
                <Wrapper className={styles.portraitContainer}>
                    <Wrapper className={styles.portraitItem}>
                        <Image src={pokemon.image} alt={pokemon.name} />
                    </Wrapper>
                </Wrapper>
                <Wrapper className={styles.name}>
                    <Header title={pokemon.name} />
                    <Info category="Health" value={pokemon.maxHP} />
                    <Wrapper className={styles.types}>
                        <Info category="Type" />
                        <Energy energy={pokemon.types} />
                    </Wrapper>
                    <Catch rate={pokemon.fleeRate} />
                </Wrapper>
                <Wrapper className={styles.origin}>
                    <Header title="Origin" />
                    <Info category="Number" value={pokemon.number} />
                    <Info category="Family" value={pokemon.classification} />
                    <Measurement
                        category={"Weight"}
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
                <Wrapper className={styles.biography}>
                    <Header title="Biography" />
                    <Biography
                        name={pokemon.name}
                        classification={pokemon.classification}
                        health={pokemon.maxHP}
                        fleerate={pokemon.fleeRate}
                        minimumHeight={pokemon.height.minimum}
                        maximumHeight={pokemon.height.maximum}
                        minimumWeight={pokemon.weight.minimum}
                        maximumWeight={pokemon.weight.maximum}
                        typeOne={pokemon.types[0]}
                        typeTwo={pokemon.types[1]}
                    />
                </Wrapper>
                <Wrapper className={styles.attacks}>
                    <Header title="Attacks" />
                    <Attacks attacks={pokemon.attacks.fast} type={"fast"} />
                    <Attacks
                        attacks={pokemon.attacks.special}
                        type={"special"}
                    />
                </Wrapper>
                <Wrapper className={styles.effectiveness}>
                    <Header title="Effectiveness" />
                    <Wrapper className={styles.types}>
                        <Info category="Resistance" />
                        <Energy energy={pokemon.resistant} />
                    </Wrapper>
                    <Wrapper className={styles.types}>
                        <Info category="Weaknesses" />
                        <Energy energy={pokemon.weaknesses} />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Layout>
    );
};

export default PokemonPage;
