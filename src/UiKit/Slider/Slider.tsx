import * as S from "./Slider.styled";
import React, {useEffect, useState} from "react";
import {IMinutes} from "../../Components/Minutes/Minutes";
import {IInternet} from "../../Components/Internet/Internet";

interface ISlider {
    value: IMinutes[] | IInternet[]
    start: number
    type: string
    setPrice: (p: number) => void
}

export const Slider = ({ value, start, type, setPrice}: ISlider) => {
    const [sliderBarValue, setSliderBarValue] = useState(0);
    const [sliderValue, setSliderValue] = useState(start || 0);

    const handleChange = (event: { target: any; }) => {
        const slider = event.target;
        const val = (slider.value - slider.min) / (slider.max - slider.min);
        setSliderBarValue(val);
        setSliderValue(slider.value);
        setPrice(sliderValue)
    };

    useEffect(() => {
        setPrice(sliderValue)
    }, [sliderValue])

    return (
        <S.SliderContainer>
            <S.Slider
                sliderType={type}
                type="range"
                min={0}
                max={value.length - 1}
                step={1}
                value={sliderValue}
                sliderBarValue={sliderBarValue}
                onChange={handleChange}
            />
            <S.ValueBox>
                {value.map(value => {
                    return(
                        <p key={value.id}>{value.title}</p>
                    )
                })}
            </S.ValueBox>
        </S.SliderContainer>
    );
};
