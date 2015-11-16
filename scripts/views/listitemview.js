import ReviewView from './reviewview';
import SearchModalView from './searchmodalview';

export default Backbone.View.extend({
  template: JST.listitem,

  events: {
    'click .grid-item': 'showModel'
  },

  className: 'list-item',

  isEditing: false,

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
});
