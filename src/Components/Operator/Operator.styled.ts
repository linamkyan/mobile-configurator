import {styled} from "styled-components";

export const OperatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    
    select{
        display: flex;
        width: 401px;
        padding: 18px 16px;
        flex-direction: column;
        align-items: flex-start;
        color: #86969C;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border-radius: 8px;
        border: 1px solid #B8C6CF;
    
    }
    
`;

export const OperatorTitle = styled.h2`
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.96px;
    margin-bottom: 40px;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border-left: 5px solid #7a5cfa;
    border-right: 5px solid #7a5cfa;
    border-top: 5px solid #000;
    pointer-events: none;
    z-index: 1;
  }
`;

export const Option = styled.option`
  background-color: white;
`;
