import styled from "styled-components";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";

export default function Header(props) {
  return (
    <Head>
      <H1 lightMode={props.lightMode}>devfinder</H1>
      <LightMode
        onClick={() => {
          props.setLightMode(!props.lightMode);
        }}
      >
        {props.lightMode ? "DARK" : "LIGHT"}
        <img
          className="sun-moon"
          src={props.lightMode ? moon : sun}
          alt="sun"
        />
      </LightMode>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.div`
  color: ${(props) => (props.lightMode ? "#2B3442" : "white")};
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
`;

const LightMode = styled.div`
  font-weight: 700;
  letter-spacing: 2.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // color: ${(props) => (props.lightMode ? "black" : "white")};
  // &:hover {
  //   color: #90a4d4;
  // }
`;
