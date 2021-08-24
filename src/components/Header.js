import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
  padding: 1.7rem 5rem;
  background: ${(props) =>
    props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
  @media (max-width: 600px) {
    padding: 2rem;
  }
  @media (max-width: 500px) {
    padding: 1rem;
    flex-direction: column;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: inherit;
`;
const ThemeButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid
    ${(props) =>
      props.theme === 'light' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
  border-radius: 10px;
  background-color: transparent;
  color: inherit;
  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`;
const ThemeButtonText = styled.p`
  padding: 0;
  margin: 0;
  color: inherit;
  i {
    padding-right: 0.2rem;
  }
`;
const Header = ({ themeToggler, theme }) => {
  return (
    <Nav theme={theme}>
      <Title>Where in the world?</Title>
      <ThemeButton theme={theme} onClick={themeToggler}>
        {theme === 'light' ? (
          <ThemeButtonText>
            <i className='fas fa-moon'></i>Dark Mode
          </ThemeButtonText>
        ) : (
          <ThemeButtonText>
            <i className='fas fa-sun'></i>Light Mode
          </ThemeButtonText>
        )}
      </ThemeButton>
    </Nav>
  );
};

export default Header;
