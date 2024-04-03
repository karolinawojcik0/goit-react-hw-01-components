import styled from "styled-components";

export const ProfileCard = styled.div`
width: 20%;
background-color: white;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
text-align: center;
padding: 20px;
margin: auto;
`;

export const ProfileImage = styled.img`
  width: 100px; 
  height: 100px;
  border-radius: 50%;
  border: 4px solid white; 
  border: 1px solid black;
`;

export const Username = styled.ul`
list-style-type: none;
font-size: 40px;
margin: 10px 0;`

export const ProfileTag = styled.div`
color: grey;
font-size: 20px
`;

export const Location = styled.div`
color: grey;
font-size: 30px;
`;

export const Stats = styled.ul`
list-style-type: none;
font-size: 16px;`

export const Label = styled.span`
font-size: 20px;
color: grey;`;

export const Quantity = styled.span`
font-size: 20px;
  color: black;`;