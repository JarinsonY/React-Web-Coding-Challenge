import styled from "styled-components";
import useBikes from "../../hooks/useBikes";
import ListOfReports from "../ListOfReports";
import Spinner from "../Spinner";

const DivContent = styled.div`
    margin-top: .5rem;
`

const Total = styled.p`
    text-align: right;
`

const NoResults = styled.p`
    color: red;
    text-align: center;
`


const Content = ({ reports }) => {
    
    const { loading } = useBikes()

    return (
        <>
            {loading
                ? <Spinner />
                : <DivContent>
                    {reports.length === 0
                        ? <NoResults>No reports found</NoResults>
                        : <>
                            <Total>Total: {reports.length}</Total>
                            <ListOfReports reports={reports} />
                        </>
                    }
                </DivContent>
            }
        </>
    )
}

export default Content;
