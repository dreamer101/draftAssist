'use strict';

angular.module('draftAssistApp')
.service('playerService', function() {

  var that = this;

  that.findPlayerById = function(id) {
    var playerId = parseInt(id);
    return _.find(that.roster, function(item) {
      return player._id === parseInt(playerId);
    });
  };

  // TODO: get the roster from the server.
  that.roster =
  [
  {
      name: "Aaron Rodgers ", age: 26, bye: "10", positon: "QB", qty: "1", projPts: "315", paTD: "34", ruTD: "5", reTD: "0", paYds: "5200", ruYds: "430", reYds: "0", imageFile: "qb_aaronRodgers.png"
    },

    {
      name: "Drew Brees ", age: 31, bye: "10", positon: "QB", qty: "1", projPts: "290", paTD: "36", ruTD: "2", reTD: "0", paYds: "5430", ruYds: "320", reYds: "0", imageFile: "qb_drewBrees.png"
    },

    {
      name: "Peyton Manning ", age: 34, bye: "7", positon: "QB", qty: "1", projPts: "283", paTD: "40", ruTD: "1", reTD: "0", paYds: "4900", ruYds: "220", reYds: "0", imageFile: "qb_peytonManning.png"
    },

    {
      name: "Philip Rivers ", age: 28, bye: "10", positon: "QB", qty: "1", projPts: "271", paTD: "32", ruTD: "2", reTD: "0", paYds: "4650", ruYds: "200", reYds: "0", imageFile: "qb_phillipRivers.png"
    },

    {
      name: "Tony Romo ", age: 30, bye: "4", positon: "QB", qty: "1", projPts: "268", paTD: "29", ruTD: "1", reTD: "0", paYds: "4770", ruYds: "250", reYds: "0", imageFile: "qb_tonyRomo.png"
    },

    {
      name: "Matt Ryan  ", age: 25, bye: "8", positon: "QB", qty: "1", projPts: "237", paTD: "27", ruTD: "4", reTD: "0", paYds: "4880", ruYds: "400", reYds: "0", imageFile: "qb_mattRyan.png"
    },

    {
      name: "Jay Cutler", age: 27, bye: "8", positon: "QB", qty: "1", projPts: "230", paTD: "26", ruTD: "3", reTD: "0", paYds: "4300", ruYds: "480", reYds: "0", imageFile: "qb_jayCutler.png"
    },

    {
      name: "Eli Manning", age: 29, bye: "8", positon: "QB", qty: "1", projPts: "226", paTD: "23", ruTD: "2", reTD: "0", paYds: "5400", ruYds: "330", reYds: "0", imageFile: "qb_eliManning.png"
    },

    {
      name: "Ben Roethlisberger", age: 28, bye: "5", positon: "QB", qty: "1", projPts: "193", paTD: "26", ruTD: "2", reTD: "0", paYds: "4600", ruYds: "390", reYds: "0", imageFile: "qb_benRoethlisberger.png"
    },

    {
      name: "Matthew Stafford", age: 22, bye: "7", positon: "QB", qty: "1", projPts: "186", paTD: "30", ruTD: "1", reTD: "0", paYds: "4990", ruYds: "210", reYds: "0", imageFile: "qb_matthewStafford.png"
    },

    {
      name: "Jamaal Charles", age: 25, bye: "4", positon: "RB", qty: "1", projPts: "283", paTD: "0", ruTD: "10", reTD: "4", paYds: "0", ruYds: "1294", reYds: "599", imageFile: "rb_jamaalCharles.png"
    },

    {
      name: "LeSean McCoy", age: 23, bye: "8", positon: "RB", qty: "1", projPts: "267", paTD: "0", ruTD: "10", reTD: "3", paYds: "0", ruYds: "1451", reYds: "385", imageFile: "rb_leseanMccoy.png"
    },

    {
      name: "Matt Forte", age: 27, bye: "9", positon: "RB", qty: "1", projPts: "260", paTD: "0", ruTD: "8", reTD: "3", paYds: "0", ruYds: "1272", reYds: "543", imageFile: "rb_mattForte.png"
    },

    {
      name: "Adrian Peterson", age: 23, bye: "4", positon: "RB", qty: "1", projPts: "202", paTD: "0", ruTD: "11", reTD: "2", paYds: "0", ruYds: "1379", reYds: "274", imageFile: "rb_adrianPeterson.png"
    },

    {
      name: "DeMarco Murray", age: 22, bye: "8", positon: "RB", qty: "1", projPts: "194", paTD: "0", ruTD: "9", reTD: "1", paYds: "0", ruYds: "1122", reYds: "414", imageFile: "rb_demarcoMurray.png"
    },

    {
      name: "Le'Veon Bell", age: 24, bye: "8", positon: "RB", qty: "1", projPts: "212", paTD: "0", ruTD: "8", reTD: "1", paYds: "0", ruYds: "1140", reYds: "378", imageFile: "rb_leveonBell.png"
    },

    {
      name: "Marshawn Lynch", age: 24, bye: "5", positon: "RB", qty: "1", projPts: "188", paTD: "0", ruTD: "10", reTD: "1", paYds: "0", ruYds: "1213", reYds: "209", imageFile: "rb_marshawnLynch.png"
    },

    {
      name: "Arian Foster", age: 22, bye: "6", positon: "RB", qty: "1", projPts: "197", paTD: "0", ruTD: "7", reTD: "2", paYds: "0", ruYds: "1165", reYds: "360", imageFile: "rb_arianFoster.png"
    },

    {
      name: "Frank Gore", age: 23, bye: "7", positon: "RB", qty: "1", projPts: "248", paTD: "0", ruTD: "8", reTD: "0", paYds: "0", ruYds: "1072", reYds: "138", imageFile: "rb_frankGore.png"
    },

    {
      name: "C.J. Anderson", age: 24, bye: "6", positon: "RB", qty: "1", projPts: "254", paTD: "0", ruTD: "9", reTD: "0", paYds: "0", ruYds: "1080", reYds: "106", imageFile: "rb_cjAnderson.png"
    },

    {
      name: "Demaryius Thomas", age: 25, bye: "4", positon: "WR", qty: "1", projPts: "220", paTD: "0", ruTD: "0", reTD: "13", paYds: "0", ruYds: "100", reYds: "1441", imageFile: "wr_demaryiusThomas.png"
    },

    {
      name: "Julio Jones", age: 23, bye: "8", positon: "WR", qty: "1", projPts: "202", paTD: "0", ruTD: "0", reTD: "10", paYds: "0", ruYds: "0", reYds: "1392", imageFile: "wr_julioJones.png"
    },

    {
      name: "Dez Bryant", age: 27, bye: "9", positon: "WR", qty: "1", projPts: "198", paTD: "0", ruTD: "0", reTD: "11", paYds: "0", ruYds: "0", reYds: "1314", imageFile: "wr_dezBryant.png"
    },

    {
      name: "A.J. Green", age: 23, bye: "4", positon: "WR", qty: "1", projPts: "194", paTD: "0", ruTD: "0", reTD: "11", paYds: "0", ruYds: "0", reYds: "1315", imageFile: "wr_ajGreen.png"
    },

    {
      name: "Brandon Marshall", age: 22, bye: "8", positon: "WR", qty: "1", projPts: "190", paTD: "0", ruTD: "0", reTD: "11", paYds: "0", ruYds: "0", reYds: "1264", imageFile: "wr_brandonMarshall.png"
    },

    {
      name: "Jordy Nelson", age: 24, bye: "8", positon: "WR", qty: "1", projPts: "185", paTD: "0", ruTD: "0", reTD: "10", paYds: "0", ruYds: "80", reYds: "1254", imageFile: "wr_jordyNelson.png"
    },

    {
      name: "Alshon Jeffery", age: 24, bye: "5", positon: "WR", qty: "1", projPts: "184", paTD: "0", ruTD: "1", reTD: "9", paYds: "0", ruYds: "0", reYds: "1276", imageFile: "wr_alshonJeffery.png"
    },

    {
      name: "Pierre Garcon", age: 22, bye: "6", positon: "WR", qty: "1", projPts: "155", paTD: "0", ruTD: "1", reTD: "7", paYds: "0", ruYds: "99", reYds: "1187", imageFile: "wr_pierreGarcon.png"
    },

    {
      name: "Mike Evans", age: 23, bye: "7", positon: "WR", qty: "1", projPts: "110", paTD: "0", ruTD: "0", reTD: "6", paYds: "0", ruYds: "0", reYds: "987", imageFile: "wr_mikeEvans.png"
    },

    {
      name: "Odell Beckham Jr.", age: 24, bye: "6", positon: "WR", qty: "1", projPts: "110", paTD: "0", ruTD: "0", reTD: "5", paYds: "0", ruYds: "0", reYds: "912", imageFile: "wr_odellBeckham.png"
    },

    {
      name: "Jimmy Graham", age: 25, bye: "4", positon: "TE", qty: "1", projPts: "195", paTD: "0", ruTD: "0", reTD: "13", paYds: "0", ruYds: "100", reYds: "1180", imageFile: "te_jimmyGraham.png"
    },

    {
      name: "Julius Thomas", age: 23, bye: "8", positon: "TE", qty: "1", projPts: "158", paTD: "0", ruTD: "0", reTD: "11", paYds: "0", ruYds: "0", reYds: "938", imageFile: "te_juliusThomas.png"
    },

    {
      name: "Rob Gronkowski", age: 27, bye: "9", positon: "TE", qty: "1", projPts: "148", paTD: "0", ruTD: "0", reTD: "10", paYds: "0", ruYds: "0", reYds: "916", imageFile: "te_robGronkowski.png"
    },

    {
      name: "Vernon Davis", age: 23, bye: "4", positon: "TE", qty: "1", projPts: "139", paTD: "0", ruTD: "0", reTD: "9", paYds: "0", ruYds: "0", reYds: "823", imageFile: "te_vernonDavis.png"
    },

    {
      name: "Jason Witten", age: 22, bye: "8", positon: "TE", qty: "1", projPts: "124", paTD: "0", ruTD: "0", reTD: "7", paYds: "0", ruYds: "0", reYds: "851", imageFile: "te_jasonWitten.png"
    },

    {
      name: "Jordan Cameron", age: 24, bye: "8", positon: "TE", qty: "1", projPts: "122", paTD: "0", ruTD: "0", reTD: "6", paYds: "0", ruYds: "80", reYds: "880", imageFile: "te_jordanCameron.png"
    },

    {
      name: "Delanie Walker", age: 24, bye: "5", positon: "TE", qty: "1", projPts: "93", paTD: "0", ruTD: "1", reTD: "5", paYds: "0", ruYds: "0", reYds: "610", imageFile: "te_delanieWalker.png"
    },

    {
      name: "Dwayne Allen", age: 22, bye: "6", positon: "TE", qty: "1", projPts: "82", paTD: "0", ruTD: "1", reTD: "5", paYds: "0", ruYds: "99", reYds: "530", imageFile: "te_dwayneAllen.png"
    },

    {
      name: "Garrett Graham", age: 23, bye: "7", positon: "TE", qty: "1", projPts: "75", paTD: "0", ruTD: "0", reTD: "4", paYds: "0", ruYds: "0", reYds: "505", imageFile: "te_garrettGraham.png"
    },

    {
      name: "Tyler Eifert", age: 24, bye: "6", positon: "TE", qty: "1", projPts: "73", paTD: "0", ruTD: "0", reTD: "3", paYds: "0", ruYds: "0", reYds: "509", imageFile: "te_tylerEifert.png"
    },

    {
      name: "Stephen Gostkowski", age: 25, bye: "4", positon: "K", qty: "1", projPts: "148", paTD: "0", ruTD: "0", reTD: "13", paYds: "0", ruYds: "100", reYds: "1180", imageFile: "te_jimmyGraham.png"
    },

    {
      name: "Phil Dawson", age: 23, bye: "8", positon: "K", qty: "1", projPts: "138", paTD: "0", ruTD: "0", reTD: "11", paYds: "0", ruYds: "0", reYds: "938", imageFile: "te_juliusThomas.png"
    },

    {
      name: "Justin Tucker", age: 27, bye: "9", positon: "K", qty: "1", projPts: "134", paTD: "0", ruTD: "0", reTD: "10", paYds: "0", ruYds: "0", reYds: "916", imageFile: "te_robGronkowski.png"
    },

    {
      name: "Matt Prater", age: 23, bye: "4", positon: "K", qty: "1", projPts: "134", paTD: "0", ruTD: "0", reTD: "9", paYds: "0", ruYds: "0", reYds: "823", imageFile: "te_vernonDavis.png"
    },

    {
      name: "Mason Crosby", age: 22, bye: "8", positon: "K", qty: "1", projPts: "134", paTD: "0", ruTD: "0", reTD: "7", paYds: "0", ruYds: "0", reYds: "851", imageFile: "te_jasonWitten.png"
    },

    {
      name: "Steven Hauschka", age: 24, bye: "8", positon: "K", qty: "1", projPts: "134", paTD: "0", ruTD: "0", reTD: "6", paYds: "0", ruYds: "80", reYds: "880", imageFile: "te_jordanCameron.png"
    },

    {
      name: "Adam Vinatieri", age: 24, bye: "5", positon: "K", qty: "1", projPts: "133", paTD: "0", ruTD: "1", reTD: "5", paYds: "0", ruYds: "0", reYds: "610", imageFile: "te_delanieWalker.png"
    },

    {
      name: "Dan Bailey", age: 22, bye: "6", positon: "K", qty: "1", projPts: "130", paTD: "0", ruTD: "1", reTD: "5", paYds: "0", ruYds: "99", reYds: "530", imageFile: "te_dwayneAllen.png"
    },

    {
      name: "Shayne Graham", age: 23, bye: "7", positon: "K", qty: "1", projPts: "130", paTD: "0", ruTD: "0", reTD: "4", paYds: "0", ruYds: "0", reYds: "505", imageFile: "te_garrettGraham.png"
    },

    {
      name: "Nick Novak", age: 24, bye: "6", positon: "K", qty: "1", projPts: "129", paTD: "0", ruTD: "0", reTD: "3", paYds: "0", ruYds: "0", reYds: "509", imageFile: "te_tylerEifert.png"
    }
    ];
});