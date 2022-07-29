import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import GridContainer from "../../components/GridContainer";
import House from "../../components/house/House";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import { fetchHouses, decPage, incPage } from "../../features/house/houseSlice";

function Houses() {
    const { isLoading, houses, page } = useSelector((store) => {
        return store.houses;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHouses(page));
    }, [dispatch, page]);
    console.log(houses);
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
                    <h3 className="heading">Houses</h3>
                    <div className="underline"></div>
                </div>
                {houses.length === 0 ? (
                    <div className="no-data">
                        <h4>No houses Found</h4>
                    </div>
                ) : (
                    <GridContainer>
                        {houses.map((character, idx) => {
                            return <House key={idx} {...character} />;
                        })}
                    </GridContainer>
                )}
            </div>
            <Pagination
                dec={decPage}
                inc={incPage}
                page={page}
                fetcher={fetchHouses}
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
export default Houses;
