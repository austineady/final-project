import router from './../router';
import SearchView from './searchview';

export default Backbone.View.extend({
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

  initialize: function() {
    Parse.initialize("yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO", "ui0H1gJk4r8HFVPQjsUVgwifyiMWNy4ZB5LEgYSg");
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  login: function() {
    // var username = String(this.$('.user-username').val());
    // var password = String(this.$('.user-password').val());
    //console.log(username, password);
    Parse.User.logIn(this.$('.user-username').val(), this.$('.user-password').val(), {
      success: function(user) {
        console.log(user);
        Parse.User.become(user.sessionToken).then(function(user) {
          document.location.reload(true);
        });
      },
      error: function(user) {
        alert("Login Failed: Username or Password Incorrect");
      }
    });
  },

  newUser: function() {
    router.navigate('/users/create', {trigger: true});
  },

  showLogin: function() {
    $('.login-box').removeClass('login-hidden');
  },

  showResults: function(e) {
    e.preventDefault();
    var query = this.$('.home-search-bar').val();
    var search = query.replace(' ', '&search=');
    $.ajax({
      url: "http://api.remix.bestbuy.com/v1/products((search="+search+"))?show=name,sku,salePrice,url,image,backViewImage,leftViewImage,rightViewImage,thumbnailImage,topViewImage,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page="+this.currentPage,
      success: function (data) {
        var view = new SearchView({collection: data});
        this.$('.search-results').html(view.el);
        if(data.currentPage === 1) {
          this.$('.search-backwards').removeClass('search-backwards');
        }
      }.bind(this),
       error: function(){
        alert('No search results were found, please try again');
      }
    });
  },

  pageForward: function(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber + 1;
    this.showResults(e);
  },

  pageBackward: function(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber - 1;
    this.showResults(e);
  }
});
