import { useHistory } from "react-router"
import styled from "styled-components";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

const DivButtons = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 1.5rem;
    padding: 8px;
`

const ButtonNavegation = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.active ? 'mediumturquoise' : '#000'};
    border-radius: 10px;
    border: none;
    color: ${props => props.active ? '#000' : '#fff'};
    margin-inline: 10px;
    transition: 0.3s ease all;
    width: ${props => props.width ? props.width : 50}px;
    &:hover {
        cursor: pointer;
        background-color:${props => props.active ? '#000' : 'mediumturquoise'};
        color: ${props => props.active ? '#fff' : '#000'};
        box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
    }
`

const Pagination = ({ bikes, page, setPage }) => {

    const history = useHistory()

    const numPages = [1, 2, 3, 4, 5]

    const goToPage = (num) => {
        setPage(num)
        history.replace(`/${num}`)
        window.scrollTo(0, 0);
    }

    const firstPage = () => {
        setPage(1)
        history.replace(`/${1}`)
        window.scrollTo(0, 0);
    }

    const previousPage = () => {
        setPage(prev => prev - 1)
        history.replace(`/${page - 1}`)
        window.scrollTo(0, 0);
    }

    const nextPage = () => {
        setPage(prev => prev + 1)
        history.replace(`/${page + 1}`)
        window.scrollTo(0, 0);
    }

    return (
        <DivButtons>
            {page > 1 &&
                <ButtonNavegation onClick={firstPage} width={150}>
                    <ArrowLeft width={35} height={35} />
                    <strong>FIRST</strong>
                </ButtonNavegation>
            }

            {page === 1
                ?
                numPages.map((n) => {
                    <ButtonNavegation onClick={() => goToPage(n)}>
                        <p>{n}</p>
                    </ButtonNavegation>
                })
                :
                <ButtonNavegation onClick={previousPage} width={150}>
                    <ArrowLeft width={35} height={35} />
                </ButtonNavegation>
            }

            {bikes.length < 10
                ? <h3 style={{ color: "black" }}>No more results found</h3>
                :
                <>
                    <ButtonNavegation active={true}>
                        <p>{page}</p>
                    </ButtonNavegation>
                    <ButtonNavegation onClick={nextPage} width={150}>
                        <ArrowRight width={35} height={35} />
                    </ButtonNavegation>
                </>
            }
        </DivButtons>
    )
}

export default Pagination;
