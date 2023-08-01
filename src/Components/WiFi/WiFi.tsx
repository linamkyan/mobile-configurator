import React, {useEffect, useState} from "react";
import * as S from "./WiFi.styled";
import {useDispatch} from "react-redux";
import * as actionTypes from "../../Redux/actionTypes";

export const WiFi = () => {
    const dispatch = useDispatch()
    const [rent, setRent] = useState(0)
    const [buy, setBuy] = useState(0)

    const onChange = (type: string) => {
        if (type === 'rent') {
            setRent(99)
            setBuy(0)
        } else {
            setRent(0)
            setBuy(2600)
        }
    }

    useEffect(() => {
        dispatch({type: actionTypes.WIFI, payload: rent + buy})
    }, [rent, buy])

    return (
        <S.WiFiContainer>
            <S.WiFiTitle>Wi-Fi роутер</S.WiFiTitle>
            <S.CheckboxContent>
                <S.StyledCheckbox
                    type='checkbox'
                    onChange={() => onChange('rent')}
                    checked={!!rent}
                />
                <p>Аренда <strong>99 ₽/мес.</strong></p>
            </S.CheckboxContent>
            <S.CheckboxContent>
                <S.StyledCheckbox
                    type='checkbox'
                    onChange={() => onChange('buy')}
                    checked={!!buy}
                />
                <p>Выкупить <strong>2 600 ₽</strong></p>
            </S.CheckboxContent>

        </S.WiFiContainer>
    )
};
