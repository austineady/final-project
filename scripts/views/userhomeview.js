export default Backbone.View.extend({
  template: JST.home,

  initialize: function() {
    this.render();
    this.$(".home-footer").draggable({
      axis: 'y'
    });
  },

  render: function() {
    this.$el.html(this.template());
  }
});
