import SearchModalView from './searchmodalview';

export default Backbone.View.extend({
  template: JST.searchitem,

  events: {
    'click .search-item-list-add': 'addToList',
    'click .card': 'showItem'
  },

  opened: false,

  tagName: 'li',

  className: 'search-item',

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

  },

  showItem: function() {
    console.log('hi');
    var view = new SearchModalView({model: this.model});
    $('.search-item-modal').html(view.el);
  }

});
