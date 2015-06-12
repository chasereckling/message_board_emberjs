App.Answer = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
