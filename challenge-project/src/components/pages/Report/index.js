import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import getSingleBike from "../../../services/getSingleBike";
import Header from "../../Header";
import styled from "styled-components";
import Spinner from "../../Spinner";
import ReportDetail from "../../ReportDetail";
import Footer from "../../Footer";
import useBikes from "../../../hooks/useBikes";
import ArrowLeft from "../../Icons/ArrowLeft";

const ReportPage = styled.div`
`

const Detail = styled.div`
    margin-top: .5rem;
`

const TitlePage = styled.div`
    margin: 2rem auto 0 auto;
    padding: 2rem 0;
    background-color: mediumturquoise;
    display: flex;
    align-items: center;
    `

const Back = styled.span`
    margin: 0 3rem;
    color: #FFF;
    background-color: #000;
    transition: 0.3s ease all;
    &:hover{
        color: #000;
        background-color: #FFF;
    }
`

const TextError = styled.h3`
    color: red;
    text-align: center;
`

const Report = () => {

    const [bike, setBike] = useState({});

    const { setKeyword } = useBikes();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { id } = useParams();

    let history = useHistory();

    useEffect(() => {
        setLoading(true);
        getSingleBike({ id })
            .then(bike => {
                setBike(bike)
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                setError(true)
            })
    }, [id])

    return (
        <ReportPage>
            <Header setKeyword={setKeyword} />
            <TitlePage>
                <Back onClick={() => history.goBack()} >
                    <ArrowLeft width={40} height={40} />
                </Back>
                <h2>Report</h2>
            </TitlePage>
            <Detail>
                {loading
                    ? <Spinner />
                    : <>
                        {error
                            ? <TextError>Ooops, something went wrong</TextError>
                            : <ReportDetail bike={bike} />
                        }
                    </>
                }
            </Detail>
            <Footer />
        </ReportPage>
    )
};

export default Report;
