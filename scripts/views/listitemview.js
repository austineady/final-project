import ReviewView from './reviewview';
import ModalView from './modalview';

export default Backbone.View.extend({
  template: JST.listitem,

  events: {
    'click .list-card': 'showModel'
  },

  tagName: 'li',
  className: 'list-item',

  isEditing: false,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  showModel: function() {
    var view = new ModalView({model: this.model});
    $('.item-modal').html(view.el);
  }
});
