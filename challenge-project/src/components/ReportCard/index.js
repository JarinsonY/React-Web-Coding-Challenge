import { Link } from "react-router-dom";
import styled from "styled-components";
import Not_Image from "../../assets/not_bike.jpg"
import { formatDate } from "../../services/formatDate";

const Card = styled.div`
    display: flex;
    padding: 1rem;
    margin-bottom: 1.5rem;
    align-items: center;
    border: 2px solid #48D1CC75;
    word-wrap: break-word;
    transition: 0.3s ease all;
    background-color: #FFF;
    width: 70%;
    &:hover {
        border-color: mediumturquoise;
        background-color: #48D1CC75;
    }
`

const CardImage = styled.div`
    align-self: center;
`

const CardBody = styled.div`
    padding-left: 1rem;
`

const Image = styled.img`
    width: 250px;
    border: 2px solid mediumturquoise;
`

const Title = styled(Link)`
    font-size: medium;
    color: white;
    background-color: mediumturquoise;
    cursor: pointer;
    padding: .3rem;
    text-decoration: none;
    font-size: larger;
    font-weight: bold;
    transition: 0.3s ease all;
    &:hover {
        color: mediumturquoise;
        background-color: white;
        text-decoration: underline;
    }
`

const BodyText = styled.p`

`

const ReportCard = ({ id, title, description, date_stolen, stolen_location, large_img }) => {
    return (
        <Card key={id}>
            <CardImage>
                <Image src={large_img || Not_Image} alt="Bike" />
            </CardImage>
            <CardBody>
                <Title to={`report/${id}`}>{title}</Title>
                <BodyText><strong>Description: </strong>{description || "No description available..."}</BodyText>
                <BodyText><strong>Date: </strong>{formatDate(date_stolen)}</BodyText>
                <BodyText><strong>Location: </strong>{stolen_location}</BodyText>
            </CardBody>

        </Card>
    )
}

export default ReportCard;
