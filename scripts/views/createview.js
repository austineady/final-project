export default Backbone.View.extend({
  template: JST.createitem,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.activeNav();
  },

  activeNav: function() {
    this.$('.side-nav').removeClass('side-nav-active');
    this.$('.show-create').addClass('side-nav-active');
  }
})
