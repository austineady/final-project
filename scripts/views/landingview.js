import router from './../router';

export default Backbone.View.extend({
  template: JST.landing,

  events: {
    'submit .landing-form': 'login',
    'click .new-user-button': 'newUser'
  },

  initialize: function() {
    Parse.initialize("yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO", "ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg");
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  login: function() {
    var username = this.$('.user-username').val();
    var password = this.$('.user-password').val();
    console.log(username, password);
    Parse.User.logIn(username, password, {
      success: function(user) {
        console.log(user);
        Parse.User.become(user.sessionToken).then(function(user) {
          router.navigate('');
        });
      },
      error: function(user) {
        alert("Login Failed: Username or Password Incorrect");
      }
    });
  },

  newUser: function() {
    router.navigate('/users/create', {trigger: true});
  }
});
