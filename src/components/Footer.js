// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterText>© 2024 Your Name. All rights reserved.</FooterText>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background: #222;
  color: #fff;
  padding: 20px 0;
`;

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
`;

export default Footer;
