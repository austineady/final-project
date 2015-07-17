export default Backbone.View.extend({
  template: JST.library,

  events: {
    'click .category-game': 'showCategory'
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

  showCategory: function() {
    $.ajax({
      url: 'http://api.remix.bestbuy.com/v1/categories(id=pcmcat311300050017)?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=subCategories',
      success: function (data) {
        console.log(data);
      }.bind(this),
       error: function(){
        alert('No search results were found, please try again');
      }
    });
  }
})
