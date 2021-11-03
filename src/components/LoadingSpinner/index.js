import { Spinner, Wrapper } from "./LoadingSpinner.styles";

const LoadingSpinner = () => (
    <Wrapper>
        <Spinner>
            <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </Spinner>
    </Wrapper>
);

export default LoadingSpinner;