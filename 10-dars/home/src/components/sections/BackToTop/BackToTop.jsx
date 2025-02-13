import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Button
const BackToTopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;  
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(50.9deg, #338CF5 4.9%, #4FD1C5 94.23%);
  border: none;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;

  &:hover {
    background-color: #0072f4eb;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BackToTopButton onClick={scrollToTop} show={isVisible}>
      <img src="./assets/icons/Top.png" alt="" />
    </BackToTopButton>
  );
};

export default BackToTop;
