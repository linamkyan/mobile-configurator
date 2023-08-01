import React, {useEffect, useState} from "react";
import * as S from "./Network.styled";
import {SocialLinks} from "../../UiKit/SocialLinks/SocialLinks";
import fbOff from '../../UiKit/Icons/fb-off.svg'
import vkOff from '../../UiKit/Icons/vk-off.svg'
import okOff from '../../UiKit/Icons/ok-off.svg'
import tikOff from '../../UiKit/Icons/tik-off.svg'
import instaOff from '../../UiKit/Icons/insta-off.svg'
import fbOn from '../../UiKit/Icons/fb-on.svg'
import vkOn from '../../UiKit/Icons/vk-on.svg'
import okOn from '../../UiKit/Icons/ok-on.svg'
import tikOn from '../../UiKit/Icons/tik-on.svg'
import instaOn from '../../UiKit/Icons/insta-on.svg'
import {useDispatch} from "react-redux";
import * as actionTypes from "../../Redux/actionTypes";

export interface INetwork {
    activeIcon: any
    inactiveIcon: any
    price: number
    id: number
}

const network: INetwork[] = [
    {
        activeIcon: fbOn,
        inactiveIcon: fbOff,
        price: 20,
        id: 1
    },
    {
        activeIcon: vkOn,
        inactiveIcon: vkOff,
        price: 20,
        id: 2
    },
    {
        activeIcon: okOn,
        inactiveIcon: okOff,
        price: 20,
        id: 3
    },
    {
        activeIcon: tikOn,
        inactiveIcon: tikOff,
        price: 60,
        id: 4
    },
    {
        activeIcon: instaOn,
        inactiveIcon: instaOff,
        price: 60,
        id: 5
    }
]

export const Network = () => {
    const dispatch = useDispatch()
    const [selectedLinks, setSelectedLinks] = useState(new Set())

    const onSelect = (link: INetwork) => {
        if (selectedLinks.has(link)) {
            const oldList = new Set(selectedLinks)
            oldList.delete(link)
            setSelectedLinks(oldList)
        } else {
            const oldList = new Set(selectedLinks)
            const newList = oldList.add(link)
            setSelectedLinks(newList)
        }
    }

    useEffect(() => {
        // @ts-ignore
        const linksArr: INetwork[] = Array.from(selectedLinks)
        const totalPrice = linksArr.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price,
            0,
        );
        dispatch({type: actionTypes.SOCIAL, payload: totalPrice})
    }, [selectedLinks])

    return (
        <S.NetworkContainer>
            <S.NetworkTitle>Соцсети</S.NetworkTitle>
            <S.SocLinksBox>
                {
                    network.map((net) => {
                        return (
                            <SocialLinks
                                key={net.id}
                                isSelected={selectedLinks.has(net)}
                                net={net}
                                onSelect={onSelect}
                            />
                        )
                    })
                }
            </S.SocLinksBox>
        </S.NetworkContainer>
    )
};
