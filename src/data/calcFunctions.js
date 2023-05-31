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
