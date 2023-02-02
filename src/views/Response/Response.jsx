import { useResponse } from "./hook/useResponse";
import { Container, MainContainer, Label, Div,
Button } from "./styles/responseStyles";
import Title from "../../components/Title/Title";

export default function Response(){
    const { responses, loading } = useResponse();
    
    const content = responses ? <>
        <Div>
            <Label>Nombre Completo:</Label>
            <Label>{responses.full_name}</Label>
        </Div>
        <Div>
            <Label>Correo Electrónico:</Label>
            <Label>{responses.email}</Label>
        </Div>
        <Div>
            <Label>Fecha de nacimiento:</Label>
            <Label>{responses.birth_date}</Label>
        </Div>
        <Div>
            <Label>País de Origen:</Label>
            <Label>{responses.country_of_origin[0].toUpperCase() + responses.country_of_origin.slice(1)}</Label>
        </Div>
    </>
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