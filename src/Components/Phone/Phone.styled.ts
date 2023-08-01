import {styled} from "styled-components";

export const PhoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  
  input{
    display: flex;
    width: 368px;
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

export const PhoneTitle = styled.h2`
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.96px;
    margin-bottom: 40px;
`;

export const RequiredLine = styled.p`
    color:  #86969C;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; 
    margin-top: 10px;
`;

export const InvalidPhone = styled(RequiredLine)`
    color: red;
`;

