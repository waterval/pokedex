import * as React from "react";

const Biography = props => {
    const flee = Math.round(props.fleerate * 100);
    let type = `the ${props.typeOne}`;
    if (props.typeTwo) {
        type = `both the ${props.typeOne} and the ${props.typeTwo}`;
    }
    let text = `${props.name} is a ${props.classification}. It has ${props.health}
    health. After trying to catch it with a Pokéball, there is a ${flee}% chance it will
    flee. ${props.name} has a minimum length of ${props.minimumHeight} and
    can grow up to ${props.maximumHeight}. It weighs between
    ${props.minimumWeight} and ${props.maximumWeight}. ${props.name} has
     ${type} type.`;
    return <p>{text}</p>;
};

export default Biography;
