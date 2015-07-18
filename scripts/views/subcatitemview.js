import SubCatProductView from './subcatproductview';

export default Backbone.View.extend({
  template: JST.subcatitem,

  currentPage: 1,

  events: {
    'click .subcategory': 'activate',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  activate: function() {
    var categoryName = this.model.id;
    var category = this.$('.subcat-'+categoryName);
    if(category.hasClass('category-enabled')) {
      $('.subcategory').removeClass('category-disabled');
      $('.subcategory').removeClass('category-enabled');
      $('.subcat-box').removeClass('subcat-box-active');
      $('.subcat-product-box').html('');
    } else {
      $('.subcategory').addClass('category-disabled');
      category.removeClass('category-disabled');
      category.addClass('category-enabled');
      $('.subcat-box').addClass('subcat-box-active');
      this.loadProducts();
    }
  },

  loadProducts: function() {
    this.$('.subcat-product-box').html('');
    var view = new SubCatProductView({model: this.model});
    $('.subcat-product-box').html(view.el);
  }
})
