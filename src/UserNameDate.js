import styled from "styled-components";

export default function UserNameDate(props) {
  let date = new Date(props.data.created_at);

  let joined = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <User>
      <img className="user-image" src={props.data.avatar_url} alt="user" />
      <div className="name-date">
        <div>
          <h1>{props.data.name}</h1>
          <div className="user-id">{props.data.login}</div>
        </div>
        <div className="date">Joined - {joined}</div>
      </div>
    </User>
  );
}

const User = styled.div`
  display: flex;
  margin-bottom: 33px;
  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
