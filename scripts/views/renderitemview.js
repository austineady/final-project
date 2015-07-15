export default Backbone.View.extend({
  template: JST.renderitem,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  }
})
