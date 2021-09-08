import styled from "styled-components";
import Not_Image from "../../assets/not_bike.jpg"
import { formatDate } from "../../services/formatDate";

const DivReportDetail = styled.div`
    padding: 2rem 8rem;
    background-color: #fff;
`

const DivDataImage = styled.div`
    text-align: center;
`

const Image = styled.img`
    max-width: 600px;
`

const DivDataReport = styled.div`
    border-top: 2px solid black;
    margin-top: 2rem;
    padding-top: 2rem;
`

const DivData = styled.div`
    margin-bottom: 2rem;
`

const TitleData = styled.p`
    font-weight: bold;
    `

const TextData = styled.p`
    margin-left: 2rem;
`

const ReportDetail = ({ bike }) => {
    return (
        <DivReportDetail>
            {console.log(bike)}
            <DivDataImage>
                <Image src={bike.large_img || Not_Image} alt="Bike" />
            </DivDataImage>

            <DivDataReport>
                <DivData>
                    <TitleData>Report: </TitleData>
                    <TextData>#{bike.id}</TextData>
                </DivData>
                <DivData>
                    <TitleData>Title: </TitleData>
                    <TextData>{bike.title}</TextData>
                </DivData>
                <DivData>
                    <TitleData>Description of Incident: </TitleData>
                    <TextData>{bike.description || "No description available..."}</TextData>
                </DivData>
                <DivData>
                    <TitleData>Date Of The Theft: </TitleData>
                    <TextData>{formatDate(bike.date_stolen)}</TextData>
                </DivData>
                <DivData>
                    <TitleData>Location Of The Theft: </TitleData>
                    <TextData>{bike.stolen_location}</TextData>
                </DivData>
                <DivData>
                    <TitleData>Colors: </TitleData>
                    <TextData>{bike.frame_colors}</TextData>
                </DivData>
            </DivDataReport>
        </DivReportDetail>
    )
}

export default ReportDetail;
