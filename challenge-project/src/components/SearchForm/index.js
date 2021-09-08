import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    margin: 2rem auto auto 3rem;
`

const Input = styled.input`
    margin-right: 10px;
    font-family: inherit;
    height: 25px;
    width: 50%;
    padding: 3px;
    border: 2px solid black;
    border-radius: 5px;
    transition: 0.3s ease all;
    &:hover {
        border-color: mediumturquoise;
    }
    `

const InputDate = styled.input`
    margin-right: 10px;
    font-family: inherit;
    height: 25px;
    padding: 3px;
    border: 2px solid black;
    border-radius: 5px;
    transition: 0.3s ease all;
    &:hover {
        border-color: mediumturquoise;
    }
    `

const Button = styled.button`
    height: 35px;
    font-family: inherit;
    font-weight: 700;
    padding: 0 1rem;
    background-color: transparent;
    border: 2px solid mediumturquoise;
    border-radius: 5px;
    transition: 0.3s ease all;
    &:hover {
        cursor: pointer;
        background-color: mediumturquoise;
    }
`

const SearchForm = ({ setKeyword }) => {

    const [inputText, setInputText] = useState('')


    const handleTextChange = (evt) => {
        setInputText(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        inputText === ''
            ? alert("Enter a description")
            : setKeyword(inputText);
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" id="InputSearchBar" placeholder="Search case descriptions" onChange={handleTextChange} />
            <InputDate type="date" id="From" placeholder="From" />
            <InputDate type="date" id="To" placeholder="To" />
            <Button type="submit">Find cases</Button>
        </Form>
    )
}

export default SearchForm;
