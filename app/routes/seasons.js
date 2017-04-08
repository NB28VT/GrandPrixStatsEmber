import Ember from 'ember';
import _ from 'lodash';

export default Ember.Route.extend({
  model(){
    return _.range(1950, 2018);
  }
});
