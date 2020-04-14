let Mafia = require('./lib/mafia'),
  players = [
    {
      name: 'Huzefa Lokhand',
      mobile: '919042385408',
      isPlaying: true
    },
    {
      name: 'Abdul Hussain',
      mobile: '917200276832',
      isPlaying: true
    },
    {
      name: 'Aliasgar Lokat',
      mobile: '918682078652',
      isPlaying: false
    },
    {
      name: 'Aliasgar Bombay',
      mobile: '971564209498',
      isPlaying: true
    },
    {
      name: 'Fatema Aliasgar',
      mobile: '919940529900',
      isPlaying: true
    },
    {
      name: 'Hussain Attari',
      mobile: '918939265649',
      isPlaying: false
    },
    {
      name: 'Hussain Madras',
      mobile: '919677194246',
      isPlaying: false
    },
    {
      name: 'Mustafa Devli',
      mobile: '9188278 79971',
      isPlaying: true
    },
    {
      name: 'Mustafa Hussain',
      mobile: '919789843352',
      isPlaying: true
    },
    {
      name: 'Sugra',
      mobile: '8801630972530',
      isPlaying: false
    },
    {
      name: 'Fatema Huzefa',
      mobile: '918390014828',
      isPlaying: true
    },
    {
      name: 'Munira Hussain',
      mobile: '919096335332',
      isPlaying: false
    },
    {
      name: 'Batul Nadir',
      mobile: '919176148210',
      isPlaying: false
    },
    {
      name: 'Fatema Hyderi',
      mobile: '9177711752',
      isPlaying: true
    },
    {
      name: 'Mufaddal SJ',
      mobile: '9840306096',
      isPlaying: false
    },
    {
      name: 'Jameela Mufaddal',
      mobile: '918056030235',
      isPlaying: false
    },
    {
      name: 'Hawwa Mohammed',
      mobile: '971566577618',
      isPlaying: false
    },
    {
      name: 'Murtaza Laxmi',
      mobile: '918056157786',
      isPlaying: true
    }
  ];

function assignPlayers (players, ...ans) {
  let numberOfMafias = ans[0],
    numberOfDetectives = ans[1];

  return Mafia.assignPlayers(players, numberOfMafias, numberOfDetectives);
}

global.assignPlayers = assignPlayers;
global.players = players;
