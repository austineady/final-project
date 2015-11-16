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

var _viewsLibraryview = require('./views/libraryview');

var _viewsLibraryview2 = _interopRequireDefault(_viewsLibraryview);

var _viewsCreateview = require('./views/createview');

var _viewsCreateview2 = _interopRequireDefault(_viewsCreateview);

var _viewsGiftview = require('./views/giftview');

var _viewsGiftview2 = _interopRequireDefault(_viewsGiftview);

var _viewsRenderfeedview = require('./views/renderfeedview');

var _viewsRenderfeedview2 = _interopRequireDefault(_viewsRenderfeedview);

var _viewsListview = require('./views/listview');

var _viewsListview2 = _interopRequireDefault(_viewsListview);

var _modelsProductmodel = require('./models/productmodel');

var _modelsUsermodel = require('./models/usermodel');

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

  initialize: function initialize() {
    Parse.initialize('yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO', 'ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg');
    Handlebars.registerHelper('moment', function (date) {
      return moment(date).fromNow();
    });
    toastr.options = {
      'closeButton': false,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-bottom-right',
      'preventDuplicates': false,
      'onclick': null,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    };
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
    $('#app').html(view.el);
  },

  userHome: function userHome() {
    var view = new _viewsUserhomeview2['default']();
    $('#app').html(view.el);
  }
});

var router = new Router();

exports['default'] = router;
module.exports = exports['default'];
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

require.register("views/adventureitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _searchmodalview = require('./searchmodalview');

var _searchmodalview2 = _interopRequireDefault(_searchmodalview);

exports['default'] = Backbone.View.extend({
  template: JST.adventureitem,

  events: {
    'click .adventure-item': 'showItem'
  },

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

require.register("views/adventureview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _adventureitemview = require('./adventureitemview');

var _adventureitemview2 = _interopRequireDefault(_adventureitemview);

exports['default'] = Backbone.View.extend({
  template: JST.adventure,

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
      var view = new _adventureitemview2['default']({
        model: child
      });
      this.$('.adventure-list').append(view.el);
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

require.register("views/categoryitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _subcatview = require('./subcatview');

var _subcatview2 = _interopRequireDefault(_subcatview);

exports['default'] = Backbone.View.extend({
  template: JST.categoryitem,

  events: {
    'click .library-category': 'activateCategory'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  activateCategory: function activateCategory() {
    $('.subcat-box').removeClass('subcat-box-inactive');
    var categoryName = this.model.categoryId;
    var category = this.$('.category-' + categoryName);
    if (category.hasClass('category-enabled')) {
      $('.library-category').removeClass('category-disabled');
      $('.library-category').removeClass('category-enabled');
      $('.category-list').removeClass('category-list-active');
      $('.subcat-box').html('');
      $('.subcat-product-box').html('');
    } else {
      $('.library-category').addClass('category-disabled');
      category.removeClass('category-disabled');
      category.addClass('category-enabled');
      $('.category-list').addClass('category-list-active');
      this.showCategory();
    }
  },

  showCategory: function showCategory(e) {
    $('.subcat-box').html('');
    $('.subcat-product-box').html('');
    var id = this.model.categoryId;
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/categories(id=' + id + ')?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=subCategories',
      success: (function (data) {
        console.log(data);
        var view = new _subcatview2['default']({ collection: data });
        $('.subcat-box').html(view.el);
      }).bind(this),
      error: function error() {
        alert('No search results were found, please try again');
      }
    });
  }
});
module.exports = exports['default'];
  
});

require.register("views/connectedhomeview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _homeitemview = require('./homeitemview');

var _homeitemview2 = _interopRequireDefault(_homeitemview);

exports['default'] = Backbone.View.extend({
  template: JST.connectedhome,

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
      var view = new _homeitemview2['default']({
        model: child
      });
      this.$('.home-list').append(view.el);
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

require.register("views/create-user-view", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ajaxConfig = require('./../ajax-config');

var _ajaxConfig2 = _interopRequireDefault(_ajaxConfig);

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

exports['default'] = Backbone.View.extend({
  template: JST.newuser,

  events: {
    'submit .new-user-form': 'createUser',
    'click .new-user-create-button': 'createUser'
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
    user.set('profilePicture', 'http://www.orthopaedicsurgeondirectory.com/admin/uploads/place_holder_Lancast.jpg'), user.set('friends', [{ 'profilePicture': 'http://www.orthopaedicsurgeondirectory.com/admin/uploads/place_holder_Lancast.jpg', 'username': 'austineady' }]);
    user.signUp(null, {
      success: function success(user) {
        Parse.User.become(user.sessionToken).then(function (user) {
          _router2['default'].navigate('', { trigger: true });
        });
      },
      error: function error(user, _error) {
        alert(user, _error);
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
    $('.side-nav').removeClass('side-nav-active');
    $('.show-create').addClass('side-nav-active');
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
    toastr.success('This item has been added to your list');
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
    toastr.success('This item has been added to your Gift List');
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
    if (this.collection.length !== 0) {
      this.renderChildren();
    }
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

  events: {
    'click .unfriend': 'unfriend'
  },

  initialize: function initialize() {
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
  },

  unfriend: function unfriend() {
    var user = Parse.User.current();
    var userList = user.attributes.friends;
    var friend = this.model.username;
    var friendList = _.filter(userList, function (index) {
      return index.username !== friend;
    });
    user.attributes.friends = friendList;
    user.save();
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

require.register("views/homeitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _searchmodalview = require('./searchmodalview');

var _searchmodalview2 = _interopRequireDefault(_searchmodalview);

exports['default'] = Backbone.View.extend({
  template: JST.homeitem,

  events: {
    'click .home-item': 'showItem'
  },

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
    'click .login-cancel': 'hideLogin',
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

  hideLogin: function hideLogin() {
    $('.login-box').addClass('login-hidden');
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

require.register("views/librarysearchitemview", function(exports, require, module){
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

require.register("views/librarysearchview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _librarysearchitemview = require('./librarysearchitemview');

var _librarysearchitemview2 = _interopRequireDefault(_librarysearchitemview);

exports['default'] = Backbone.View.extend({
  template: JST.librarysearch,

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
      var view = new _librarysearchitemview2['default']({
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

require.register("views/libraryview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _categoryitemview = require('./categoryitemview');

var _categoryitemview2 = _interopRequireDefault(_categoryitemview);

var _librarysearchview = require('./librarysearchview');

var _librarysearchview2 = _interopRequireDefault(_librarysearchview);

exports['default'] = Backbone.View.extend({
  template: JST.library,

  currentPage: 1,

  events: {
    'submit .library-search': 'search',
    'click .search-backwards': 'pageBackward',
    'click .search-forwards': 'pageForward'
  },

  initialize: function initialize() {
    this.collection = [{ categoryName: 'Applicances', categoryId: 'abcat0900000' }, { categoryName: 'TV & Home Theater', categoryId: 'abcat0100000' }, { categoryName: 'Computers & Tablets', categoryId: 'abcat0500000' }, { categoryName: 'Cell Phones', categoryId: 'abcat0800000' }, { categoryName: 'Cameras & Camcorders', categoryId: 'abcat0400000' }, { categoryName: 'Audio', categoryId: 'abcat0200000' }, { categoryName: 'Car Electronics & GPS', categoryId: 'abcat0300000' }, { categoryName: 'Video Games, Movies & Music', categoryId: 'pcmcat311300050017' }, { categoryName: 'Health, Fitness & Beauty', categoryId: 'pcmcat242800050021' }, { categoryName: 'Home & Office', categoryId: 'pcmcat312300050015' }, { categoryName: 'Wearable Technology', categoryId: 'pcmcat332000050000' }, { categoryName: 'By Brand', categoryId: 'pcmcat128500050004' }];
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
    this.activeNav();
  },

  activeNav: function activeNav() {
    $('.side-nav').removeClass('side-nav-active');
    $('.show-library').addClass('side-nav-active');
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      var view = new _categoryitemview2['default']({
        model: child
      });
      this.$('.category-list').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  },

  search: function search(e) {
    e.preventDefault();
    $('.subcat-box').addClass('subcat-box-inactive');
    var query = this.$('.home-search-bar').val();
    var search = query.replace(' ', '&search=');
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/products((search=' + search + '))?show=name,sku,details.name,image&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page=' + this.currentPage,
      success: (function (data) {
        var view = new _librarysearchview2['default']({ collection: data });
        this.$('.subcat-product-box').html(view.el);
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
    this.search(e);
  },

  pageBackward: function pageBackward(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber - 1;
    this.search(e);
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

var _searchmodalview = require('./searchmodalview');

var _searchmodalview2 = _interopRequireDefault(_searchmodalview);

exports['default'] = Backbone.View.extend({
  template: JST.listitem,

  events: {
    'click .grid-item': 'showModel'
  },

  className: 'list-item',

  isEditing: false,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  showModel: function showModel() {
    var view = new _searchmodalview2['default']({ model: this.model, collection: this.collection });
    $('.search-item-modal').html(view.el);
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
    this.render();
    this.listenTo(this.collection, 'change', this.render);
  },

  render: function render() {
    $('.side-nav').removeClass('side-nav-active');
    $('.show-list').addClass('side-nav-active');
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.fetch({
      success: (function (data) {
        this.collection = _.where(data.attributes.results, { owner: this.model.attributes.username });
        this.$el.html(this.template());
        this.renderChildren();
      }).bind(this),
      error: (function () {
        this.$el.html(this.template({ error: 'You have no items on your list!' }));
      }).bind(this)
    });
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      var view = new _listitemview2['default']({
        model: child,
        collection: this.collection
      });
      this.$('.user-list').append(view.el);
      return view;
    }).bind(this));
    this.activateGrid();
    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  },

  activateGrid: function activateGrid() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 230,
      gutter: 20,
      percentPosition: true
    });
    this.render();
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
    'click .modal-underlay': 'close',
    'click .reviews': 'renderReviews',
    'click .list-item-edit': 'editItem',
    'submit .list-item-edit-form': 'findItem',
    'click .list-item-edit-cancel': 'cancelEdit',
    'click .list-item-edit-save': 'findItem',
    'click .list-item-delete': 'deleteItem',
    'click .features-head': 'toggleFeatures',
    'click .shipping': 'toggleShipping',
    'click .image-list': 'showImage'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render(item) {
    $('.item-modal').removeClass('modal-disabled');
    $('.modal-underlay').removeClass('modal-disabled');
    this.$el.html(this.template(this.model));
    this.toggleFeatures();
  },

  close: function close() {
    $('.item-modal').addClass('modal-disabled');
    $('.modal-underlay').addClass('modal-disabled');
  },

  renderReviews: function renderReviews() {
    if ($('.reviews').hasClass('option-active')) {
      $('.reviews').removeClass('option-active');
      $('.option-box').html('');
      $('.option-box').removeClass('option-box-active');
    } else {
      $('.option-head').removeClass('option-active');
      $('.reviews').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      $.ajax({
        url: 'http://api.remix.bestbuy.com/v1/reviews(sku=' + this.model.sku + ')?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=id,sku,comment,reviewer.name,submissionTime,title,rating',
        success: (function (data) {
          var view = new _reviewview2['default']({ model: data });
          this.$('.option-box').html(view.el);
        }).bind(this),
        error: function error() {
          this.render();
        }
      });
    }
  },

  editItem: function editItem() {
    this.model.isEditing = true;
    this.render();
  },

  findItem: function findItem() {
    console.log(this.model);
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
    toastr.success('Your item has been saved');
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
      toastr.success('Your item has been deleted');
      this.close();
    }
  },

  cancelEdit: function cancelEdit() {
    this.model.isEditing = false;
    this.render(this.model);
  },

  toggleFeatures: function toggleFeatures() {
    var item = this.model;
    if ($('.features-head').hasClass('option-active')) {
      $('.features-head').removeClass('option-active');
      $('.option-box').removeClass('option-box-active');
      $('.option-box').html('');
    } else {
      $('.option-head').removeClass('option-active');
      $('.features-head').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      $('.option-box').html(JST.features({ model: item }));
    }
  },

  toggleShipping: function toggleShipping() {
    if ($('.shipping').hasClass('option-active')) {
      $('.shipping').removeClass('option-active');
      $('.option-box').removeClass('option-box-active');
      $('.option-box').html('');
    } else {
      $('.option-head').removeClass('option-active');
      $('.shipping').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      var sku = this.model.sku;
      $.ajax({
        url: 'http://api.remix.bestbuy.com/v1/products((sku=' + sku + '))?show=name,sku,freeShipping,inStoreAvailabilityText,onlineAvailabilityText,inStorePickup,orderable,homeDelivery,friendsAndFamilyPickup,inStoreAvailability,onlineAvailability,shipping.ground,shipping.nextDay,shipping.secondDay,shipping.vendorDelivery,shippingCost,specialOrder&format=json&apiKey=e25cp4dyr5m785e27wke6rt3',
        success: (function (data) {
          var item = data.products[0];
          this.$('.option-box').html(JST.shipping({ model: item }));
        }).bind(this),
        error: function error() {
          alert('No search results were found, please try again');
        }
      });
    }
  },

  showImage: function showImage(e) {
    var src = e.target.src;
    this.$('.item-picture-box').html(JST.itemimage({ model: src }));
  }
});
module.exports = exports['default'];
  
});

require.register("views/renderfeedview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _trendingview = require('./trendingview');

var _trendingview2 = _interopRequireDefault(_trendingview);

var _connectedhomeview = require('./connectedhomeview');

var _connectedhomeview2 = _interopRequireDefault(_connectedhomeview);

var _adventureview = require('./adventureview');

var _adventureview2 = _interopRequireDefault(_adventureview);

exports['default'] = Backbone.View.extend({
  template: JST.feed,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.trending();
    this.activeNav();
    this.connectedHome();
    this.activeAdventurer();
  },

  trending: function trending() {
    $.ajax({
      url: 'https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/mostViewed?apiKey=e25cp4dyr5m785e27wke6rt3&show=largeImage,largeFrontImage',
      dataType: 'jsonp',
      success: function success(data) {
        var trending = new _trendingview2['default']({ collection: data.results });
        $('.trending-list').html(trending.el);
      },
      error: function error(object, _error) {
        console.log(object, _error);
        toastr.error('No search results were found, please refresh the page');
      }
    });
  },

  activeNav: function activeNav() {
    this.$('.side-nav').removeClass('side-nav-active');
    this.$('.show-search').addClass('side-nav-active');
  },

  connectedHome: function connectedHome() {
    $.ajax({
      url: 'https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/connectedHome?apiKey=e25cp4dyr5m785e27wke6rt3',
      dataType: 'jsonp',
      success: function success(data) {
        var trending = new _connectedhomeview2['default']({ collection: data.results });
        $('.connected-home').html(trending.el);
      },
      error: function error(object, _error2) {
        console.log(object, _error2);
        toastr.error('No search results were found for Connected Home, please refresh the page');
      }
    });
  },

  activeAdventurer: function activeAdventurer() {
    $.ajax({
      url: 'https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/activeAdventurer?apiKey=e25cp4dyr5m785e27wke6rt3',
      dataType: 'jsonp',
      success: function success(data) {
        console.log(data);
        var view = new _adventureview2['default']({ collection: data.results });
        $('.active-adventurer').html(view.el);
      },
      error: function error(object, _error3) {
        console.log(object, _error3);
        toastr.error('No search results were found for Active Adventurer, please refresh the page');
      }
    });
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
      url: 'http://api.remix.bestbuy.com/v1/products((search=' + search + '))?show=name,sku,image,salePrice&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page=' + this.currentPage,
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
    'click .modal-underlay': 'close',
    'click .reviews': 'renderReviews',
    'click .features-head': 'toggleFeatures',
    'click .shipping': 'toggleShipping',
    'click .image-list': 'showImage'
  },

  initialize: function initialize() {
    console.log(this.model);
    this.findItems();
  },

  render: function render(item) {
    this.$el.html(this.template(item));
    this.toggleFeatures();
  },

  findItems: function findItems() {
    var sku = this.model.sku;
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/products((sku=' + sku + '))?show=name,sku,details.name,includedItemList.includedItem,customerTopRated,bestSellingRank,onSale,regularPrice,priceUpdateDate,alternateViewsImage,angleImage,spin360Url,largeFrontImage,largeImage,freeShipping,inStoreAvailabilityText,onlineAvailabilityText,inStorePickup,orderable,salePrice,url,accessoriesImage,alternateViewsImage,image,backViewImage,leftViewImage,rightViewImage,thumbnailImage,topViewImage,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3',
      success: (function (data) {
        $('.search-item-modal').removeClass('search-modal-disabled');
        $('.modal-underlay').removeClass('search-modal-disabled');
        this.model = data.products[0];
        console.log(this.model);
        this.render(this.model);
      }).bind(this),
      error: function error() {
        alert('No search results were found, please try again');
      }
    });
  },

  close: function close() {
    $('.search-item-modal').addClass('search-modal-disabled');
    $('.modal-underlay').addClass('search-modal-disabled');
  },

  renderReviews: function renderReviews() {
    if ($('.reviews').hasClass('option-active')) {
      $('.reviews').removeClass('option-active');
      $('.option-box').html('');
      $('.option-box').removeClass('option-box-active');
    } else {
      $('.option-head').removeClass('option-active');
      $('.reviews').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      $.ajax({
        url: 'http://api.remix.bestbuy.com/v1/reviews(sku=' + this.model.sku + ')?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=id,sku,comment,reviewer.name,submissionTime,title,rating',
        success: (function (data) {
          var view = new _reviewview2['default']({ model: data });
          this.$('.option-box').html(view.el);
        }).bind(this),
        error: function error() {
          this.render();
        }
      });
    }
  },

  addToList: function addToList() {
    var user = Parse.User.current();
    console.log(user);
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
      owner: user.attributes.username,
      details: this.model.details,
      alternateViewsImage: this.model.alternateViewsImage,
      bestSellingRank: this.model.bestSellingRank,
      customerTopRated: this.model.customerTopRated,
      freeShipping: this.model.freeShipping,
      inStoreAvailabilityText: this.model.inStoreAvailabilityText,
      inStorePickup: this.model.inStorePickup,
      includedItemList: this.model.includedItemList,
      onSale: this.model.onSale,
      onlineAvailabilityText: this.model.onlineAvailabilityText,
      orderable: this.model.orderable,
      priceUpdateDate: this.model.priceUpdateDate,
      spin360Url: this.model.spin360Url,
      largeFrontImage: this.model.largeFrontImage,
      angleImage: this.model.angleImage
    }, {
      success: function success(product) {
        toastr.success('This item is now on your list');
      },
      error: function error(product, _error) {
        toastr.error('There was a problem adding this item to your list');
      }
    });
  },

  toggleFeatures: function toggleFeatures() {
    var item = this.model;
    if ($('.features-head').hasClass('option-active')) {
      $('.features-head').removeClass('option-active');
      $('.option-box').removeClass('option-box-active');
      $('.option-box').html('');
    } else {
      $('.option-head').removeClass('option-active');
      $('.features-head').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      $('.option-box').html(JST.features({ model: item }));
    }
  },

  toggleShipping: function toggleShipping() {
    if ($('.shipping').hasClass('option-active')) {
      $('.shipping').removeClass('option-active');
      $('.option-box').removeClass('option-box-active');
      $('.option-box').html('');
    } else {
      $('.option-head').removeClass('option-active');
      $('.shipping').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      var sku = this.model.sku;
      $.ajax({
        url: 'http://api.remix.bestbuy.com/v1/products((sku=' + sku + '))?show=name,sku,freeShipping,inStoreAvailabilityText,onlineAvailabilityText,inStorePickup,orderable,homeDelivery,friendsAndFamilyPickup,inStoreAvailability,onlineAvailability,shipping.ground,shipping.nextDay,shipping.secondDay,shipping.vendorDelivery,shippingCost,specialOrder&format=json&apiKey=e25cp4dyr5m785e27wke6rt3',
        success: (function (data) {
          var item = data.products[0];
          this.$('.option-box').html(JST.shipping({ model: item }));
        }).bind(this),
        error: function error() {
          alert('No search results were found, please try again');
        }
      });
    }
  },

  showImage: function showImage(e) {
    var src = e.target.src;
    this.$('.item-picture-box').html(JST.itemimage({ model: src }));
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

require.register("views/subcatitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _subcatproductview = require('./subcatproductview');

var _subcatproductview2 = _interopRequireDefault(_subcatproductview);

exports['default'] = Backbone.View.extend({
  template: JST.subcatitem,

  currentPage: 1,

  events: {
    'click .subcategory': 'activate'
  },

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  activate: function activate() {
    var categoryName = this.model.id;
    var category = this.$('.subcat-' + categoryName);
    if (category.hasClass('category-enabled')) {
      $('.subcategory').removeClass('category-disabled');
      $('.subcategory').removeClass('category-enabled');
      $('.subcat-box').removeClass('subcat-box-active');
      $('.subcat-product-box').html('');
    } else {
      $('.subcategory').addClass('category-disabled');
      category.removeClass('category-disabled');
      category.addClass('category-enabled');
      $('.subcat-box').addClass('subcat-box-active');
      this.loadProducts();
    }
  },

  loadProducts: function loadProducts() {
    this.$('.subcat-product-box').html('');
    var view = new _subcatproductview2['default']({ model: this.model });
    $('.subcat-product-box').html(view.el);
  }
});
module.exports = exports['default'];
  
});

require.register("views/subcatproductitemview", function(exports, require, module){
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

require.register("views/subcatproductview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _subcatproductitemview = require('./subcatproductitemview');

var _subcatproductitemview2 = _interopRequireDefault(_subcatproductitemview);

exports['default'] = Backbone.View.extend({
  template: JST.subcatproduct,

  currentPage: 1,

  events: {
    'click .search-backwards': 'pageBackward',
    'click .search-forwards': 'pageForward'
  },

  initialize: function initialize() {
    this.loadProducts();
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      var view = new _subcatproductitemview2['default']({
        model: child
      });
      this.$('.subcat-product-list').append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  },

  loadProducts: function loadProducts() {
    var id = this.model.id;
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/products(categoryPath.id=' + id + ')?show=name,sku,image,salePrice,&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page=' + this.currentPage,
      success: (function (data) {
        this.collection = data.products;
        this.render();
      }).bind(this),
      error: function error(object, _error) {
        console.log(object, _error);
      }
    });
  },

  pageForward: function pageForward() {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber + 1;
    this.loadProducts();
  },

  pageBackward: function pageBackward() {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber - 1;
    this.loadProducts();
  }
});
module.exports = exports['default'];
  
});

require.register("views/subcatview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _subcatitemview = require('./subcatitemview');

var _subcatitemview2 = _interopRequireDefault(_subcatitemview);

exports['default'] = Backbone.View.extend({
  template: JST.subcat,

  initialize: function initialize() {
    this.collection = this.collection.categories[0].subCategories;
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
      var view = new _subcatitemview2['default']({
        model: child
      });
      this.$('.subcategory-list').append(view.el);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _searchmodalview = require('./searchmodalview');

var _searchmodalview2 = _interopRequireDefault(_searchmodalview);

exports['default'] = Backbone.View.extend({
  template: JST.trendingitem,

  events: {
    'click .trending-item': 'showItem'
  },

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

  // addToList: function() {
  //   var user = Parse.User.current();
  //   var Product = Parse.Object.extend('Product');
  //   var product = new Product();
  //   product.save({
  //     color: '',
  //     features: [],
  //     manufacturer: '',
  //     customerReviewAverage: this.model.customerReviews.averageScore,
  //     image: this.model.images.standard,
  //     backViewImage: '',
  //     leftViewImage: '',
  //     rightViewImage: '',
  //     topViewImage: '',
  //     thumbnailImage: '',
  //     url: this.model.links.product,
  //     name: this.model.names.title,
  //     salePrice: this.model.prices.current,
  //     shortDescription: this.model.descriptions.short,
  //     sku: Number(this.model.sku),
  //     owner: user.attributes.username
  //   });
  //   document.location.reload(true);
  //   /*user.attributes.list.push(this.model);
  //   console.log(user.attributes.list);
  //   user.save();*/
  // },

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

  className: 'trending-container',

  currentItem: 0,

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    this.renderChildren();
    this.startAnimation();
    setInterval((function () {
      this.startAnimation();
    }).bind(this), 7000);
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
  },

  startAnimation: function startAnimation() {
    var sku = this.collection[this.currentItem].sku;
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/products((sku=' + sku + '))?show=name,sku,largeFrontImage,alternateViewsImage,angleImage,image,largeImage&format=json&apiKey=e25cp4dyr5m785e27wke6rt3',
      success: function success(data) {
        console.log(data);
        $('.hot-box').html(JST.feedimage({ model: data.products[0] }));
      },
      error: function error() {
        alert('No search results were found, please try again');
      }
    });
    if (this.currentItem === 9) {
      console.log('hi');
      this.currentItem = 0;
    } else {
      this.currentItem = this.currentItem + 1;
    }
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

var _renderfeedview = require('./renderfeedview');

var _renderfeedview2 = _interopRequireDefault(_renderfeedview);

var _libraryview = require('./libraryview');

var _libraryview2 = _interopRequireDefault(_libraryview);

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

var _userslistview = require('./userslistview');

var _userslistview2 = _interopRequireDefault(_userslistview);

exports['default'] = Backbone.View.extend({
  template: JST.home,

  events: {
    'click .app-title-user': 'search',
    'click .show-search': 'search',
    'click .show-list': 'renderList',
    'click .render-list': 'renderList',
    'click .show-create': 'createItem',
    'click .show-gifts': 'renderGifts',
    'click .show-library': 'renderLibrary',
    'click .menu-drawer-icon': 'openDrawer',
    'click .drawer-modal': 'closeDrawer',
    'click .log-out': 'logOut'
  },

  initialize: function initialize() {
    this.model = Parse.User.current();
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
    this.renderFriends();
    this.renderUsers();
    this.search();
  },

  renderFriends: function renderFriends() {
    var view = new _friendlistview2['default']({ collection: this.model.attributes.friends });
    this.$('.drawer-friends').html(view.el);
  },

  renderUsers: function renderUsers() {
    var view = new _userslistview2['default']();
    this.$('.users-list').html(view.el);
  },

  search: function search() {
    // router.navigate('feed', {trigger: true});
    var view = new _renderfeedview2['default']();
    this.$('.accordion-container').html(view.el);
  },

  renderList: function renderList() {
    // router.navigate('list', {trigger: true});
    var view = new _listview2['default']();
    this.$('.accordion-container').html(view.el);
  },

  createItem: function createItem() {
    // router.navigate('create', {trigger: true});
    var view = new _createview2['default']();
    this.$('.accordion-container').html(view.el);
  },

  renderGifts: function renderGifts() {
    // router.navigate('gifts', {trigger: true});
    var view = new _giftview2['default']();
    this.$('.accordion-container').html(view.el);
  },

  renderLibrary: function renderLibrary() {
    // router.navigate('library', {trigger: true});
    var view = new _libraryview2['default']();
    this.$('.accordion-container').html(view.el);
  },

  openDrawer: function openDrawer() {
    $('.drawer-content').removeClass('drawer-hidden');
    $('.drawer-modal').removeClass('drawer-hidden');
  },

  closeDrawer: function closeDrawer() {
    $('.drawer-content').addClass('drawer-hidden');
    $('.drawer-modal').addClass('drawer-hidden');
  },

  logOut: function logOut() {
    Parse.User.logOut();
    document.location.reload(true);
  }
});
module.exports = exports['default'];
  
});

require.register("views/userslistview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.userslist,

  events: {
    'click .user-list-name': 'addFriend'
  },

  initialize: function initialize() {
    this.findUsers();
  },

  render: function render() {
    this.$el.html(this.template(this.collection));
  },

  findUsers: function findUsers() {
    var query = new Parse.Query(Parse.User);
    query.equalTo('user', true);
    query.find({
      success: (function (users) {
        this.collection = users;
        this.render();
      }).bind(this)
    });
  },

  addFriend: function addFriend(e) {
    var username = e.target.textContent;
    var user = Parse.User.current();
    if (user.attributes.username !== username) {
      var userList = user.attributes.friends;
      userList.push({ username: username });
      user.save();
      toastr.success(username + ' has been added to your Friend List');
    } else {
      toastr.warning('You cannot add yourself, silly');
    }
  }
});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map