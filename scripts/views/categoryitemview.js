import SubCatView from './subcatview';

export default Backbone.View.extend({
  template: JST.categoryitem,

  events: {
    'click .library-category': 'activateCategory'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  activateCategory: function() {
    $('.subcat-box').removeClass('subcat-box-inactive');
    var categoryName = this.model.categoryId;
    var category = this.$('.category-'+categoryName);
    if(category.hasClass('category-enabled')) {
      $('.library-category').removeClass('category-disabled');
      $('.library-category').removeClass('category-enabled');
      $('.category-list').removeClass('category-list-active');
      $('.subcat-box').html('');
      $('.subcat-product-box').html('');
    } else {
      $('.library-category').addClass('category-disabled');
      category.removeClass('category-disabled');
      category.addClass('category-enabled');
      $('.category-list').addClass('category-list-active');
      this.showCategory();
    }
  },

  showCategory: function(e) {
    $('.subcat-box').html('');
    $('.subcat-product-box').html('');
    var id = this.model.categoryId;
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/categories(id='+id+')?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=subCategories',
      success: function (data) {
        console.log(data);
        var view = new SubCatView({collection: data});
        $('.subcat-box').html(view.el);
      }.bind(this),
       error: function(){
        alert('No search results were found, please try again');
      }
    });
  },
})
