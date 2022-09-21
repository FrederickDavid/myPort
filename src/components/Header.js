import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Logo>Frederick</Logo>
      <NavHolders>
        <Navs to="/">Home</Navs>
        <Navs to="/About">About</Navs>
        <Navs to="/">Porfolio</Navs>
        <Navs to="/">Services</Navs>
        <Navs to="/">Blogs</Navs>
        <Navs to="/">Contact</Navs>
      </NavHolders>
      <Burger>I</Burger>
    </Container>
  );
};

export default Header;

const Burger = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    margin-right: 20px;
    transform: scale(1);
    transition: all 350ms;
    border-radius: 5px;
    :hover {
      transform: scale(1.015);
      cursor: pointer;
      background-color: lightgray;
    }
  }
`;

const Navs = styled(NavLink)`
  padding: 12px 35px;
  /* background-color: white; */
  /* margin-left: 10px; */
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
  transform: scale(1);
  transition: all 350ms;
  border-radius: 5px;
  text-decoration: none;
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    background-color: lightgray;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const NavHolders = styled.div`
  height: 100%;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 20px;
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: whitesmoke;
  top: 0;
  bottom: 0;
  z-index: 10;
`;
