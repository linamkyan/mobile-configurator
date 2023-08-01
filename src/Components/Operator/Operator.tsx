import React, {useState} from "react";
import * as S from "./Operator.styled";

interface IOperator {
    id: string
    title: string
}

const operators: IOperator[] = [
    {id: '1', title: 'Оператор №1'},
    {id: '2', title: 'Оператор №2'},
    {id: '3', title: 'Оператор №3'}
]

interface IProps {
    selectedValue: string
    setSelectedValue: (s: string) => void
}

export const Operator = ({selectedValue, setSelectedValue}: IProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <S.OperatorContainer>
            <S.OperatorTitle>Оператор</S.OperatorTitle>
            <S.StyledSelect
                value={selectedValue}
                onChange={handleChange}
            >
                <S.Option value={''}>
                    Выберите оператора
                </S.Option>
                {operators.map((operator) => {
                    return (
                        <S.Option
                            key={operator.id}
                            value={operator.id}
                        >
                            {operator.title}
                        </S.Option>
                    )
                })}
            </S.StyledSelect>
        </S.OperatorContainer>
    )
};
