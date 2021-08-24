import './App.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { darkTheme, lightTheme } from './theme';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Country from './components/Country';

function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [screen, setScreen] = useState(true);
  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  const countryClicked = (name) => {
    console.log(name);
    setSelectedCountry(name);
    setScreen(false);
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} themeToggler={themeToggler}></Header>
      {screen ? (
        <Content countryClicked={countryClicked} theme={theme}></Content>
      ) : (
        <Country
          setScreen={setScreen}
          country={selectedCountry}
          theme={theme}
        ></Country>
      )}
    </ThemeProvider>
  );
}

export default App;
