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
