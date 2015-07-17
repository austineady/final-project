import SubCatProductView from './subcatproductview';

export default Backbone.View.extend({
  template: JST.subcat,

  events: {
    'click .subcategory': 'loadProducts'
  },

  initialize: function() {
    this.collection = this.collection.categories[0];
    console.log(this.collection);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection));
  },

  loadProducts: function(e) {
    this.$('.subcat-product-box').html('');
    var subCategory = e.target.textContent;
    var search = subCategory.replace(' ', '%20');
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/products(categoryPath.name='+search+')?show=customerReviewAverage,name,image,shortDescription,salePrice,&format=json&apiKey=e25cp4dyr5m785e27wke6rt3',
      success: function(data) {
        console.log(data);
        var view = new SubCatProductView({collection: data.products});
        this.$('.subcat-product-box').html(view.el);
      }.bind(this),
      error: function(object, error) {
        console.log(object, error);
      }
    });
  }
});
