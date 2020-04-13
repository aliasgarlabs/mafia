let _ = require('lodash');

exports.assignPlayers = (Players, NUMBER_OF_MAFIAS, NUMBER_OF_DETECTIVE) => {
  let numberOfMafiasAssigned = 0,
    numberOfDetectiveAssigned = 0;

  Players = _.shuffle(Players);

  return _.transform(Players, (result, player) => {
    if (numberOfMafiasAssigned < NUMBER_OF_MAFIAS) {
      if (!result.Mafia) { result.Mafia = []; }

      numberOfMafiasAssigned++;

      return result.Mafia.push(player);
    }

    if (numberOfDetectiveAssigned < NUMBER_OF_DETECTIVE) {
      if (!result.Detective) { result.Detective = []; }

      numberOfDetectiveAssigned++;

      return result.Detective.push(player);
    }

    if (!result.Villager) { result.Villager = []; }

    return result.Villager.push(player);
  }, {});
};
