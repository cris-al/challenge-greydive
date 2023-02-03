import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../firebase";
import Swal from "sweetalert2";

const db = getFirestore(firebaseApp);

export const useResponse = () => {
    const { id } = useParams();
    const [responses, setResponses] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    useEffect(() => {
        try {
            getDoc(doc(db, "encuestas", id))
            .then(res => {
                if(res.exists()) setResponses(res.data());
                else {
                    Swal.fire({
                        position: "center",
                        icon: "info",
                        title: "No se encontraron respuestas",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(() => Swal.fire({
                position: "center",
                icon: "error",
                title: "Ha ocurrido un error al intentar cargar las respuestas",
                showConfirmButton: false,
                timer: 1500
            }))
            .finally(() => setLoading(false));
        } catch (error) {
            console.log(error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Ha ocurrido un error al intentar cargar las respuestas",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }, []);

    return { responses, loading, handleClick };
}