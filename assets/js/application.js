window.App = Ember.Application.create();

/* Model */
App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  created: DS.attr('date'),
  updated: DS.attr('date'),
  published: DS.attr('date'),
  labels: DS.attr('array')
});

App.Post.FIXTURES = [
  {
    id: 1,
    title: 'CSS post',
    content: 'CSS content',
    created: 'Sat Jun 01 2013 05:30:00 GMT-0700 (PDT)',
    updated: 'Sat Jun 01 2013 05:30:00 GMT-0700 (PDT)',
    labels: ['css']
  },
  {
    id: 2,
    title: 'Javascript post',
    content: 'Javascript content',
    created: 'Sun Jun 02 2013 15:53:31 GMT-0700 (PDT)',
    updated: 'Sun Jun 02 2013 15:53:31 GMT-0700 (PDT)',
    labels: ['javascript']
  }
];

/* Routes */
App.Router.map(function() {
  //this.resource('index', { path: '/' }, function() {
    this.resource('filter', { path: '/:filter' });
  //});
});

App.IndexRoute = Ember.Route.extend({
  model: function(params) {
    return App.Post.FIXTURES;
  }
});

/* Controllers */
App.IndexController = Ember.ArrayController.extend({
  sortProperties: ['created', 'title'],
  sortAscending: false,

  activeSortOption: 'created',
  activeFilterOption: null,

  sortOptions: [
    Ember.Object.create({ label: 'Created date', value: 'property' }),
    Ember.Object.create({ label: 'Blog title', value: 'property' })
  ],

  filter: function(name) {
    this.set('activeFilterOption', name);
    return false;
  },

  sort: function(property) {

    return false;
  }
});

/* Views */
App.ApplicationView = Ember.View.extend({
  tagName: 'section',
  classNames: ['container']
});

App.IndexView = Ember.View.extend({
  classNames: ['row-fluid']
});

App.PostsView = Ember.CollectionView.extend({
  tagName: 'ul',
  classNames: ['content-list', 'span8'],
  classNameBindings: ['controller.activeFilterOption'],

  itemViewClass: Ember.View.extend({
    classNameBindings: ['css', 'js'],
    css: function() {
      return this.get('content.labels').contains('css');
    }.property('content.labels.@each'),
    js: function() {
      return this.get('content.labels').contains('javascript');
    }.property('content.labels.@each'),
    template: Ember.Handlebars.compile('<h3>{{view.content.title}}</h3>' +
      '<time {{bindAttr datetime="view.content.created"}}>{{view.content.created}}</time>' +
      '{{view.content.content}}')
  })
});
