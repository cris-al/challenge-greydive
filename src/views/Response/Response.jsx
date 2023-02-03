import { useResponse } from "./hook/useResponse";
import { Container, MainContainer, Button } from "./styles/responseStyles";
import Title from "../../components/Title/Title";
import Content from "./components/Content/Content";
import Skeleton from "./components/Skeleton/Skeleton";

export default function Response(){
    const { responses, loading, handleClick } = useResponse();

    return(
        <MainContainer>
            { loading ? <Skeleton />
                      : <>
                        <Title text="Tus Respuestas"/>
                        <Container>
                            <Content responses={responses}/>
                        </Container>
                        <Button onClick={handleClick}>Volver</Button>
                        </>
            }
        </MainContainer>
    )
}