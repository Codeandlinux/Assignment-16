// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo href="#">My Portfolio</Logo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="hero" smooth={true} duration={500}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services" smooth={true} duration={500}>
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500}>
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #333;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;

const Logo = styled.a`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export default Navbar;
