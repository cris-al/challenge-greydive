import LoadingButton from "../../../../components/LoadingButton/LoadingButton";
import { Button, ButtonContainer, CheckContainer, Error, FormStyled, Input,
    InputContainer, Label, Paragraph } from "../../styles/FormStyles";
import CustomSelect from "../Select/Select";

export default function Formulary({inputs, sel, check, submitButton, sendLoading, formik}){
    const {values, touched, errors, handleBlur, handleChange, handleSubmit} = formik;
    return(
        <FormStyled onSubmit={handleSubmit}>
                { inputs?.map(el => {
                        return (<InputContainer key={el.label}>
                                    <Label>{el.label}:</Label>
                                    <Input name={el.name} type={el.type} value={values[el.name]}
                                            onChange={handleChange} onBlur={handleBlur}
                                            placeholder="Escriba su respuesta..."/>
                                    { touched[el.name] && errors[el.name] && <Error>{errors[el.name]}</Error>}
                                </InputContainer>)
                    }) }
                <InputContainer>
                    <Label>{sel?.label}:</Label>
                    <CustomSelect name={sel?.name} options={sel?.options}
                        handleChange={handleChange} handleBlur={handleBlur}/>
                    { touched[sel?.name] && errors[sel?.name] && <Error>{errors[sel?.name]}</Error>}
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
                    <Button type={submitButton?.type} disabled={sendLoading}>
                        { sendLoading ? <LoadingButton /> : submitButton?.label}
                    </Button>
                </ButtonContainer>
            </FormStyled>
    )
}