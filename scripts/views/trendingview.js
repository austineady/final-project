import TrendingItemView from './trendingitemview';

export default Backbone.View.extend({
  template: JST.trending,

  tagName: 'section',

  className: 'trending-container',

  currentItem: 0,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
    this.startAnimation();
    setInterval(function() {
      this.startAnimation()
    }.bind(this), 7000);
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');

  this.children = this.collection.map(function(child) {
    var view = new TrendingItemView({
      model: child
    });
    this.$('.trending-box').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
},

  startAnimation: function() {
    var sku = this.collection[this.currentItem].sku;
    $.ajax({
      url: "http://api.remix.bestbuy.com/v1/products((sku="+sku+"))?show=name,sku,largeFrontImage,alternateViewsImage,angleImage,image,largeImage&format=json&apiKey=e25cp4dyr5m785e27wke6rt3",
      success: function (data) {
        console.log(data);
        $('.hot-box').html(JST.feedimage({model: data.products[0]}));
      },
       error: function(){
        alert('No search results were found, please try again');
      }
    });
    if(this.currentItem === 9) {
      console.log('hi');
      this.currentItem = 0;
    } else {
      this.currentItem = this.currentItem + 1;
    }
  }
});
