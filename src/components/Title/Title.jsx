import styled from "styled-components";

const CustomTitle = styled.h1`
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

export default function Title({text}){
    return <CustomTitle>{text}</CustomTitle>
}