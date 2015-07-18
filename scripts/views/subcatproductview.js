import SubCatProductItemView from './subcatproductitemview';

export default Backbone.View.extend({
  template: JST.subcatproduct,

  currentPage: 1,

  events: {
    'click .search-backwards': 'pageBackward',
    'click .search-forwards': 'pageForward'
  },

  initialize: function() {
    this.loadProducts();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');

  this.children = this.collection.map(function(child) {
    var view = new SubCatProductItemView({
      model: child
    });
    this.$('.subcat-product-list').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
},

loadProducts: function() {
  var id = this.model.id;
  $.ajax({
    url: 'http://api.remix.bestbuy.com/v1/products(categoryPath.id='+id+')?show=customerReviewAverage,name,image,shortDescription,salePrice,&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page='+this.currentPage,
    success: function(data) {
      this.collection = data.products;
      this.render();
    }.bind(this),
    error: function(object, error) {
      console.log(object, error);
    }
  });
},

  pageForward: function() {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber + 1;
    this.loadProducts();
  },

  pageBackward: function() {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber - 1;
    this.loadProducts();
  }
});
