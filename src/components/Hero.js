// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <HeroTitle>Welcome to My Portfolio</HeroTitle>
        <HeroSubtitle>I'm a Full Stack Developer</HeroSubtitle>
        <HeroButton href="#contact">Get in Touch</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./assets/download.png') no-repeat center center/cover;
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const HeroButton = styled.a`
  padding: 10px 20px;
  background: #01bf71;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #019e65;
  }
`;

export default Hero;
