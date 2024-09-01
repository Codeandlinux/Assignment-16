// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          I'm a passionate full stack developer with experience in building modern web applications using React, Node.js, and other technologies.
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 60px 0;
  background: #f9f9f9;
`;

const AboutContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

export default About;
