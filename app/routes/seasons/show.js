import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return $.getJSON("http://ergast.com/api/f1/" + params.year + "/driverStandings.json").then(function(response){
      return response.MRData.StandingsTable.StandingsLists[0].DriverStandings
    });
  }
});
