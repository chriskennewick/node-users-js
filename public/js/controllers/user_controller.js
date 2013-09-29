App.UserController = Ember.ObjectController.extend({
  actions: {
    editUserFirstName: function () {
      this.set('isEditingFirstName', true);
    },
    editUserLastName: function () {
      this.set('isEditingLastName', true);
    },
    editUserEmail: function () {
      this.set('isEditingEmail', true);
    },
    acceptChanges: function () {
      this.set('isEditingFirstName', false);
      this.set('isEditingLastName', false);
      this.set('isEditingEmail', false);
      this.get('model').save();
    },
    deleteUser: function() {
      var user = this.get('model');
      user.deleteRecord();
      user.save();
    }
  },
  isEditingFirstName: false,
  isEditingLastName: false,
  isEditingEmail: false,
});