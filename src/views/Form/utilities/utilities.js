import * as Yup from "yup";
import { parse, isDate } from "date-fns";

const parseDateString = (value, originalValue) => {
    const parseDate = isDate(originalValue) ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());
    return parseDate;
}

export const initialValues = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: false
};

const messageReq = "*Campo obligatorio";
const maxDate = new Date("01/01/2008");
const countries = ["argentina", "brasil", "chile", "colombia", "mexico", "peru", "uruguay", "venezuela"];
export const validationSchema = Yup.object().shape({
    full_name: Yup.string().required(messageReq),
    email: Yup.string().email("Debe ser un email valido").required(messageReq),
    birth_date: Yup.date().transform(parseDateString).max(maxDate, "Debe tener almenos 15 años").required(messageReq),
    country_of_origin: Yup.string().oneOf(countries, "Debe seleccionar un país").required(messageReq),
    terms_and_conditions: Yup.boolean().oneOf([true], "Debe aceptar los terminos y condiciones").required(messageReq)
});

export const clearFields = (setFields, setTouched) => {
    setFields("full_name", "");
    setFields("email", "");
    setFields("birth_date", "");
    setFields("country_of_origin", "");
    setFields("terms_and_conditions", "");
    setTouched("full_name", false);
    setTouched("email", false);
    setTouched("birth_date", false);
    setTouched("country_of_origin", false);
    setTouched("terms_and_conditions", false);
}