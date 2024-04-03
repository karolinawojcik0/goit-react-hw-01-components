import styled from "styled-components";

export const Item = styled.li`
background-color: #fff; 
    border: 1px solid #e4e4e4; 
    border-radius: 20px; 
    padding: 10px; 
    margin: 10px 0; 
    list-style: none; 
    display: flex; 
    align-items: center; 
    width: 180px;
    height: 80px;`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;