import { Title, Input, FormStyled, Label, InputContainer, CheckContainer, Paragraph,
 Button, ButtonContainer, MainContainer, Error } from "./styles/FormStyles";
import CustomSelect from "./components/Select/Select";
import { useForm } from "./hook/useForm";
import LoadingButton from "../../components/LoadingButton/LoadingButton";

export default function Form(){
    const { sel, check, submitButton, inputs, formik, sendLoading } = useForm();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return(
        <MainContainer>
            <Title>Encuesta</Title>
            <FormStyled onSubmit={handleSubmit}>
                { inputs?.length ?
                    inputs.map(el => {
                        return (<InputContainer key={el.label}>
                                    <Label>{el.label}:</Label>
                                    <Input name={el.name} type={el.type} value={values[el.name]}
                                            onChange={handleChange} onBlur={handleBlur}/>
                                    { touched[el.name] && errors[el.name] && <Error>{errors[el.name]}</Error>}
                                </InputContainer>)
                    })
                    : <p>Nada para mostrar</p> }
                <InputContainer>
                    <Label>{sel?.label}:</Label>
                    <CustomSelect name={sel?.name} options={sel?.options}
                        handleChange={handleChange} handleBlur={handleBlur}/>
                    { errors[sel?.name] && <Error>{errors[sel?.name]}</Error>}
                </InputContainer>
                <div>
                    <Paragraph>Leer términos y condiciones</Paragraph>
                    <CheckContainer>
                        <input type={check?.type} name={check?.name} value={values[check?.name]}
                            onChange={handleChange}/>
                        <Label>{check?.label}</Label>
                    </CheckContainer>
                    { touched[check?.name] && errors[check?.name] && <Error>{errors[check?.name]}</Error>}
                </div>
                <ButtonContainer>
                    <Button type={submitButton?.type}>
                        { sendLoading ? <LoadingButton /> : submitButton?.label}
                    </Button>
                </ButtonContainer>
            </FormStyled>
        </MainContainer>
    )
}