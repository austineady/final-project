export default Backbone.View.extend({
  template: JST.friendlistitem,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  }
})
