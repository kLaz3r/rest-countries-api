import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  display: block;
  padding: 2rem 5rem;
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
const BackButton = styled.button`
  i {
    padding-right: 0.5rem;
  }
  display: inline-block;
  border: 1px solid transparent;
  color: inherit;
  padding: 0.7rem 2rem;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: opacity 0.2s ease-in-out;
  box-shadow: 0px 0px 15px 5px
    ${(props) =>
      props.theme === 'light' ? 'hsl(0, 0%, 90%)' : 'hsl(209, 23%, 10%)'};
  background: ${(props) =>
    props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 400px) {
    margin: 0 auto;
  }
`;
const CountryInfo = styled.div`
  display: flex;
  padding: 3rem 0;
  flex-direction: row;
  img {
    width: 50%;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 1rem 0;
    img {
      width: 100%;
    }
  }
`;
const Info = styled.div`
  display: block;
  width: 50%;
  padding-left: 3rem;
  h1 {
    font-size: 2rem;
  }
  .info {
    max-height: 20rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    p {
      font-size: 1.2rem;
      span {
        font-weight: bold;
      }
    }
  }
  .borders {
    font-weight: bold;
    font-size: 2rem;
    color: inherit;
    span {
      padding: 0.5rem 2rem;
      border-radius: 10px;
      border: 1px solid
        ${(props) =>
          props.theme !== 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
      margin: 0.2rem 0.5rem;
      font-size: 1rem;
      color: inherit;
      background: ${(props) =>
        props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
      @media (max-width: 700px) {
        display: inline-block;
        width: 50%;
        margin: 0.5rem auto;
        text-align: center;
      }
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    .info {
      text-align: center;
      max-height: 1000rem;
    }
  }
`;

const Country = ({ theme, country, setScreen }) => {
  const [countryData, setCountryData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${country}`)
      .then((res) => setCountryData(res.data[0]))
      .catch((err) => console.log(err));
  }, [country]);
  countryData && console.log(Object.keys(countryData.languages));
  return (
    <Wrapper>
      <BackButton theme={theme} onClick={() => setScreen(true)}>
        <i className='fas fa-long-arrow-alt-left'></i>Back
      </BackButton>
      {countryData && (
        <CountryInfo>
          <img src={countryData.flags.svg} alt='' />
          <Info theme={theme}>
            <h1>{countryData.name.common}</h1>
            <div className='info'>
              <p>
                <span>Native Name: </span>
                {countryData.name.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {countryData.population}
              </p>
              <p>
                <span>Region: </span>
                {countryData.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {countryData.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {countryData.capital[0]}
              </p>
              <p>
                <span>Top Level Domain: </span>
                {countryData.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {countryData &&
                  Object.keys(countryData.currencies).map((item) => {
                    return item + ' ';
                  })}
              </p>
              <p>
                <span>Languages: </span>
                {countryData &&
                  Object.keys(countryData.languages).map((item) => {
                    return item + ' ';
                  })}
              </p>
            </div>
            <p className='borders'>
              <p>Border Countries: </p>
              {countryData.borders &&
                countryData.borders.map((item) => {
                  return <span>{item}</span>;
                })}
            </p>
          </Info>
        </CountryInfo>
      )}
    </Wrapper>
  );
};

export default Country;
