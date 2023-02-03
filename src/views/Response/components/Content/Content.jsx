import { Div, Label, Cont } from "../../styles/responseStyles";

export default function Content({responses}){
    return(
        <>
            <Div>
                <Cont>
                <Label>Nombre Completo:</Label>
                <Label>{responses?.full_name ? responses?.full_name : "No hay respuesta"}</Label>
                </Cont>
            </Div>
            <Div>
                <Cont>
                <Label>Correo Electrónico:</Label>
                <Label>{responses?.email ? responses.email : "No hay respuesta"}</Label>
                </Cont>
            </Div>
            <Div>
                <Cont>
                <Label>Fecha de nacimiento:</Label>
                <Label>{responses?.birth_date ? responses.birth_date : "No hay respuesta"}</Label>
                </Cont>
            </Div>
            <Div>
                <Cont>
                <Label>País de Origen:</Label>
                <Label>
                    { responses?.country_of_origin ? 
                    responses.country_of_origin[0].toUpperCase() + responses.country_of_origin.slice(1)
                    : "No hay respuesta"}
                </Label>
                </Cont>
            </Div>
        </>
    )
}