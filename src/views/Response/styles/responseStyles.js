import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    margin-bottom: 3.5rem;
    @media (min-width: 576px) {
        gap: 1.5rem;
    }
    @media (min-width: 992px) {
        gap: 2rem;
    }
`;

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 3px;
    background-color: #1e88e5;
    box-shadow: 0 0 8px #616161;
    transition: 0.5s;
    &:hover {
        background-color: #42a5f5;
    }
    @media (min-width: 375px) {
        width: 90%;
    }
    @media (min-width: 576px) {
        width: 500px;
    }
    @media (min-width: 768px) {
        width: 650px;
    }
    @media (min-width: 992px) {
        width: 750px;
    }
`;

export const Label = styled.label`
    font-size: 1rem;
    text-align: start;
    @media (min-width: 375px) {
        font-size: 1.1rem;
    }
    @media (min-width: 576px) {
        font-size: 1.2rem;
    }
    @media (min-width: 768px) {
        font-size: 1.3rem;
    }
    @media (min-width: 992px) {
        font-size: 1.4rem;
    }
`;

export const Button = styled.button`
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

export const Cont = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    @media (min-width: 576px) {
        padding: 2rem 1.5rem;
    }
    @media (min-width: 768px) {
        padding: 3rem 2rem;
    }
`;