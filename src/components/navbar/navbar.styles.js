import styled from 'styled-components';

export const HomeNavbar = styled.div`
  background-color: #1E1E1E;
  width: 639px;
  height: 61px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  border-radius:15px;
  @media(max-width:900px){
    width: 400px;
  }
`;

export const KnowMore = styled.h3`
  font-size:24px;
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
  @media(max-width:900px){
    font-size:20px;
  }
`;
export const Plans = styled.h3`
  font-size:24px;
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
  @media(max-width:900px){
    font-size:20px;
  }
`;
export const Contact = styled.h3`
  font-size:24px;
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity:0.8;
  }
  @media(max-width:900px){
    font-size:20px;
  }
`;