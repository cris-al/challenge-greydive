import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 1.7rem;
    @media (min-width: 375px) {
        font-size: 1.8rem;
    }
    @media (min-width: 576px) {
        font-size: 1.9rem;
    }
    @media (min-width: 768px) {
        font-size: 2.3rem;
    }
    @media (min-width: 992px) {
        font-size: 2.6rem;
    }
    @media (min-width: 1200px) {
        font-size: 2.8rem;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3.5rem;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 3px;
    padding: 1rem;
    background-color: #1e88e5;
    box-shadow: 0 0 8px #616161;
    @media (min-width: 375px) {
        width: 80%;
        padding: 1.5rem;
    }
    @media (min-width: 576px) {
        padding: 2.5rem 2rem;
        margin: 0.5rem;
    }
    @media (min-width: 768px) {
        padding: 3rem;
        width: 600px;
    }
`;

export const Label = styled.label`
    font-size: 1rem;
    text-align: start;
    @media (min-width: 576px) {
        font-size: 1.1rem;
    }
    @media (min-width: 992px) {
        font-size: 1.2rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 1rem;
    transition: 0.5s;
    color: #1e88e5;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    @media (min-width: 576px) {
        font-size: 1.1rem;
    }
    @media (min-width: 992px) {
        font-size: 1.2rem;
    }
`;

export const Input = styled.input`
    border: none;
    font-size: 1rem;
    border-radius: 3px;
    background-color: #e0e0e0;
    padding: 0.5rem 1rem;
    outline: none;
    box-shadow: 0 0 5px #1565c0;
    &:focus{
        box-shadow: 0 0 10px #0d47a1;
    }
    @media (min-width: 576px) {
        font-size: 1.1rem;
    }
    @media (min-width: 992px) {
        font-size: 1.2rem;
    }
`;

export const CheckContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0.5rem;
    gap: 1rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 3px;
    width: 60%;
    background-color: #1e88e5;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    box-shadow: 0 0 5px #757575;
    transition: 0.5s;
    &:hover {
        cursor: pointer;
        background-color: #42a5f5;
    }
    @media (min-width: 576px) {
        font-size: 1.1rem;
        width: 150px;
    }
    @media (min-width: 992px) {
        font-size: 1.2rem;
    }
`;

export const Error = styled.p`
    text-align: start;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.8rem;
    color: red;
    text-shadow: 0 0 1px black;
`;