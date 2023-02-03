import { Title, MainContainer } from "./styles/FormStyles";
import { useForm } from "./hook/useForm";
import { TitleSkeleton } from "../../components/Skeleton/Skeleton";
import Formulary from "./components/Formulary/Formulary";
import Skeleton from "./components/Skeleton/Skeleton";

export default function Form(){
    const { sel, check, submitButton, inputs, formik, sendLoading, loading } = useForm();

    return(
        <MainContainer>
            { loading ? <>
                            <TitleSkeleton />
                            <Skeleton />
                        </>
                      : <>
                            <Title>Encuesta</Title>
                            <Formulary formik={formik}
                                        sendLoading={sendLoading}
                                        submitButton={submitButton}
                                        sel={sel}
                                        check={check}
                                        inputs={inputs}/>
                        </>
            }
        </MainContainer>
    )
}