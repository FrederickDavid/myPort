import React from "react";
import styled from "styled-components";
// import myImage from "./dav.JPG";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Bottom>
        <Text>
          Copyright<span>&copy;</span>2022
        </Text>
        <IconHolder>
          <Icon>
            <Lin href="https://web.facebook.com/david.muomaife">
              <AiFillFacebook />
            </Lin>
          </Icon>
          <Icon>
            <Lin href="https://web.facebook.com/david.muomaife">
              <AiFillTwitterCircle />
            </Lin>
          </Icon>
          <Icon>
            <Lin href="https://web.facebook.com/david.muomaife">
              <AiFillLinkedin />
            </Lin>
          </Icon>
          <Icon>
            <Lin href="https://web.facebook.com/david.muomaife">
              <AiFillGithub />
            </Lin>
          </Icon>
        </IconHolder>
      </Bottom>
    </Container>
  );
};

export default Footer;

const Lin = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
`;

const Icon = styled.div`
  margin-left: 20px;
  font-size: 20px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
const IconHolder = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  flex: 1;
`;

const Bottom = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 40px;
  /* background: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;
