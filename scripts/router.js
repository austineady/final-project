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
  $.ajax({
    url: "http://api.remix.bestbuy.com/v1/products((manufacturer=sony)&salePrice<900)?show=name,sku,salePrice,image&format=json&apiKey=e25cp4dyr5m785e27wke6rt3",
    /*beforeSend: function(xhr) {
      xhr.setRequestHeader("AWSAccessKeyId", "AKIAIVQJW5LWHKB66NAA");
      xhr.setRequestHeader("AssociateTag", "3130-7721-6194");
      xhr.setRequestHeader("Keywords", "harry%20potter%20half-blood%20prince");
      xhr.setRequestHeader("Operation", "ItemSearch");
      xhr.setRequestHeader("ResponseGroup", "ItemAttributes");
      xhr.setRequestHeader("SearchIndex", "Books");
      xhr.setRequestHeader("Service", "AWSECommerceService");
      xhr.setRequestHeader("TimeStamp", "2015-07-07T15%3A44%3A12.000Z");
      xhr.setRequestHeader("Version", "2011-08-01");
      xhr.setRequestHeader("Signature", "%2BxBiUfdVAYEFfPdoC8LzquKkVUN5hdwtqyGRoJYceTQ%3D");*/
   success: function (data) {
    console.log(data);
    },
    error: function(){
     console.log("cannot get data");
   }
 });
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
    var view = new UserHomeView();
    $('#app').html(view.el);
  }
});

var router = new Router();

export default router;
