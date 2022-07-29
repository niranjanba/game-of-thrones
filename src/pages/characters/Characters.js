import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import GridContainer from "../../components/GridContainer";
import Character from "../../components/character/Character";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import {
    fetchCharacters,
    decPage,
    incPage,
} from "../../features/character/characterSlice";

function Characters() {
    const { isLoading, characters, page } = useSelector((store) => {
        return store.characters;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCharacters(page));
    }, [dispatch, page]);
    console.log(page);
    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    return (
        <Wrapper>
            <div className="section-center">
                <div className="title">
                    <h3 className="heading">Characters</h3>
                    <div className="underline"></div>
                </div>
                {characters.length === 0 ? (
                    <div className="no-data">
                        <h4>No characters Found</h4>
                    </div>
                ) : (
                    <GridContainer>
                        {characters.map((character, idx) => {
                            return <Character key={idx} {...character} />;
                        })}
                    </GridContainer>
                )}
            </div>
            <Pagination
                dec={decPage}
                inc={incPage}
                page={page}
                fetcher={fetchCharacters}
            />
        </Wrapper>
    );
}

const Wrapper = styled.main`
    .section-center {
        padding: 0;
        .title {
            margin-top: 6rem;
        }
        .no-data {
            margin: 3rem;
        }
    }
`;
export default Characters;
