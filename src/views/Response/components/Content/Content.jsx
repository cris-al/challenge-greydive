import { Div, Label } from "../../styles/responseStyles";

export default function Content({responses}){
    return(
        <>
            <Div>
                <Label>Nombre Completo:</Label>
                <Label>{responses?.full_name}</Label>
            </Div>
            <Div>
                <Label>Correo Electrónico:</Label>
                <Label>{responses?.email}</Label>
            </Div>
            <Div>
                <Label>Fecha de nacimiento:</Label>
                <Label>{responses?.birth_date}</Label>
            </Div>
            <Div>
                <Label>País de Origen:</Label>
                <Label>{responses?.country_of_origin[0].toUpperCase() + responses?.country_of_origin.slice(1)}</Label>
            </Div>
        </>
    )
}