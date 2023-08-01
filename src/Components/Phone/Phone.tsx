import React, {useState} from "react";
import InputMask from "react-input-mask";
import * as S from "./Phone.styled";

interface IProps {
    phoneNumber: string
    setPhoneNumber: (s: string) => void
}

export const Phone = ({phoneNumber, setPhoneNumber}: IProps) => {
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputPhoneNumber = event.target.value.replace(/[^\d]/g, "");
        setPhoneNumber(inputPhoneNumber);
        const phoneRegex = /^[79]\d{10}$/;
        const isValidPhone = phoneRegex.test(inputPhoneNumber);
        setIsValid(isValidPhone);
    };

    return(
       <S.PhoneContainer>
           <S.PhoneTitle>Телефон</S.PhoneTitle>
           <InputMask
               mask="+7 (999) 999-99-99"
               placeholder="+7 (___) ___-__-__"
               maskChar="_"
               value={phoneNumber}
               onChange={handleInputChange}
           >
           </InputMask>
           {!isValid && <S.InvalidPhone>Неправильный номер телефона</S.InvalidPhone>}
           <S.RequiredLine>Обязательное поле</S.RequiredLine>
       </S.PhoneContainer>
    )
};
