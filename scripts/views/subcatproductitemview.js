export default Backbone.View.extend({
  template: JST.subcatproductitem,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  }
})
