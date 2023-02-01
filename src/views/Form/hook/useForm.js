import { useFormik } from "formik";
import { useEffect, useState } from "react";
import items from "../../../db.json";
import { validationSchema, initialValues } from "../utilities/utilities";

export const useForm = () => {
    const [sel, setSel] = useState();
    const [check, setCheck] = useState();
    const [submitButton, setSubmitButton] = useState();
    const [inputs, setInputs] = useState();

    const onSubmit = () => {
        alert("HOLAAAA")
    };

    useEffect(() => {
        let arr = [];
        if(items){
            for (let i = 0; i < items.items.length; i++) {
                if(items.items[i].type === "select") {
                    setSel(items.items[i]);
                }
                if(items.items[i].type === "checkbox") {
                    setCheck(items.items[i]);
                }
                if(items.items[i].type === "submit") {
                    setSubmitButton(items.items[i]);
                }
                if(items.items[i].type === "text" ||
                    items.items[i].type === "email" ||
                    items.items[i].type === "date") {
                        arr.push(items.items[i]);
                    }
            }
            setInputs(arr);
        }
    }, []);

    const formik = useFormik({ initialValues, validationSchema, onSubmit });

    return { sel, check, inputs, submitButton, formik };
}