export default Backbone.View.extend({
  template: JST.userslist,

  events: {
    'click .user-list-name': 'addFriend'
  },

  initialize: function() {
    this.findUsers();
  },

  render: function() {
    this.$el.html(this.template(this.collection));
  },

  findUsers: function() {
    var query = new Parse.Query(Parse.User);
    query.equalTo("user", true);
    query.find({
      success: function(users) {
        this.collection = users;
        this.render();
      }.bind(this)
    });
  },

  addFriend: function(e) {
    var username = e.target.textContent;
    var user = Parse.User.current();
    if(user.attributes.username !== username) {
      var userList = user.attributes.friends;
      userList.push({username: username});
      user.save();
      toastr.success(username+" has been added to your Friend List");
    } else {
      toastr.warning("You cannot add yourself, silly");
    }
  }
});
