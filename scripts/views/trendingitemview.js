import SearchModalView from './searchmodalview';

export default Backbone.View.extend({
  template: JST.trendingitem,

  events: {
    'click .trending-item': 'showItem'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  showItem: function() {
    var view = new SearchModalView({model: this.model});
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

})
