App.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var newAnswer = this.store.createRecord('answer', {
        name: this.get('name'),
        description: this.get('description'),
        date: this.get('date')
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.transitionToRoute('question', question.id);

      this.set('name', null),
      this.set('description', null),
      this.set('date', null)
    }
  }
})
