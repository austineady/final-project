import FriendView from './friendview';

export default Backbone.View.extend({
  template: JST.friendlistitem,

  className: 'friend-item',

  events: {
    'click .friend-box': 'showFriend'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  showFriend: function() {
    var that = this;
    var userUsername = this.model.username;
    var user = this.model;
    var Product = Parse.Object.extend("Product");
    var query = new Parse.Query(Product);
    query.equalTo("owner", userUsername);
    query.find({
      success: function(results) {
        var view = new FriendView({model: user, collection: results});
        // the .accordion-container does not exist inside this view instance's
        // el, so use reguarl jQuery instead of this.el's scope
        $('.accordion-container').html(view.el);
      },
      error: function(error) {
    alert("This user's account is down");
  }
  });
  }
})
