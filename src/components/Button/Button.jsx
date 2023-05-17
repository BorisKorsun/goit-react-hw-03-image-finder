import { LoadBtn } from './Button.styled';

const Button = ({ onBtnClick }) => {
    return (
        <LoadBtn type="button" onClick={onBtnClick}>Load more</LoadBtn>
    )
};

export default Button;