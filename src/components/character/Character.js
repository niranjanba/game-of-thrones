import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { Link } from "react-router-dom";

function Character({ name, gender, culture, born, died, url }) {
    let id = url.split("/").pop();
    return (
        <Card style={{ position: "relative", paddingBottom: "3rem" }}>
            <Wrapper>
                <h4 className="gutter-bottom">Name: {name}</h4>
                <h5 className="gutter-bottom">Gender: {gender}</h5>
                <p className="gutter-bottom">Culture: {culture} </p>
                <p className="gutter-bottom">Born: {born}</p>
                <p className="gutter-bottom">Died: {died}</p>
                <div className="btn-container">
                    <Link to={`/character/${id}`} className="btn text-btn">
                        see more
                    </Link>
                </div>
            </Wrapper>
        </Card>
    );
}

const Wrapper = styled.div`
    width: 100%;
    h4 {
        color: var(--clr-primary-4);
    }
    .btn-container {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 1rem;
        left: 0;
    }
`;

export default Character;
