import { MainContainer } from "./styles/FormStyles";
import { useForm } from "./hook/useForm";
import { TitleSkeleton } from "../../components/Skeleton/Skeleton";
import Formulary from "./components/Formulary/Formulary";
import Skeleton from "./components/Skeleton/Skeleton";
import Title from "../../components/Title/Title";

export default function Form(){
    const { sel, check, submitButton, inputs, formik, sendLoading, loading } = useForm();

    return(
        <MainContainer>
            { loading ? <>
                            <TitleSkeleton />
                            <Skeleton />
                        </>
                      : <>
                            <Title text="Encuesta"/>
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