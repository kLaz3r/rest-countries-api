import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CountryCard = styled.div`
  box-shadow: 0px 0px 15px 5px
    ${(props) =>
      props.theme === 'light' ? 'hsl(0, 0%, 90%)' : 'hsl(209, 23%, 10%)'};
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
`;

const Flag = styled.img`
  height: 50%;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const Info = styled.div`
  padding: 1rem 2rem;
  height: 50%;
`;

const Countries = ({ theme, searchValue, regionFilter, countryClicked }) => {
  const [data, setData] = useState('');
  useEffect(() => {
    if (searchValue !== '') {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then((res) => setData(res.data));
    } else if (regionFilter !== '') {
      axios
        .get(`https://restcountries.com/v3.1/region/${regionFilter}`)
        .then((res) => setData(res.data));
    } else {
      axios
        .get(`https://restcountries.com/v3.1/all`)
        .then((res) => setData(res.data));
    }
  }, [searchValue, regionFilter]);
  return (
    <Wrapper>
      {data &&
        data.map((item) => {
          return (
            <CountryCard
              onClick={() => countryClicked(item.cca3)}
              theme={theme}
              key={item.cca3}
            >
              <Flag src={item.flags.svg}></Flag>
              <Info>
                <h4>{item.name.common}</h4>
                <p>
                  <span>Population: </span>
                  {item.population}
                </p>
                <p>
                  <span>Region: </span>
                  {item.region}
                </p>
                <p>
                  <span>Capital: </span>
                  {item.capital}
                </p>
              </Info>
            </CountryCard>
          );
        })}
    </Wrapper>
  );
};

export default Countries;
