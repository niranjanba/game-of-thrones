import React from "react";
import styled from "styled-components";
import Card from "../Card";

function Character({ name, titles, culture, born, died }) {
    return (
        <Card>
            <Wrapper>
                <h4 className="gutter-bottom">Name: {name}</h4>
                <h5 className="gutter-bottom">
                    Titles:
                    {titles.map((author, idx) => {
                        return <span key={idx}> {author},</span>;
                    })}
                </h5>
                <p className="gutter-bottom">Culture: {culture} </p>
                <p className="gutter-bottom">Born: {born}</p>
                <p className="gutter-bottom">Died: {died}</p>
            </Wrapper>
        </Card>
    );
}

const Wrapper = styled.div`
    width: 100%;
    h4 {
        color: var(--clr-primary-4);
    }
`;

export default Character;
