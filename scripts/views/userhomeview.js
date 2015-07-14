import RenderSearchView from './rendersearchview';
import ListView from './listview';
import FriendListView from './friendlistview';
import FriendView from './friendview';

export default Backbone.View.extend({
  template: JST.home,

  events: {
    'click .app-title-user': 'search',
    'click .render-list': 'renderList'
    //'click .drawer-friend': 'showFriend'
  },

  initialize: function() {
    this.model = Parse.User.current();
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
    this.renderFriends();
    this.renderList();
  },

  renderFriends: function() {
    var view = new FriendListView({collection: this.model.attributes.friends});
    this.$('.drawer-friends').html(view.el);
  },

  search: function() {
    var view = new RenderSearchView();
    this.$('.accordion-container').html(view.el);
  },

  renderList: function() {
    var view = new ListView();
    this.$('.accordion-container').html(view.el);
  }

  // showFriend: function(e) {
  //   console.log(e.target.html);
  //   // var view = new FriendView();
  //   // this.$('.accordion-container').html(view.el);
  // }

});
