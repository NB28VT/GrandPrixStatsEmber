import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    
    return $.getJSON("http://ergast.com/api/f1/2008/driverStandings.json").then(function(response){
      return response.MRData.StandingsTable.StandingsLists[0].DriverStandings
    });
  }
});
