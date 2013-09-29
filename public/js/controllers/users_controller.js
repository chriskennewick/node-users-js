App.UsersController = Ember.ArrayController.extend({
  createUser: function () { 
    var firstName = this.get('newFirstName');
    var lastName = this.get('newLastName');
    var email = this.get('newEmail');
    if (!firstName.trim() || !lastName.trim() || !email.trim()) { return; }

    var user = this.store.createRecord('user', {
      firstName: firstName,
      lastName: lastName,
      email: email
    });

    this.set('newFirstName', '');
    this.set('newLastName', '');
    this.set('newEmail','');

    user.save();
  },
  remaining: function () {
    return this.get('length');
  }.property('@each'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'user' : 'users';
  }.property('remaining')
})