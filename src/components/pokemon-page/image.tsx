import * as React from "react";

const Image = (props: { src: string; alt: string }) => (
    <img src={props.src} alt={props.alt} />
);

export default Image;
