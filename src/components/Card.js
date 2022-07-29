import React from "react";
import styled from "styled-components";

function Card({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.article`
    box-shadow: var(--dark-shadow);
    padding: 2rem;
    border-radius: 3px;
`;

export default Card;
