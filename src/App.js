import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";

import Header from "./Header";
import SearchContainer from "./SearchContainer";
import UserContainer from "./UserContainer";

export default function App() {
  const [data, setData] = useState({});
  const [lightMode, setLightMode] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/octocat")
      .then((data) => data.text())
      .then((res) => setData(JSON.parse(res)));
  }, []);

  return (
    <>
      <GlobalStyle lightMode={lightMode} />
      <Main lightMode={lightMode}>
        <Header lightMode={lightMode} setLightMode={setLightMode} />
        <SearchContainer
          user={user}
          setUser={setUser}
          data={data}
          setData={setData}
          lightMode={lightMode}
          setLightMode={setLightMode}
        />
        <UserContainer
          lightMode={lightMode}
          setLightMode={setLightMode}
          data={data}
        />
      </Main>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => (props.lightMode ? "#F6F8FF" : "#141d2f")};
  }
`;

const Main = styled.div`
  background: ${(props) => (props.lightMode ? "#F6F8FF" : "#141d2f")};
  color: ${(props) => (props.lightMode ? "#4B6A9B" : "white")};
  width: 375px;
  margin: 0 auto;
  padding: 20px 24px;
  @media (min-width: 700px) {
    width: 700px;
    padding: 20px 63px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 20px 355px;
  }
`;
