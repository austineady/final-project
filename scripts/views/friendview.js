import FriendItemView from './frienditemview';

export default Backbone.View.extend({
  template: JST.friend,

  className: 'friend-profile',

  initialize: function() {
    console.log('friend is', this.model);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
    this.renderChildren();
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');

  this.children = this.collection.map(function(child) {
    var view = new FriendItemView({
      model: child
    });
    this.$('.friend-items').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
}
});
