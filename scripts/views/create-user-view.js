import config from './../ajax-config';
import router from './../router';

export default Backbone.View.extend({
  template: JST.newuser,

  events: {
    'submit .new-user-form': 'createUser',
    'click .new-user-create-button': 'createUser'
  },

  initialize: function() {
    console.log(this.model);
    Parse.initialize("yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO", "ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg");
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  createUser: function() {
    var username = this.$('.new-user-username').val();
    var password = this.$('.new-user-password').val();
    var email = this.$('.new-user-email').val();
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    user.set("profilePicture", "http://www.orthopaedicsurgeondirectory.com/admin/uploads/place_holder_Lancast.jpg"),
    user.set("friends", [{"profilePicture": "http://www.orthopaedicsurgeondirectory.com/admin/uploads/place_holder_Lancast.jpg", "username": "austineady"}])
    user.signUp(null, {
      success: function(user) {
        Parse.User.become(user.sessionToken).then(function(user) {
          router.navigate('', {trigger: true});
        });
      },
      error: function(user, error) {
        alert(user, error);
      }
    });
  }
});
