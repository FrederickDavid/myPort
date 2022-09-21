import React from "react";
import styled from "styled-components";
import myImage from "./dav.JPG";

const About = () => {
  return (
    <Container>
      <Top>
        <Left src={myImage} />
        <Right>
          <AboutHolder>
            ABOUT ME<Line></Line>
          </AboutHolder>
          <DetailsHolder>
            <DetailLeft>
              Hello there! My name is Muomaife Frederick. I am a Software
              Engineer, Software Developer and UIUX Designer, I am very
              passionate and dedicated to work.
              <br />
              With years of experience as a professional Software Developer, I
              have acquired the skills and knowledge necessary to make your
              project a success.
            </DetailLeft>
            <DetailRight>
              <DetailRightHolder>
                <ContentTitle>Name:</ContentTitle>
                <ContentBody>Muomaife Frederick David</ContentBody>
              </DetailRightHolder>
              <DetailRightHolder>
                <ContentTitle>Address:</ContentTitle>
                <ContentBody>
                  Osho-drive, Olodi-Apapa, Lagos, Nigeria.
                </ContentBody>
              </DetailRightHolder>
              <DetailRightHolder>
                <ContentTitle>Email:</ContentTitle>
                <ContentBody>muomaifefrederick61@gmail.com</ContentBody>
              </DetailRightHolder>
              <DetailRightHolder>
                <ContentTitle>Contact:</ContentTitle>
                <ContentBody>+2349014329868</ContentBody>
              </DetailRightHolder>
            </DetailRight>
          </DetailsHolder>
          <ServicesHolder>
            <ServiceLeft>
              <AboutHolder>
                SERVICES<Line2></Line2>
              </AboutHolder>
            </ServiceLeft>
            <ServiceRight>
              <AboutHolder>
                INTERESTS<Line2></Line2>
              </AboutHolder>
            </ServiceRight>
          </ServicesHolder>
        </Right>
      </Top>
    </Container>
  );
};

export default About;

const ServiceRight = styled.div`
  width: 50%;
`;
const ServiceLeft = styled.div`
  width: 50%;
`;
const Line2 = styled.div`
  width: 50%;
  height: 2px;
  background: rgba(0, 0, 0, 0.2);
  margin-left: 40px;
  margin-top: 12px;
`;

const ServicesHolder = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const ContentBody = styled.div`
  color: rgba(0, 0, 0, 0.6);
  margin-left: 25px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const ContentTitle = styled.div`
  width: 60px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.4);
`;

const DetailRightHolder = styled.div`
  width: 100%;
  height: auto;
  margin-top: 15px;
  /* background: gray; */
  display: flex;
`;

const DetailRight = styled.div`
  width: 50%;
`;

const DetailLeft = styled.div`
  width: 42%;
  height: 200px;
  display: flex;
  align-items: center;
  font-weight: 13px;
  color: rgba(0, 0, 0, 0.6);
`;

const DetailsHolder = styled.div`
  width: 100%;
  /* height: 50px; */
  /* background: red; */
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 670px;
  height: 2px;
  background: rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  margin-top: 12px;
`;

const AboutHolder = styled.div`
  width: 100%;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 50px;
  display: flex;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 450px;
  height: auto;
  width: 800px;
`;

const Left = styled.img`
  width: 430px;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
  position: fixed;
`;

const Top = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  /* align-items: center; */
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
