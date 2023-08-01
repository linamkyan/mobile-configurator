import React from "react";
import {StyledButton} from "./Button.styled";

interface Props {
    price: number,
    onClick: () => void
}

export const Button = ({price, onClick}: Props) => {
    return(
        <StyledButton onClick={onClick}>
            {price} ₽ <span> в месяц</span>
        </StyledButton>
    )
};
