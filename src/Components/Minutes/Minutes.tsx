import React from "react";
import * as S from "./Minutes.styled";
import {Slider} from "../../UiKit/Slider/Slider";
import {useDispatch} from "react-redux";
import * as actionTypes from '../../Redux/actionTypes'

export interface IMinutes {
    id: string
    title: number
    price: number
}

const minutes: IMinutes[] = [
    {id: '1', title: 200, price: 200},
    {id: '2', title: 350, price: 350},
    {id: '3', title: 600, price: 600},
    {id: '4', title: 650, price: 650}
]

export const Minutes = () => {
    const dispatch = useDispatch()
    const setPrice = (idx: number) => {
        dispatch({type: actionTypes.MINUTES, payload: minutes[idx].price})
    }

    return (
        <S.MinutesContainer>
            <S.MinutesTitle>Минуты</S.MinutesTitle>
            <Slider
                setPrice={setPrice}
                type={"MINUTES"}
                value={minutes}
                start={0}
            />
        </S.MinutesContainer>
    )
};
