import { useFormik } from "formik";
import { useEffect, useState } from "react";
import items from "../../../db.json";
import { validationSchema, initialValues, clearFields } from "../utilities/utilities";
import { firebaseApp } from "../../../firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const db = getFirestore(firebaseApp);

export const useForm = () => {
    const navigate = useNavigate();
    const [sel, setSel] = useState();
    const [check, setCheck] = useState();
    const [submitButton, setSubmitButton] = useState();
    const [inputs, setInputs] = useState();
    const [sendLoading, setSendLoading] = useState(false);
    const [loading, setLoading] = useState(true);

    const onSubmit = () => {
        try {
            Swal.fire({
                title: "¿Estas seguro de enviar estas respuestas?",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Enviar",
                confirmButtonColor: "#1e88e5",
                denyButtonText: "No enviar",
              }).then(res => {
                if(res.isConfirmed){
                    setSendLoading(true);
                    addDoc(collection(db, "encuestas"), { ...formik.values })
                    .then(data => {
                        clearFields(formik.setFieldValue);
                        Swal.fire({
                            icon: "success",
                            title: "Tus respuestas han sido enviadas",
                            showCancelButton: false,
                            confirmButtonColor: "#1e88e5",
                            confirmButtonText: "Ver respuestas",
                        }).then(res => {
                            if(res.isConfirmed) navigate("/response/"+data.id);
                        })
                    })
                    .finally(() => setSendLoading(false));
                }
              })
        } catch (error) {
            console.log(error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Ha ocurrido un error al intentar enviar las respuestas",
                showConfirmButton: false,
                timer: 1500
            })
        }
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
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const formik = useFormik({ initialValues, validationSchema, onSubmit });

    return { sel, check, inputs, submitButton, formik, sendLoading, loading };
}