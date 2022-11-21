import styled from "styled-components";
import UserInfo from "./UserInfo";
import UserNameDate from "./UserNameDate";

export default function UserContainer(props) {
  return (
    <UserInfoBody lightMode={props.lightMode}>
      <UserNameDate data={props.data} />
      <UserInfo lightMode={props.lightMode} data={props.data} />
    </UserInfoBody>
  );
}

const UserInfoBody = styled.div`
  box-shadow: none;
  background: ${(props) => (props.lightMode ? "#FEFEFE" : "#1e2a47")};
  box-shadow: ${(props) =>
    props.lightMode
      ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
      : "none"};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 33px 24px;
  @media (min-width: 700px) {
    padding: 40px;
  }
  @media (min-width: 1440px) {
    padding: 48px;
  }
`;
