import SubCatView from './subcatview';

export default Backbone.View.extend({
  template: JST.categoryitem,

  events: {
    'click .library-category': 'showCategory'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
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
