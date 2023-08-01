import React from "react";
import * as S from './SocialLinks.styled';
import {INetwork} from "../../Components/Network/Network";

interface IProps {
    isSelected: boolean
    net: INetwork
    onSelect: (link: INetwork) => void
}

export const SocialLinks = ({net, onSelect, isSelected}: IProps) => {
    return (
       <S.SocialLinks onClick={() => onSelect(net)} selected={isSelected}>
           <img src={isSelected ? net.activeIcon : net.inactiveIcon} alt=""/>
           <p>{net.price} ₽</p>
       </S.SocialLinks>
    )
}
