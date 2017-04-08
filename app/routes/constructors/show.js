import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return $.getJSON("http://ergast.com/api/f1/constructors" + params.team).then(function(response){
      debugger;
    });
  }
});
