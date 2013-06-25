window.App = Ember.Application.create();

App.Post = Ember.Object.extend({
  title: null,
  content: null,
  published: null,
  labels: []
});

App.Post.FIXTURES = [
  App.Post.create({
    id: 1,
    title: 'A New CSS Bubble',
    content: '<p>Nullam enim justo, pretium sed nisl eu, vulputate placerat elit. In ultrices nisi dui, ut viverra nunc condimentum nec. Sed posuere, mi vel iaculis commodo, risus tortor scelerisque ligula, vel consectetur metus orci non dolor. Vestibulum odio dolor, tristique eu congue id, mollis quis eros. Morbi vulputate tincidunt vulputate.</p>',
    published: 'Wed May 01 2013 05:30:00 GMT-0700 (PDT)',
    labels: ['css']
  }),
  App.Post.create({
    id: 2,
    title: 'The Best Javascript Best Practices',
    content: 'Integer ornare ut arcu in condimentum. Phasellus ut dui dictum, mollis ipsum in, elementum mauris. Etiam a viverra leo. Suspendisse nec rutrum ligula. Quisque in libero urna. Vestibulum vel lacus dolor. Morbi commodo fringilla elit, eget elementum ligula vestibulum non. Nunc et venenatis ipsum.</p>',
    published: 'Sun Jun 02 2013 15:53:31 GMT-0700 (PDT)',
    labels: ['javascript']
  }),
  App.Post.create({
    id: 3,
    title: 'CSS Preprocessors',
    content: '<p>Phasellus sollicitudin, nunc vel suscipit convallis, justo sapien rhoncus purus, in scelerisque enim magna quis lectus. Pellentesque ut condimentum ante, sit amet semper mi. Sed ut molestie libero. Aliquam ornare sagittis arcu, eget varius lacus ultricies suscipit.</p>',
    published: 'Sun Jun 09 2013 15:53:31 GMT-0700 (PDT)',
    labels: ['css']
  })
];
