import { useResponse } from "./hook/useResponse";
import { Container, MainContainer, Button } from "./styles/responseStyles";
import Title from "../../components/Title/Title";
import Content from "./components/Content/Content";

export default function Response(){
    const { responses, loading } = useResponse();
    
    const content = responses ? <Content responses={responses}/>
                              : <p>nada para mostrar</p>

    return(
        <MainContainer>
            <Title text="Tus Respuestas"/>
            <Container>
                {
                    loading ? <p>Cargando...</p>
                            : content
                }
            </Container>
            <Button>Volver</Button>
        </MainContainer>
    )
}