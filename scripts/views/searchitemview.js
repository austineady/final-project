export default Backbone.View.extend({
  template: JST.searchitem,

  events: {
    'click .search-item-list-add': 'addToList'
  },

  tagName: 'li',

  className: 'search-item',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  addToList: function() {
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
