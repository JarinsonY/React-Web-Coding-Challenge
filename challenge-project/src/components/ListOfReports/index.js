import styled from "styled-components"
import ReportCard from "../ReportCard";

const DivListOfReports = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ListOfReports = ({ reports }) => {

    return (
        <DivListOfReports>
            {
                reports.map((r) =>
                    <ReportCard
                        key={r.id}
                        {...r}
                    />
                )
            }
        </DivListOfReports>
    )
}

export default ListOfReports;