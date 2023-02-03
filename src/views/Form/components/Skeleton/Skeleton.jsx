import { ButtonSkeleton, LabelSkeleton } from "../../../../components/Skeleton/Skeleton";
import { SkeletonContainer, InputContainer, ButtonContainer } from "../../styles/FormStyles";

export default function Skeleton(){
    return(
        <SkeletonContainer>
            { [1,2,3,4].map(el => {
                return <InputContainer key={el}>
                            <LabelSkeleton />
                            <LabelSkeleton />
                        </InputContainer>
            })}
            <ButtonContainer>
                <ButtonSkeleton />
            </ButtonContainer>
        </SkeletonContainer>
    )
}