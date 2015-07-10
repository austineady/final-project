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

var _modelsProductmodel = require('./models/productmodel');

var _modelsUsermodel = require('./models/usermodel');

//import ajaxconfig from './ajax-config';

//best buy: e25cp4dyr5m785e27wke6rt3

var Router = Backbone.Router.extend({
  routes: {
    '': 'landing',
    'users/create': 'newUser',
    'users/login': 'UserLogin'
  },

  initialize: function initialize() {
    Parse.initialize('yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO', 'ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg');
  },

  landing: function landing() {
    if (Parse.User.current()) {
      this.userHome();
      console.log('hi');
    } else {
      var users = new _modelsUsermodel.UserCollection();
      var view = new _viewsLandingview2['default']({ collection: users });
      $('#app').prepend(JST.header);
      $('.app-header').append(view.el);
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

require.register("views/landingview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _router = require('./../router');

var _router2 = _interopRequireDefault(_router);

exports['default'] = Backbone.View.extend({
  template: JST.landing,

  events: {
    'submit .landing-form': 'login',
    'click .new-user-button': 'newUser'
  },

  initialize: function initialize() {
    Parse.initialize('yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO', 'ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg');
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
  },

  login: function login() {
    var username = this.$('.user-username').val();
    var password = this.$('.user-password').val();
    console.log(username, password);
    Parse.User.logIn(username, password, {
      success: function success(user) {
        console.log(user);
        Parse.User.become(user.sessionToken).then(function (user) {
          _router2['default'].navigate('');
        });
      },
      error: function error(user) {
        alert('Login Failed: Username or Password Incorrect');
      }
    });
  },

  newUser: function newUser() {
    _router2['default'].navigate('/users/create', { trigger: true });
  }
});
module.exports = exports['default'];

});

require.register("views/listitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.listitem,

  tagName: 'li',
  className: '.list-item',

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  }
});
module.exports = exports['default'];

});

require.register("views/searchitemview", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST.searchitem,

  events: {
    'click .search-item-list-add': 'addToList'
  },

  tagName: 'li',

  className: 'search-item',

  initialize: function initialize() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model));
  },

  addToList: function addToList() {
    console.log(this.model);
    var user = Parse.User.current();
    console.log(user);
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.save({
      color: this.model.color,
      customerReviewAverage: this.model.customerReviewAverage,
      features: this.model.features,
      image: this.model.image,
      name: this.model.name,
      salePrice: this.model.salePrice,
      shortDescription: this.model.shortDescription,
      sku: this.model.sku,
      owner: user.attributes.username
    });
    /*user.attributes.list.push(this.model);
    console.log(user.attributes.list);
    user.save();*/
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
    this.$('.search-results-box').accordion({
      active: false,
      animate: 200,
      heightStyle: 'content',
      collapsible: true
    });
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
      this.$('.search-results-box').append(view.el);
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

var _listitemview = require('./listitemview');

var _listitemview2 = _interopRequireDefault(_listitemview);

var _searchview = require('./searchview');

var _searchview2 = _interopRequireDefault(_searchview);

exports['default'] = Backbone.View.extend({
  template: JST.home,

  events: {
    'click .item-list-add': 'listAdd',
    'click .app-title-user': 'search',
    'submit .plus-form': 'saveEntry',
    'submit .home-search-form': 'showResults'
  },

  initialize: function initialize() {
    this.model = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.fetch().then((function (data) {
      var list = _.where(data.attributes.results, { owner: this.model.attributes.username });
      this.render(list);
      this.$('#accordion').accordion({
        active: 1,
        animate: 200,
        heightStyle: 'content',
        collapsible: true
      });
      this.$('.user-list').accordion({
        header: 'paper-shadow',
        active: 2,
        animate: 200,
        heightStyle: 'content',
        collapsible: true
      });
    }).bind(this));
    /*this.$('.home-search-bar').autocomplete({
      source: this.model.attributes.list,
      position: { my: "left top", at: "left bottom", collision: "none" }
    });*/
  },

  render: function render(list) {
    this.$el.html(this.template(this.model));
    this.renderChildren(list);
  },

  renderChildren: function renderChildren(list) {
    _.invoke(this.children || [], 'remove');

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
  },

  listAdd: function listAdd() {
    this.$('#accordion').accordion({
      active: 2
    });
  },

  search: function search() {
    this.$('#accordion').accordion({
      active: 0
    });
  },

  saveEntry: function saveEntry() {
    var url = this.$('.plus-url').val();
    var title = this.$('.plus-name').val();
    var description = this.$('.plus-description').val();
    var picture = this.$('.plus-picture').val();
    //make this into a model and save it onto the user's collection
  },

  showResults: function showResults(e) {
    e.preventDefault();
    var query = this.$('.home-search-bar').val();
    var search = query.replace(' ', '&search=');
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/products((search=' + search + '))?show=name,sku,salePrice,image,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3',
      success: (function (data) {
        var view = new _searchview2['default']({ collection: data });
        this.$('.search-results').html(view.el);
      }).bind(this),
      error: function error() {
        alert('No search results were found, please try again');
      }
    });
  }
});
module.exports = exports['default'];

});

//# sourceMappingURL=app.js.map
