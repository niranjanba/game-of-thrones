import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import GridContainer from "../../components/GridContainer";
import Book from "../../components/book/Book";
import { decPage, fetchBooks, incPage } from "../../features/book/bookSlice";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";

function Books() {
    const { isLoading, books, page } = useSelector((store) => store.books);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks(page));
    }, [dispatch, page]);
    console.log(page, books);
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
                    <h3 className="heading">Books</h3>
                    <div className="underline"></div>
                </div>
                {books.length === 0 ? (
                    <div className="no-data">
                        <h4>No Books Found</h4>
                    </div>
                ) : (
                    <GridContainer>
                        {books.map((book, idx) => {
                            return <Book key={idx} {...book} />;
                        })}
                    </GridContainer>
                )}
            </div>
            <Pagination
                dec={decPage}
                inc={incPage}
                page={page}
                fetcher={fetchBooks}
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
export default Books;
