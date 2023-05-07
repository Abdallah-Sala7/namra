import { useSelector } from "react-redux";
import { useCreatePredictMutation } from "../app/server/predictsApi";

const BetBtnsActions = () => {
  const { activeTap, betData } = useSelector((state) => state.betModal);
  const [winingTeam, { error, isLoading, data, isSuccess }] =
    useCreatePredictMutation();

    // // for gools difference - scorers - first team to score
    // const calculatePointsOne = ((1 / (oddsHost * oddsVisitor)) * oddsDraw * coinCount) / predictionLevel;
    // const calculateCoinsOne = ((1 / (oddsHost * oddsVisitor)) * oddsDraw / coinCount) + predictionLevel;

    // // any thing else
    // const calculatePointsTwo = ((1 / (oddsHost * oddsVisitor)) * oddsTeamSelcte * coinCount) / predictionLevel;
    // const calculateCoinsTwo = ((1 / (oddsHost * oddsVisitor)) * oddsTeamSelcte * coinCount /predictionLevel) + oddsTeamSelcte;


  function calculatePrediction() {
    winingTeam({ WINNER_TEAM: 'predictionScore' });
    console.log('00200');
  }

  console.log(error);

  return (
    <>
      <button
        type="button"
        className="footer-btn toggle-modal-btn "
        data-bs-toggle="modal"
        data-bs-target="#confirmBetmatchesModal"
        onClick={() =>
          calculatePrediction(
            betData.oddsHost,
            betData.oddsVisitor,
            betData.oddsDraw,
            100,
            1
          )
        }
      >
        تأكيد المراهنة
      </button>
      <button type="button" className="footer-btn ">
        المراهنة بالتفاصيل
      </button>
    </>
  );
};

export default BetBtnsActions;
