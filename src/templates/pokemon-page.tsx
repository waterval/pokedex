import * as React from "react";
import SEO from "../components/general/seo";
import Layout from "../components/general/layout";
import HeaderTwo from "../components/pokemon-page/headertwo";
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
                <Wrapper>
                    <HeaderTwo title={pokemon.name} />
                    <Info category="Health" value={pokemon.maxHP} />
                    <Wrapper className={styles.types}>
                        <Info category="Type" />
                        <Energy energy={pokemon.types} />
                    </Wrapper>
                    <Catch rate={pokemon.fleeRate} />
                </Wrapper>
                <Wrapper>
                    <HeaderTwo title="Origin" />
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
                <Wrapper>
                    <HeaderTwo title="Biography" />
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
                <Wrapper>
                    <HeaderTwo title="Attacks" />
                    <Attacks attacks={pokemon.attacks.fast} type={"fast"} />
                    <Attacks
                        attacks={pokemon.attacks.special}
                        type={"special"}
                    />
                </Wrapper>
                <Wrapper>
                    <HeaderTwo title="Effectiveness" />
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
