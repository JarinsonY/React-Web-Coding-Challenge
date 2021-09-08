import styled from "styled-components";

const FooterContent = styled.footer`
    margin-top: .5rem;
    background-color: mediumturquoise;
    padding: 1rem;
`

const TextFooter = styled.p`
    font-weight: 500;
    text-align: center;
`

const Author = styled.a`
    color: #000;
    transition: 0.3s ease all;
    font-weight: 700;
    text-decoration: none;
    &:hover{
        color: #FFF;
        cursor: pointer;
    }
`

const Footer = () => {
    return (
        <FooterContent>
            <TextFooter>🧑‍💻 | Develop by <Author href="http://github.com/JarinsonY" target="_blank">JarinsonP</Author> with 🤍</TextFooter>
        </FooterContent>
    )
}

export default Footer;