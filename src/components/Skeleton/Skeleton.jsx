import "./Skeleton.css";

export const TitleSkeleton = () => {
    return(
        <div className="title-container">
            <div className="title-skeleton" />
        </div>
    );
};

export const LabelSkeleton = ({style}) => {
    return(
        <label className="label-skeleton" style={style}></label>
    );
};

export const ButtonSkeleton = () => {
    return(
        <div className="button-skeleton"></div>
    );
};