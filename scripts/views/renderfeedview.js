import TrendingView from './trendingview';
import ConnectedHomeView from './connectedhomeview';
import AdventureView from './adventureview';

export default Backbone.View.extend({
  template: JST.feed,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.trending();
    this.activeNav();
    this.connectedHome();
    this.activeAdventurer();
  },

  trending: function() {
    $.ajax({
      url: "https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/mostViewed?apiKey=e25cp4dyr5m785e27wke6rt3&show=largeImage,largeFrontImage",
      dataType: 'jsonp',
      success: function (data) {
        console.log(data);
        var trending = new TrendingView({collection: data.results});
        $('.trending-list').html(trending.el);
      },
       error: function(object, error){
        console.log(object, error);
        console.log('No search results were found, please try again');
      }
    });
  },

  activeNav: function() {
    this.$('.side-nav').removeClass('side-nav-active');
    this.$('.show-search').addClass('side-nav-active');
  },

  connectedHome: function() {
    $.ajax({
      url: "https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/connectedHome?apiKey=e25cp4dyr5m785e27wke6rt3",
      dataType: 'jsonp',
      success: function (data) {
        console.log(data);
        var trending = new ConnectedHomeView({collection: data.results});
        $('.connected-home').html(trending.el);
      },
       error: function(object, error){
        console.log(object, error);
        console.log('No search results were found, please try again');
      }
    });
  },

  activeAdventurer: function() {
    $.ajax({
      url: "https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/activeAdventurer?apiKey=e25cp4dyr5m785e27wke6rt3",
      dataType: 'jsonp',
      success: function (data) {
        console.log(data);
        var view = new AdventureView({collection: data.results});
        $('.active-adventurer').html(view.el);
      },
       error: function(object, error){
        console.log(object, error);
        console.log('No search results were found, please try again');
      }
    });
  }
})
