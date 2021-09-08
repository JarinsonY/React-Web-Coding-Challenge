import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.png"

const Head = styled.header`
    display: flex;
    align-items: center;
`

const HeaderLogo = styled.div`
`

const HeaderContent = styled.div`
    padding: 0 1.5rem;
`

const LogoImg = styled.img`
    width: 120px;
`

const Title = styled(Link)`
    text-decoration: none;
    font-weight: bolder;
    font-size: xxx-large;
    color: black;
    transition: 0.3s ease all;
    &:hover {
        color: mediumturquoise;
    }
`

const Leyend = styled.h2`
    margin: auto;
`

const Header = ({ setKeyword }) => {

    return (
        <Head>
                <HeaderLogo>
                    <LogoImg src={Logo}></LogoImg>
                </HeaderLogo>
                <HeaderContent>
                    <Title to="/" onClick={() => { setKeyword('') }}>Police Departament of Berlin</Title>
                    <Leyend>Stolen bykes</Leyend>
                </HeaderContent>
        </Head>
    )
}

export default Header;