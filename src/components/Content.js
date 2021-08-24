import React, { useState } from 'react';
import styled from 'styled-components';
import Countries from './Countries';

const Wrapper = styled.div`
  display: block;
  padding: 3rem 5rem;
  @media (max-width: 600px) {
    padding: 2rem;
  }
`;
const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  div {
    box-shadow: 0px 0px 15px 5px
      ${(props) =>
        props.theme === 'light' ? 'hsl(0, 0%, 90%)' : 'hsl(209, 23%, 10%)'};
    border-radius: 10px;
    padding: 0 1.5rem;
    color: inherit;
    background-color: ${(props) =>
      props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
    input {
      background-color: transparent;
      border: none;
      padding: 1rem;
      color: inherit;
      &:active {
        outline: none;
        border: none;
      }
    }
    i {
      padding-right: 1.5rem;
    }
  }
  select {
    box-shadow: 0px 0px 15px 5px
      ${(props) =>
        props.theme === 'light' ? 'hsl(0, 0%, 90%)' : 'hsl(209, 23%, 10%)'};
    background-color: ${(props) =>
      props.theme === 'light' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)'};
    color: inherit;
    padding: 1rem;
    border-radius: 10px;
    border: none;
  }
  @media (max-width: 500px) {
    padding: 0rem;
    flex-direction: column;
    div {
      width: 100%;
    }
    select {
      margin-top: 1rem;
      display: block;
      width: 100%;
    }
  }
`;
const Content = ({ theme, countryClicked }) => {
  const [searchValue, setSearchValue] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const searchInputChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const regionChangeHandler = (e) => {
    setRegionFilter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Wrapper>
      <Filter theme={theme}>
        <div>
          <i className='fas fa-search'></i>
          <input
            onChange={searchInputChangeHandler}
            value={searchValue}
            type='search'
            placeholder='Search for a country'
          />
        </div>
        <select
          value={regionFilter}
          onChange={regionChangeHandler}
          name='region'
          id='region'
        >
          <option selected value=''>
            Select Region
          </option>
          <option value='africa'>Africa</option>
          <option value='americas'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </Filter>
      <Countries
        countryClicked={countryClicked}
        theme={theme}
        searchValue={searchValue}
        regionFilter={regionFilter}
      ></Countries>
    </Wrapper>
  );
};

export default Content;
