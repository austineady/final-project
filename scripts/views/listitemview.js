export default Backbone.View.extend({
  template: JST.listitem,

  tagName: 'li',
  className: '.list-item',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  }
});
