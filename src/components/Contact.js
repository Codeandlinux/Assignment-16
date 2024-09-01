// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactTitle>Contact Me</ContactTitle>
        <ContactForm>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message"></Textarea>
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 60px 0;
  background: #333;
  color: #fff;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: none;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #01bf71;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #019e65;
  }
`;

export default Contact;
