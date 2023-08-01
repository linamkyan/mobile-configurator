import {styled} from "styled-components";

interface IProps {
    selected: boolean
}

export const SocialLinks = styled.div<IProps>`
  background: ${props => props.selected ? 'white' : 'transparent'};
  display: flex;
  flex-direction: column;
  margin-right: 45px;
  padding: 15px;
  border-radius: 45px 45px 15px 15px;
  cursor: pointer;
`
