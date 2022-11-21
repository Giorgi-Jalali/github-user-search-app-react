import styled from "styled-components";
import SearchIcon from "./assets/icon-search.svg";
import { useState } from "react";

export default function SearchContainer(props) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    props.setUser(e.target.value);
  };

  const handleClick = () => {
    fetchData();
  };

  const fetchData = () => {
    fetch(`https://api.github.com/users/${props.user}`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          setError("");
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((jsonResponse) => {
        props.setData(jsonResponse);
      })
      .catch((error) => {
        console.log(error);
        setError("No Results");
      });
  };

  return (
    <SearchBar lightMode={props.lightMode}>
      <img className="search-icon" src={SearchIcon} alt="search" />
      <Input
        lightMode={props.lightMode}
        type="text"
        placeholder="Search GitHub username..."
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Error>{error}</Error>
      <SearchButton onClick={handleClick}>Search</SearchButton>
    </SearchBar>
  );
}

const SearchBar = styled.div`
  background: ${(props) => (props.lightMode ? "#F6F8FF" : "#1e2a47")};
  box-shadow: ${(props) =>
    props.lightMode
      ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567);"
      : "none"};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 7px 7px 12px;
  margin-top: 35px;
  margin-bottom: 16px;
  @media (min-width: 700px) {
    padding: 10px 10px 10px 32px;
  }
`;

const Input = styled.input`
  background: ${(props) => (props.lightMode ? "#F6F8FF" : "#1e2a47")};
  color: ${(props) => (props.lightMode ? "#4B6A9B" : "white")};
  outline: none;
  border: none;
  line-height: 25px;
  width: 200px;
  cursor: pointer;
  &::placeholder {
    line-height: 25px;
    color: ${(props) => (props.lightMode ? "#4B6A9B" : "white")};
  }
  @media (min-width: 700px) {
    width: 260px;
    font-size: 18px;
    &::placeholder {
      font-size: 18px;
    }
  }
  @media (min-width: 1440px) {
    width: 350px;
  }
`;

const Error = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: block;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #f74646;
  }
`;

const SearchButton = styled.div`
  background: #0079ff;
  color: white;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  padding: 12.5px 16px;
  cursor: pointer;
  &:hover {
    background: #60abff;
  }
  @media (min-width: 700px) {
    font-size: 16px;
    line-height: 24px;
    padding: 12.5px 20px;
  }
`;
