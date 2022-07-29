import React from "react";
import styled from "styled-components";
import Card from "../Card";

function House({ name, titles, region, words, coatOfArms }) {
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
                <p className="gutter-bottom">Region: {region} </p>
                <p className="gutter-bottom">Words: {words}</p>
                <p className="gutter-bottom">Coat Of Arms: {coatOfArms}</p>
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

export default House;
