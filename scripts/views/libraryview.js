import SubCatView from './subcatview';

export default Backbone.View.extend({
  template: JST.library,

  events: {
    'click .library-category': 'showCategory'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.activeNav();
  },

  activeNav: function() {
    this.$('.side-nav').removeClass('side-nav-active');
    this.$('.show-library').addClass('side-nav-active');
  },

  showCategory: function(e) {
    var category = e.target.textContent;
    $(e.target).addClass('subcat-active');
    var search = category.replace(' ', '%20');
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/categories(name='+search+')?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=subCategories',
      success: function (data) {
        var view = new SubCatView({collection: data});
        this.$('.subcat-box').html(view.el);
      }.bind(this),
       error: function(){
        alert('No search results were found, please try again');
      }
    });
  }
})
