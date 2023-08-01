import {styled} from "styled-components";
import thumb from '../Icons/arrows.svg';
import blackThumb from '../Icons/blackArrow.svg';

interface Props {
    sliderBarValue: number
    sliderType: string
}

export const SliderContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const Slider = styled.input<Props>`
  width: 100%;
  appearance: none;
  height: 10px;
  border-radius: 6px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(${(props) => props.sliderBarValue}, 
               ${(props) => props.sliderType === "MINUTES" ? '#7A5CFA' : 'black'} ),
    color-stop(${(props) => props.sliderBarValue}, #E3E3E3)
  );

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
   background-image: ${(props) =>
    props.sliderType === "MINUTES" ? `url(${thumb})` : `url(${blackThumb})`};

    border: none;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-top: 0;
    cursor: pointer;
    position: relative;
  }


`;

export const ValueBox = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

