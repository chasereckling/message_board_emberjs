App.Question = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
