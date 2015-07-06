import LandingView from './views/landingview';
import CreateUserView from './views/create-user-view';
import UserHomeView from './views/userhomeview';

import {ProductCollection} from './models/productmodel';
import {User} from './models/usermodel';
import {UserCollection} from './models/usermodel';
//import ajaxconfig from './ajax-config';

var Router = Backbone.Router.extend({
  routes: {
    '': 'landing',
    'users/create': 'newUser',
    'users/login': 'UserLogin',
    'users/:username': 'userHome'
  },

  initialize: function() {
  this.collection = new ProductCollection([
    {
      title: 'Harry Potter and the Half-Blood Prince',
      url: 'http://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439785960',
      picture: 'http://img2.wikia.nocookie.net/__cb20130719035646/harrypotter/images/7/7f/Hbp_15_anniversary.jpg'
    }
  ]);
  Parse.initialize("yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO", "ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg");
  },

  landing: function() {
    if (Parse.User.current()) {
      this.userHome();
      console.log('hi');
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
    $('#app').prepend(JST.header);
    var view = new UserHomeView();
    $('.app-header').append(view.el);
  }
});

var router = new Router();

export default router;
