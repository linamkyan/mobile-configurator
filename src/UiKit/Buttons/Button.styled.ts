import {styled} from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  height: 57px;
  background: #7A5CFA;
  padding: 30px;
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.72px;
  border-radius: 15px;
  border: none;
  transition: .5s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover{
    background: #000;
  }
  
  span{
    margin-left: 5px;
   
  }
`
