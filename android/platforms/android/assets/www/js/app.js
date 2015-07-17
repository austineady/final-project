require.register("ajax-config", function(exports, require, module){
  'use strict';

$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
  if (options.url.match(/api.parse.com/)) {
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO';
    options.headers['X-Parse-REST-API-Key'] = 'KDyLxWvykTTXKYScdlZh8QlUsm8sHGp6NSLROQcu';
  }
});
  
});

require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

(function () {
  'use strict';

  $(document).ready(function () {
    Backbone.history.start();
  });
})();
  
});

require.register("router", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsLandingview = require('./views/landingview');

var _viewsLandingview2 = _interopRequireDefault(_viewsLandingview);

var _viewsCreateUserView = require('./views/create-user-view');

var _viewsCreateUserView2 = _interopRequireDefault(_viewsCreateUserView);

var _viewsUserhomeview = require('./views/userhomeview');

var _viewsUserhomeview2 = _interopRequireDefault(_viewsUserhomeview);

var _viewsTrendingview = require('./views/trendingview');

var _viewsTrendingview2 = _interopRequireDefault(_viewsTrendingview);

var _modelsProductmodel = require('./models/productmodel');

var _modelsUsermodel = require('./models/usermodel');

//best buy: e25cp4dyr5m785e27wke6rt3

var Router = Backbone.Router.extend({
  routes: {
    '': 'landing',
    'users/create': 'newUser',
    'users/login': 'UserLogin'
  },

  initialize: function initialize() {
    Parse.initialize('yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO', 'ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg');
    Handlebars.registerHelper('moment', function (date) {
      return moment(date).fromNow();
    });
  },

  landing: function landing() {
    if (Parse.User.current()) {
      this.userHome();
    } else {
      var users = new _modelsUsermodel.UserCollection();
      var view = new _viewsLandingview2['default']({ collection: users });
      $('#app').html(view.el);
    }
  },

  newUser: function newUser() {
    var user = new _modelsUsermodel.User();
    var view = new _viewsCreateUserView2['default']({ model: user });
    $('#app').prepend(JST.header);
    $('.app-header').append(view.el);
  },

  userHome: function userHome(username) {
    var view = new _viewsUserhomeview2['default']();
    $('#app').html(view.el);
    $.ajax({
      url: 'https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/mostViewed?apiKey=e25cp4dyr5m785e27wke6rt3',
      dataType: 'jsonp',
      success: function success(data) {
        console.log(data);
        var trending = new _viewsTrendingview2['default']({ collection: data.results });
        $('.trending-list').html(trending.el);
      },
      error: function error(object, _error) {
        console.log(object, _error);
        console.log('No search results were found, please try again');
      }
    });
  }
});

var router = new Router();

exports['default'] = router;
module.exports = exports['default'];
  
});

require.register("models/productmodel", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Product = Backbone.Model.extend({
  defaults: {
    name: '',
    color: '',
    customerReviewAverage: '',
    url: '',
    image: '',
    backViewImage: '',
    leftViewImage: '',
    rightViewImage: '',
    topViewImage: '',
    thumbnailImage: '',
    isEditing: false,
    features: [],
    manufacturer: '',
    shortDescription: '',
    salePrice: null,
    label: '',
    sku: null
  }
});

var ProductCollection = Backbone.Collection.extend({
  model: Product
});

exports['default'] = { Product: Product, ProductCollection: ProductCollection };
module.exports = exports['default'];
  
});

require.register("models/usermodel", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://api.parse.com/1/users',
  defaults: {
    username: '',
    password: '',
    email: ''
  }
});

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: 'https://api.parse.com/1/users'
});

exports['default'] = { User: User, UserCollection: UserCollection };
module.exports = exports['default'];
  
});

require.register("views/create-user-view", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ajaxConfig = require('./../ajax-config');

var _ajaxConfig2 = _interopRequireDefault(_ajaxConfig);

exports['default'] = Backbone.View.extend({
  template: JST.newuser,

  events: {
    'submit .new-user-form': 'createUser'
  },

  initialize: function initialize() {
    console.log(this.model);
    Parse.initialize('yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO', 'ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg');
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
  },

  createUser: function createUser() {
    var username = this.$('.new-user-username').val();
    var password = this.$('.new-user-password').val();
    var email = this.$('.new-user-email').val();
    var user = new Parse.User();
    user.set('username', username);
    user.set('password', password);
    user.set('email', email);
    user.signUp(null, {
      success: function success(user) {
        console.log('success!');
      },
      error: function error(user, _error) {
        alert('Error: sign up not successful');
      }
    });
  }
});
module.exports = exports['default'];
  
});

require.register("views/createview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.createitem,

  events: {
    'submit .create-item': 'saveItem',
    'click .create-item-save': 'saveItem'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.activeNav();
  },

  activeNav: function activeNav() {
    this.$('.side-nav').removeClass('side-nav-active');
    this.$('.show-create').addClass('side-nav-active');
  },

  saveItem: function saveItem(e) {
    e.preventDefault();
    var user = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    var featureString = this.$('.create-features').val();
    var features = [];
    features.push(featureString);
    //var features = _.toArray(featureString);
    // var features = _.map(featureArray, ',', function(index) {
    //   return {"feature": index};
    // });
    console.log(features);
    product.save({
      customerReviewAverage: '',
      backViewImage: '',
      leftViewImage: '',
      rightViewImage: '',
      topViewImage: '',
      thumbnailImage: '',
      url: '',
      sku: null,
      owner: user.attributes.username,
      name: this.$('.create-name').val(),
      color: this.$('.create-color').val(),
      manufacturer: this.$('.create-manufacturer').val(),
      shortDescription: this.$('.create-description').val(),
      salePrice: this.$('.create-price').val(),
      features: features,
      image: this.$('.create-image').val()
    }).then((function () {
      this.render();
    }).bind(this));
  }
});
module.exports = exports['default'];
  
});

require.register("views/frienditemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.frienditem,

  events: {
    'click .friend-item-add': 'addToList',
    'click .friend-item-gift': 'giftItem'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  addToList: function addToList() {
    this.model = this.model.attributes;
    var user = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.save({
      color: this.model.color,
      customerReviewAverage: this.model.customerReviewAverage,
      features: this.model.features,
      image: this.model.image,
      backViewImage: this.model.backViewImage,
      leftViewImage: this.model.leftViewImage,
      rightViewImage: this.model.rightViewImage,
      topViewImage: this.model.topViewImage,
      thumbnailImage: this.model.thumbnailImage,
      url: this.model.url,
      name: this.model.name,
      salePrice: this.model.salePrice,
      shortDescription: this.model.shortDescription,
      sku: this.model.sku,
      owner: user.attributes.username
    });
    /*user.attributes.list.push(this.model);
    console.log(user.attributes.list);
    user.save();*/
  },

  giftItem: function giftItem() {
    var user = Parse.User.current();
    var Activity = Parse.Object.extend('Activity');
    var activity = new Activity();
    var owner = this.model.attributes.owner;
    var item = [this.model.attributes];
    activity.save({
      user: user.attributes.username,
      oppositeUser: owner,
      item: item
    });
    console.log(activity);
  }
});
module.exports = exports['default'];
  
});

require.register("views/friendlistitem", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _friendview = require('./friendview');

var _friendview2 = _interopRequireDefault(_friendview);

exports['default'] = Backbone.View.extend({
  template: JST.friendlistitem,

  className: 'friend-item',

  events: {
    'click .friend-box': 'showFriend'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  showFriend: function showFriend() {
    var that = this;
    var userUsername = this.model.username;
    var user = this.model;
    var Product = Parse.Object.extend('Product');
    var query = new Parse.Query(Product);
    query.equalTo('owner', userUsername);
    query.find({
      success: function success(results) {
        var view = new _friendview2['default']({ model: user, collection: results });
        // the .accordion-container does not exist inside this view instance's
        // el, so use reguarl jQuery instead of this.el's scope
        $('.accordion-container').html(view.el);
      },
      error: function error(_error) {
        alert('This user\'s account is down');
      }
    });
  }
});
module.exports = exports['default'];
  
});

require.register("views/friendlistview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _friendlistitem = require('./friendlistitem');

var _friendlistitem2 = _interopRequireDefault(_friendlistitem);

exports['default'] = Backbone.View.extend({
  template: JST.friendlist,

  initialize: function initialize() {
    console.log(this.collection);
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      var view = new _friendlistitem2['default']({
        model: child
      });
      this.$('.friend-list').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
  
});

require.register("views/friendview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _frienditemview = require('./frienditemview');

var _frienditemview2 = _interopRequireDefault(_frienditemview);

exports['default'] = Backbone.View.extend({
  template: JST.friend,

  className: 'friend-profile',

  initialize: function initialize() {
    console.log('friend is', this.model);
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      var view = new _frienditemview2['default']({
        model: child
      });
      this.$('.friend-items').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
  
});

require.register("views/giftitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.giftitem,

  events: {
    'click .delete-gift': 'deleteGift'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  deleteGift: function deleteGift() {
    var Activity = Parse.Object.extend('Activity');
    var query = new Parse.Query(Activity);
    var objectId = this.model.objectId;
    query.get(objectId, {
      success: function success(activity) {
        activity.destroy();
        document.location.reload(true);
      },
      error: function error(object, _error) {
        console.log(object, _error);
      }
    });
  }
});
module.exports = exports['default'];
  
});

require.register("views/giftview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _giftitemview = require('./giftitemview');

var _giftitemview2 = _interopRequireDefault(_giftitemview);

exports['default'] = Backbone.View.extend({
  template: JST.gift,

  initialize: function initialize() {
    var user = Parse.User.current();
    var Activity = Parse.Object.extend('Activity');
    var activity = new Activity();
    activity.fetch().then((function (data) {
      var list = _.where(data.attributes.results, { user: user.attributes.username });
      this.render(list);
    }).bind(this));
  },

  render: function render(list) {
    console.log(list);
    this.$el.html(this.template());
    this.renderChildren(list);
    $('.side-nav').removeClass('side-nav-active');
    $('.show-gifts').addClass('side-nav-active');
  },

  renderChildren: function renderChildren(list) {
    _.invoke(this.children || [], 'remove');

    this.children = list.map((function (child) {
      var view = new _giftitemview2['default']({
        model: child
      });
      this.$('.gift-list').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }

});
module.exports = exports['default'];
  
});

require.register("views/landingsearch", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _searchitemview = require('./searchitemview');

var _searchitemview2 = _interopRequireDefault(_searchitemview);

exports['default'] = Backbone.View.extend({
  template: JST.landingsearch,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.products.map((function (child) {
      var view = new _searchitemview2['default']({
        model: child
      });
      this.$('.search-results-box').prepend(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
  
});

require.register("views/landingsearchitemview", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.landingsearchitem,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  }
});
module.exports = exports["default"];
  
});

require.register("views/landingview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

var _searchview = require('./searchview');

var _searchview2 = _interopRequireDefault(_searchview);

exports['default'] = Backbone.View.extend({
  template: JST.landing,

  currentPage: 1,

  events: {
    'submit .landing-form': 'login',
    'click .user-submit': 'login',
    'click .new-user-button': 'newUser',
    'click .app-user': 'showLogin',
    'submit .home-search-form': 'showResults',
    'click .search-backwards': 'pageBackward',
    'click .search-forwards': 'pageForward'
  },

  initialize: function initialize() {
    Parse.initialize('yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO', 'ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg');
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
  },

  login: function login() {
    // var username = String(this.$('.user-username').val());
    // var password = String(this.$('.user-password').val());
    //console.log(username, password);
    Parse.User.logIn(this.$('.user-username').val(), this.$('.user-password').val(), {
      success: function success(user) {
        console.log(user);
        Parse.User.become(user.sessionToken).then(function (user) {
          document.location.reload(true);
        });
      },
      error: function error(user) {
        alert('Login Failed: Username or Password Incorrect');
      }
    });
  },

  newUser: function newUser() {
    _router2['default'].navigate('/users/create', { trigger: true });
  },

  showLogin: function showLogin() {
    $('.login-box').removeClass('login-hidden');
  },

  showResults: function showResults(e) {
    e.preventDefault();
    var query = this.$('.home-search-bar').val();
    var search = query.replace(' ', '&search=');
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/products((search=' + search + '))?show=name,sku,salePrice,url,image,backViewImage,leftViewImage,rightViewImage,thumbnailImage,topViewImage,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page=' + this.currentPage,
      success: (function (data) {
        var view = new _searchview2['default']({ collection: data });
        this.$('.search-results').html(view.el);
        if (data.currentPage === 1) {
          this.$('.search-backwards').removeClass('search-backwards');
        }
      }).bind(this),
      error: function error() {
        alert('No search results were found, please try again');
      }
    });
  },

  pageForward: function pageForward(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber + 1;
    this.showResults(e);
  },

  pageBackward: function pageBackward(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber - 1;
    this.showResults(e);
  }
});
module.exports = exports['default'];
  
});

require.register("views/listitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reviewview = require('./reviewview');

var _reviewview2 = _interopRequireDefault(_reviewview);

var _modalview = require('./modalview');

var _modalview2 = _interopRequireDefault(_modalview);

exports['default'] = Backbone.View.extend({
  template: JST.listitem,

  events: {
    'click .list-card': 'showModel'
  },

  tagName: 'li',
  className: 'list-item',

  isEditing: false,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  showModel: function showModel() {
    var view = new _modalview2['default']({ model: this.model });
    $('.item-modal').html(view.el);
  }
});
module.exports = exports['default'];
  
});

require.register("views/listview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _listitemview = require('./listitemview');

var _listitemview2 = _interopRequireDefault(_listitemview);

exports['default'] = Backbone.View.extend({
  template: JST.renderlist,

  initialize: function initialize() {
    this.model = Parse.User.current();
    console.log(this.model);
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.fetch().then((function (data) {
      console.log(data);
      var list = _.where(data.attributes.results, { owner: this.model.attributes.username });
      this.render(list);
    }).bind(this));
  },

  render: function render(list) {
    this.$el.html(this.template());
    this.renderChildren(list);
    $('.side-nav').removeClass('side-nav-active');
    $('.show-list').addClass('side-nav-active');
  },

  renderChildren: function renderChildren(list) {
    _.invoke(this.children || [], 'remove');

    console.log(list);

    this.children = list.map((function (child) {
      var view = new _listitemview2['default']({
        model: child
      });
      this.$('.user-list').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
  
});

require.register("views/modalview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reviewview = require('./reviewview');

var _reviewview2 = _interopRequireDefault(_reviewview);

exports['default'] = Backbone.View.extend({
  template: JST.modal,

  isEditing: false,

  events: {
    'click .close-modal': 'close',
    'click .modal-background': 'close',
    'click .reviews': 'renderReviews',
    'click .list-item-edit': 'editItem',
    'submit .list-item-edit-form': 'findItem',
    'click .list-item-edit-cancel': 'cancelEdit',
    'click .list-item-edit-save': 'findItem',
    'click .list-item-delete': 'deleteItem'
  },

  initialize: function initialize() {
    $('.modal-background').removeClass('modal-disabled');
    $('.item-modal').removeClass('modal-disabled');
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  close: function close() {
    $('.item-modal').addClass('modal-disabled');
  },

  renderReviews: function renderReviews() {
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/reviews(sku=' + this.model.sku + ')?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=id,sku,comment,reviewer.name,submissionTime,title,rating',
      success: (function (data) {
        var view = new _reviewview2['default']({ model: data });
        this.$('.review-box').html(view.el);
      }).bind(this),
      error: function error() {
        this.render();
      }
    });
  },

  editItem: function editItem() {
    this.model.isEditing = true;
    this.render();
  },

  findItem: function findItem() {
    var Product = Parse.Object.extend('Product');
    var query = new Parse.Query(Product);
    var objectId = this.model.objectId;
    query.get(objectId, {
      success: (function (product) {
        console.log(product);
        this.saveItem(product);
      }).bind(this),
      error: function error(object, _error) {
        alert('There seems to be something wrong with the server. Please try again in a few minutes');
      }
    });
  },

  saveItem: function saveItem(product) {
    var name = this.$('.edit-name').val();
    var color = this.$('.edit-color').val();
    var price = this.$('.edit-price').val();
    var description = this.$('.edit-description').val();
    product.save({
      name: name,
      color: color,
      price: price,
      description: description,
      isEditing: false
    });
    console.log(product);
    this.close();
    document.location.reload(true);
  },

  deleteItem: function deleteItem() {
    var result = confirm('Are you sure you want to delete this item? This action is irreversible');
    if (result) {
      var that = this;
      var Product = Parse.Object.extend('Product');
      var query = new Parse.Query(Product);
      var objectId = that.model.objectId;
      query.get(objectId, {
        success: function success(product) {
          product.destroy();
        }
      });
      this.close();
      document.location.reload(true);
    }
  },

  cancelEdit: function cancelEdit() {
    this.model.isEditing = false;
    this.render();
  }
});
module.exports = exports['default'];
  
});

require.register("views/renderitemview", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.renderitem,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  }
});
module.exports = exports["default"];
  
});

require.register("views/rendersearchview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _searchview = require('./searchview');

var _searchview2 = _interopRequireDefault(_searchview);

exports['default'] = Backbone.View.extend({
  template: JST.rendersearch,

  currentPage: 1,

  events: {
    'submit .home-search-form': 'showResults',
    'click .search-backwards': 'pageBackward',
    'click .search-forwards': 'pageForward'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.activeNav();
  },

  activeNav: function activeNav() {
    this.$('.side-nav').removeClass('side-nav-active');
    this.$('.show-search').addClass('side-nav-active');
  },

  showResults: function showResults(e) {
    e.preventDefault();
    var query = this.$('.home-search-bar').val();
    var search = query.replace(' ', '&search=');
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/products((search=' + search + '))?show=name,sku,salePrice,url,image,backViewImage,leftViewImage,rightViewImage,thumbnailImage,topViewImage,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page=' + this.currentPage,
      success: (function (data) {
        var view = new _searchview2['default']({ collection: data });
        this.$('.search-results').html(view.el);
        if (data.currentPage === 1) {
          this.$('.search-backwards').removeClass('search-backwards');
        }
      }).bind(this),
      error: function error() {
        alert('No search results were found, please try again');
      }
    });
  },

  pageForward: function pageForward(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber + 1;
    this.showResults(e);
  },

  pageBackward: function pageBackward(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber - 1;
    this.showResults(e);
  }
});
module.exports = exports['default'];
  
});

require.register("views/reviewview", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Backbone.View.extend({
  template: JST.review,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  }
});
module.exports = exports["default"];
  
});

require.register("views/searchitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _searchmodalview = require('./searchmodalview');

var _searchmodalview2 = _interopRequireDefault(_searchmodalview);

exports['default'] = Backbone.View.extend({
  template: JST.searchitem,

  events: {
    'click .card': 'showItem'
  },

  opened: false,

  tagName: 'li',

  className: 'search-item',

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  showItem: function showItem() {
    var view = new _searchmodalview2['default']({ model: this.model });
    $('.search-item-modal').html(view.el);
  }

});
module.exports = exports['default'];
  
});

require.register("views/searchmodalview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reviewview = require('./reviewview');

var _reviewview2 = _interopRequireDefault(_reviewview);

exports['default'] = Backbone.View.extend({
  template: JST.searchmodal,

  isEditing: false,

  isUser: true,

  events: {
    'click .search-item-list-add': 'addToList',
    'click .close-modal': 'close',
    'click .reviews': 'renderReviews'
  },

  initialize: function initialize() {
    $('.search-item-modal').removeClass('search-modal-disabled');
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  close: function close() {
    $('.search-item-modal').addClass('search-modal-disabled');
  },

  renderReviews: function renderReviews() {
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/reviews(sku=' + this.model.sku + ')?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=id,sku,comment,reviewer.name,submissionTime,title,rating',
      success: (function (data) {
        var view = new _reviewview2['default']({ model: data });
        this.$('.review-box').html(view.el);
      }).bind(this),
      error: function error() {
        this.render();
      }
    });
  },

  addToList: function addToList() {
    var user = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.save({
      color: this.model.color,
      customerReviewAverage: this.model.customerReviewAverage,
      features: this.model.features,
      image: this.model.image,
      backViewImage: this.model.backViewImage,
      leftViewImage: this.model.leftViewImage,
      rightViewImage: this.model.rightViewImage,
      topViewImage: this.model.topViewImage,
      thumbnailImage: this.model.thumbnailImage,
      url: this.model.url,
      name: this.model.name,
      salePrice: this.model.salePrice,
      shortDescription: this.model.shortDescription,
      sku: this.model.sku,
      owner: user.attributes.username
    });
    console.log(user);
  }
});
module.exports = exports['default'];
  
});

require.register("views/searchview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _searchitemview = require('./searchitemview');

var _searchitemview2 = _interopRequireDefault(_searchitemview);

exports['default'] = Backbone.View.extend({
  template: JST.searchresults,

  className: 'results-box',

  initialize: function initialize() {
    console.log(this.collection);
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.products.map((function (child) {
      var view = new _searchitemview2['default']({
        model: child
      });
      this.$('.search-results-box').prepend(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
  
});

require.register("views/trendingitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.trendingitem,

  events: {
    'click .trending-item-list-add': 'addToList'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  addToList: function addToList() {
    var user = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.save({
      color: '',
      features: [],
      manufacturer: '',
      customerReviewAverage: this.model.customerReviews.averageScore,
      image: this.model.images.standard,
      backViewImage: '',
      leftViewImage: '',
      rightViewImage: '',
      topViewImage: '',
      thumbnailImage: '',
      url: this.model.links.product,
      name: this.model.names.title,
      salePrice: this.model.prices.current,
      shortDescription: this.model.descriptions.short,
      sku: Number(this.model.sku),
      owner: user.attributes.username
    });
    document.location.reload(true);
    /*user.attributes.list.push(this.model);
    console.log(user.attributes.list);
    user.save();*/
  }
});
module.exports = exports['default'];
  
});

require.register("views/trendingview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _trendingitemview = require('./trendingitemview');

var _trendingitemview2 = _interopRequireDefault(_trendingitemview);

exports['default'] = Backbone.View.extend({
  template: JST.trending,

  tagName: 'section',

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      var view = new _trendingitemview2['default']({
        model: child
      });
      this.$('.trending-box').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
  
});

require.register("views/userhomeview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _listview = require('./listview');

var _listview2 = _interopRequireDefault(_listview);

var _friendlistview = require('./friendlistview');

var _friendlistview2 = _interopRequireDefault(_friendlistview);

var _friendview = require('./friendview');

var _friendview2 = _interopRequireDefault(_friendview);

var _createview = require('./createview');

var _createview2 = _interopRequireDefault(_createview);

var _giftview = require('./giftview');

var _giftview2 = _interopRequireDefault(_giftview);

var _rendersearchview = require('./rendersearchview');

var _rendersearchview2 = _interopRequireDefault(_rendersearchview);

exports['default'] = Backbone.View.extend({
  template: JST.home,

  events: {
    'click .app-title-user': 'search',
    'click .show-search': 'search',
    'click .show-list': 'renderList',
    'click .render-list': 'renderList',
    'click .show-create': 'createItem',
    'click .show-gifts': 'renderGifts'
  },

  initialize: function initialize() {
    this.model = Parse.User.current();
    console.log(this.model);
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
    this.renderFriends();
    this.renderList();
  },

  renderFriends: function renderFriends() {
    var view = new _friendlistview2['default']({ collection: this.model.attributes.friends });
    this.$('.drawer-friends').html(view.el);
  },

  search: function search() {
    var view = new _rendersearchview2['default']();
    this.$('.accordion-container').html(view.el);
  },

  renderList: function renderList() {
    var view = new _listview2['default']();
    this.$('.accordion-container').html(view.el);
  },

  createItem: function createItem() {
    var view = new _createview2['default']();
    this.$('.accordion-container').html(view.el);
  },

  renderGifts: function renderGifts() {
    var view = new _giftview2['default']();
    this.$('.accordion-container').html(view.el);
  }
});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map