import { ButtonSkeleton, LabelSkeleton, TitleSkeleton } from "../../../../components/Skeleton/Skeleton";
import { Container, Div, Cont } from "../../styles/responseStyles";

export default function Skeleton(){
    return(
        <>
            <TitleSkeleton />
            <Container>
                { [1,2,3,4].map(el => {
                    return <Div key={el}>
                            <LabelSkeleton style={{margin: "1rem"}}/>
                            </Div>
                })}
            </Container>
            <div style={{display: "flex", justifyContent: "center"}}>
                <ButtonSkeleton />
            </div>
        </>
    );
};