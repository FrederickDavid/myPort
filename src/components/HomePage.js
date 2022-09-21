import React from "react";
import styled from "styled-components";
import myImage from "./dav.JPG";

const HomePage = () => {
  return (
    <Container>
      <Top>
        <Left src={myImage} />
        <Right>
          <Name>MUOMAIFE FREDERICK DAVID</Name>
          <Line></Line>
          <Creative>
            Software Developer, Software Engineer, <br />
            UIUX Designer
          </Creative>
          <Button>Get in Touch</Button>
        </Right>
      </Top>
    </Container>
  );
};

export default HomePage;

const Button = styled.div`
  width: 170px;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  transform: scale(1);
  transition: all 350ms;
  border-radius: 5px;
  :hover {
    transform: scale(1.015);
    cursor: pointer;
  }
`;

const Creative = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
`;

const Line = styled.div`
  width: 80px;
  height: 5px;
  margin-top: 20px;
  background-color: black;
`;
const Name = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  height: 50%;
`;

const Left = styled.img`
  width: 450px;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
`;

const Top = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  margin-top: 60px;
  /* background: lightgray; */
  background: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
