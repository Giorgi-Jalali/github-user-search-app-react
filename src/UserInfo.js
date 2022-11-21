import styled from "styled-components";
import location from "./assets/icon-location.svg";
import website from "./assets/icon-website.svg";
import twitter from "./assets/icon-twitter.svg";
import company from "./assets/icon-company.svg";

export default function UserInfo(props) {
  return (
    <div className="user-div">
      <p>{props.data.bio || "This profile has no bio"}</p>
      <Statistics lightMode={props.lightMode}>
        <Stat>
          <span>Repos</span>
          <p className="stat-nums">{props.data.public_repos}</p>
        </Stat>
        <Stat>
          <span>Followers</span>
          <p className="stat-nums">{props.data.followers}</p>
        </Stat>
        <Stat>
          <span>Following</span>
          <p className="stat-nums">{props.data.following}</p>
        </Stat>
      </Statistics>
      <div className="contact-container">
        <div>
          <div className="contact-info">
            <img src={location} alt="location icon" />
            <div className="icon-text">
              {props.data.location || "Not Available"}
            </div>
          </div>
          <div className="contact-info">
            <img src={website} alt="website icon" />
            <div className="icon-text">
              <a href={props.data.html_url}>
                {props.data.html_url || "Not Available"}
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="contact-info">
            <img src={twitter} alt="twitter icon" />
            <div className="icon-text">
              {props.data.twitter_username || "Not Available"}
            </div>
          </div>
          <div className="contact-info">
            <img src={company} alt="company icon" />
            <div className="icon-text">
              {props.data.company || "Not Available"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Statistics = styled.div`
  background: ${(props) => (props.lightMode ? "#F6F8FF" : "#141d2f")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 18px 14px;
  margin: 24px 0;
  @media (min-width: 700px) {
    justify-content: space-around;
    text-align: start;
    padding: 15px 32px;
    margin: 32px 0;
  }
  @media (min-width: 700px) {
    justify-content: space-between;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
