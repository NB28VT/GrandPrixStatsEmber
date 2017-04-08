import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return $.getJSON("http://ergast.com/api/f1/constructors.json?limit=300").then(function(response){
      return response.MRData.ConstructorTable.Constructors
    });
  }
});
