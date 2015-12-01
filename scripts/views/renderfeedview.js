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
    this.connectedHome();
    this.activeAdventurer();
  },

  trending: function() {
    $.ajax({
      url: "https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/mostViewed?apiKey=e25cp4dyr5m785e27wke6rt3&show=largeImage,largeFrontImage",
      dataType: 'jsonp',
      success: function (data) {
        var trending = new TrendingView({collection: data.results});
        $('.trending-list').html(trending.el);
      },
       error: function(object, error){
        console.log(object, error);
        toastr.error("No search results were found, please refresh the page");
      }
    });
  },

  connectedHome: function() {
    $.ajax({
      url: "https://jsonp.afeld.me/?callback=?&url=http://api.bestbuy.com/beta/products/connectedHome?apiKey=e25cp4dyr5m785e27wke6rt3",
      dataType: 'jsonp',
      success: function (data) {
        var trending = new ConnectedHomeView({collection: data.results});
        $('.connected-home').html(trending.el);
      },
       error: function(object, error){
        console.log(object, error);
        toastr.error("No search results were found for Connected Home, please refresh the page");
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
        toastr.error("No search results were found for Active Adventurer, please refresh the page");
      }
    });
  }
})
