export default Backbone.View.extend({
  template: JST.friend,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
})
