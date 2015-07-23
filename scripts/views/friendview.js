import FriendItemView from './frienditemview';

export default Backbone.View.extend({
  template: JST.friend,

  className: 'friend-profile',

  events: {
    'click .unfriend': 'unfriend'
  },

  initialize: function() {
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
},

  unfriend: function() {
    var user = Parse.User.current();
    var userList = user.attributes.friends;
    var friend = this.model.username;
    var friendList = _.filter(userList, function(index) {
      return index.username !== friend;
    });
    user.attributes.friends = friendList;
    user.save();
  }
});
