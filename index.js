let Mafia = require('./lib/mafia');

function assignPlayers (...ans) {
  let players = ans[0].split(','),
    numberOfMafias = ans[1],
    numberOfDetectives = ans[2];

  return Mafia.assignPlayers(players, numberOfMafias, numberOfDetectives);
}

global.assignPlayers = assignPlayers;
// 1: Murtaza Laxmidar
// 2: Huzefa Lokhand
// 3: Fatema Huzefa
// 4: Fatema Aliasgar
// 5: Mustafa Hussain
// 6: Abdul Hussain
// 7: Mustafa Devli
