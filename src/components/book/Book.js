import React from "react";
import styled from "styled-components";
import Card from "../Card";

function Book({ name, authors, publisher, country, released }) {
    let newDate = new Date(released);
    newDate = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
    return (
        <Card>
            <Wrapper>
                <h4 className="gutter-bottom">Name: {name}</h4>
                <h5 className="gutter-bottom">
                    Authors:
                    {authors.map((author, idx) => {
                        return <span key={idx}> {author}</span>;
                    })}
                </h5>
                <p className="gutter-bottom">Publisher: {publisher} </p>
                <p className="gutter-bottom">Released: {newDate}</p>
                <p className="gutter-bottom">Country: {country}</p>
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

export default Book;
