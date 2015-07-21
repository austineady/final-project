import SearchModalView from './searchmodalview';

export default Backbone.View.extend({
  template: JST.adventureitem,

  events: {
    'click .adventure-item': 'showItem'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  showItem: function() {
    var view = new SearchModalView({model: this.model});
    $('.search-item-modal').html(view.el);
  }
})
