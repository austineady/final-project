import FriendListItemView from './friendlistitem';

export default Backbone.View.extend({
  template: JST.friendlist,

  initialize: function() {
    console.log(this.collection);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');

  this.children = this.collection.map(function(child) {
    var view = new FriendListItemView({
      model: child
    });
    this.$('.friend-list').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
}
})
