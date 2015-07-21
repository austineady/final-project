import TrendingView from './trendingview';

export default Backbone.View.extend({
  template: JST.feed,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.trending();
    this.activeNav();
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
})
