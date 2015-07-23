import LandingView from './views/landingview';
import CreateUserView from './views/create-user-view';
import UserHomeView from './views/userhomeview';
import TrendingView from './views/trendingview';
import LibraryView from './views/libraryview';
import CreateView from './views/createview';
import GiftView from './views/giftview';
import RenderFeedView from './views/renderfeedview';
import ListView from './views/listview';


import {ProductCollection} from './models/productmodel';
import {User} from './models/usermodel';
import {UserCollection} from './models/usermodel';

//best buy: e25cp4dyr5m785e27wke6rt3

var Router = Backbone.Router.extend({
  routes: {
    '': 'landing',
    'users/create': 'newUser',
    'users/login': 'UserLogin'
    // 'library': 'showLibrary',
    // 'gifts': 'renderGifts',
    // 'create': 'renderCreate',
    // 'list': 'renderList',
    // 'feed': 'renderFeed'
  },

  initialize: function() {
  Parse.initialize("yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO", "ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg");
  Handlebars.registerHelper('moment', function(date) {
    return moment(date).fromNow();
  });
  toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-left",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
  },

  landing: function() {
    if (Parse.User.current()) {
      this.userHome();
    } else {
      var users = new UserCollection();
      var view = new LandingView({collection: users});
      $('#app').html(view.el);
    }
  },

  newUser: function() {
    var user = new User();
    var view = new CreateUserView({model: user});
    $('#app').html(view.el);
  },

  userHome: function() {
    var view = new UserHomeView();
    $('#app').html(view.el);
  },
  //
  // showLibrary: function() {
  //   // var view = new LibraryView();
  //   // $('#app').html(JST.home);
  //   // $('.accordion-container').html(view.el);
  // },
  //
  // renderGifts: function() {
  //   // var view = new GiftView();
  //   // $('#app').html(JST.home);
  //   // $('.accordion-container').html(view.el);
  // },
  //
  // renderCreate: function() {
  //   // var view = new CreateView();
  //   // $('#app').html(JST.home);
  //   // $('.accordion-container').html(view.el);
  // },
  //
  // renderList: function() {
  //   // var view = new ListView();
  //   // $('#app').html(JST.home);
  //   // $('.accordion-container').html(view.el);
  // },
  //
  // renderFeed: function() {
  //   // var view = new RenderFeedView();
  //   // $('#app').html(JST.home);
  //   // $('.accordion-container').html(view.el);
  // }
});

var router = new Router();

export default router;
