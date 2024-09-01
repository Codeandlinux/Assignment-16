// src/components/Services.js
import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <ServicesTitle>My Services</ServicesTitle>
        <ServicesGrid>
          <ServiceCard>
            <h3>Web Development</h3>
            <p>I build responsive and modern web applications.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>UI/UX Design</h3>
            <p>Designing user-friendly interfaces with a focus on user experience.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Consulting</h3>
            <p>Providing expert advice to help you build better products.</p>
          </ServiceCard>
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  padding: 60px 0;
`;

const ServicesContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 1.25rem;
    color: #333;
  }

  p {
    color: #555;
  }
`;

export default Services;
