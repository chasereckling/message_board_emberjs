App.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function(){
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author'),
        date: this.get('date')
      });
      newQuestion.save();
      this.transitionToRoute('questions');

      this.set('title', null),
      this.set('body', null),
      this.set('author', null),
      this.set('date', null)
    }
  }
});
