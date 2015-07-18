import SubCatProductView from './subcatproductview';

export default Backbone.View.extend({
  template: JST.subcatitem,

  currentPage: 1,

  events: {
    'click .subcategory': 'loadProducts',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  loadProducts: function() {
    this.$('.subcat-product-box').html('');
    var view = new SubCatProductView({model: this.model});
    $('.subcat-product-box').html(view.el);
  }
})
