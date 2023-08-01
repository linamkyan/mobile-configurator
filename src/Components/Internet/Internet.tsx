import React from "react";
import * as S from "./Internet.styled";
import {Slider} from "../../UiKit/Slider/Slider";
import * as actionTypes from "../../Redux/actionTypes";
import {useDispatch} from "react-redux";

export interface IInternet {
    id: string
    title: number
    price: number
}

const internet: IInternet[] = [
    {id: '1', title: 5, price: 200},
    {id: '2', title: 15, price: 350},
    {id: '3', title: 30, price: 600},
    {id: '4', title: 35, price: 650}
]

export const Internet = () => {
    const dispatch = useDispatch()
    const setPrice = (idx: number) => {
        dispatch({type: actionTypes.INTERNET, payload: internet[idx].price})
    }

    return (
        <S.InternetContainer>
            <S.InternetTitle>Интернет</S.InternetTitle>
            <Slider
                setPrice={setPrice}
                type={'INTERNET'}
                value={internet}
                start={0}
            />
        </S.InternetContainer>
    )
};
