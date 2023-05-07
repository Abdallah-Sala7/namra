import barca from "../assets/img/Barcelona.svg";

const BetMatchResult = ({betData}) => {
  return (
    <div className="bet-result-box">
      <p className="result-title">نتيجة المبارات</p>
      <div className="result-items single-match-area ">
        <div className="bet-types-boxes">
          <div className="bet-box">
            <div className="bet-result">
              <div className="team-item">
                <img className="img-fluid" src={barca} alt="teamName" />
                <span className="team-name">{betData.hostTeam.name}</span>
              </div>
              <div className="result-wrap">
                <div className="result-inputs">
                  <input type="tel" placeholder="-" maxLength="2" />
                  <span>-</span>
                  <input type="tel" placeholder="-" maxLength="2" />
                </div>
              </div>
              <div className="team-item">
                <img className="img-fluid" src={barca} alt="teamName" />
                <span className="team-name">{betData.guestTeam.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetMatchResult;
