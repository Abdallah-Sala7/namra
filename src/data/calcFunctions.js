// // for gools difference - scorers - first team to score
export const calcCoinsPointFirst = (
  hostOdd,
  guestOdd,
  oddsTeamSelcte,
  coinCount,
  predictionLevel
) => {
  const pointsToWin = Math.round(
    ((1 / (hostOdd * guestOdd)) * oddsTeamSelcte * coinCount) / predictionLevel
  );

  const coinsToWin = Math.round(
    ((1 / (hostOdd * guestOdd)) * oddsTeamSelcte * coinCount) /
      predictionLevel +
      oddsTeamSelcte
  );

  return { pointsToWin, coinsToWin };
};

// any thing else
export const calcCoinsPointSecond = (
  hostOdd,
  guestOdd,
  oddsDraw,
  coinCount,
  predictionLevel
) => {
  const pointsToWin = Math.round(
    ((1 / (hostOdd * guestOdd)) * oddsDraw * coinCount) / predictionLevel
  );

  const coinsToWin = Math.round(
    ((1 / (hostOdd * guestOdd)) * oddsDraw) / coinCount + predictionLevel
  );

  return { pointsToWin, coinsToWin };
};

// prediction levels

export const predictionLevels = {
  winner: 3,
  firstScorer: 2.6,
  goalDiff: 2.2,
  firstHalf: 1.2,
  secondHalf: 1.6,
  playerToScore: 2,
  matchResult: 1,
};

// format date

export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};
