import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    // $.getJSON('/api/users');
    return this.store.findAll('user');

  }
});
