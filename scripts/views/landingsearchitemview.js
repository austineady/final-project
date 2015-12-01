import SearchModalView from './searchmodalview';

export default Backbone.View.extend({
  template: JST.landingsearchitem,

  events: {
    'click search-item': 'showModel'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  showModel: function() {
    var view = new SearchModalView({model: this.model, collection: this.collection});
    $('.search-item-modal').html(view.el);
  }
})
