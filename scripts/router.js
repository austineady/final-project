import LandingView from './views/landingview';
import CreateUserView from './views/create-user-view';
import UserHomeView from './views/userhomeview';

import {ProductCollection} from './models/productmodel';
import {User} from './models/usermodel';
import {UserCollection} from './models/usermodel';
//import ajaxconfig from './ajax-config';

//best buy: e25cp4dyr5m785e27wke6rt3

var Router = Backbone.Router.extend({
  routes: {
    '': 'landing',
    'users/create': 'newUser',
    'users/login': 'UserLogin',
  },

  initialize: function() {
  Parse.initialize("yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO", "ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg");
  },

  landing: function() {
    if (Parse.User.current()) {
      this.userHome();
    } else {
      var users = new UserCollection();
      var view = new LandingView({collection: users});
      $('#app').prepend(JST.header);
      $('.app-header').append(view.el);
    }
  },

  newUser: function() {
    var user = new User();
    var view = new CreateUserView({model: user});
    $('#app').prepend(JST.header);
    $('.app-header').append(view.el);
  },

  userHome: function(username) {
    var view = new UserHomeView();
    $('#app').html(view.el);
  }
});

var router = new Router();

export default router;
