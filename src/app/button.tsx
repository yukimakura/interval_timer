import React from 'react';
import styled from "styled-components"

const Button = styled.a`
background-color: rgb(231, 76, 60);
color: white;
padding: 4rem;
border-radius: 0.4rem;
cursor: pointer;
margin-top: 5em;
`

type Props = {
    onClick :() => void;
    children : string;
}
export default function LikeButton(props:Props) {
    return (
        <Button onClick={props.onClick}>{props.children}</Button>
    );
}