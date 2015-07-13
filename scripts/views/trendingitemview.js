export default Backbone.View.extend({
  template: JST.trendingitem,

  events: {
    'click .trending-item-list-add': 'addToList'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  addToList: function() {
    var user = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    console.log(product);
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
    console.log(user);
    document.location.reload(true);
    /*user.attributes.list.push(this.model);
    console.log(user.attributes.list);
    user.save();*/
  }
})
