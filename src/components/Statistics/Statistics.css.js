import styled from "styled-components";

export const StatList = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
padding: 0;
margin: 0;
`

export const SectionStatistics = styled.section`
margin: 20px auto;
height: 200px;
width: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`

export const Label = styled.span`
display: flex;
justify-content: center;
align-items: center;
height: 60px;
width: 100px`;

export const Percentage = styled.span`
display: flex;
justify-content: center;
font-size: 30px;`
 