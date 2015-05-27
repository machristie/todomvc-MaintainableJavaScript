/*global window, Ember, DS, Todos:true */
window.Todos = Ember.Application.create();

/**
 * JSDoc test
 * @class
 */
Todos.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});
