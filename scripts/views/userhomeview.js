import RenderSearchView from './rendersearchview';
import ListView from './listview';
import FriendListView from './friendlistview';
import FriendView from './friendview';
import CreateView from './createview';

export default Backbone.View.extend({
  template: JST.home,

  events: {
    'click .app-title-user': 'search',
    'click .show-search': 'search',
    'click .show-list': 'renderList',
    'click .render-list': 'renderList',
    'click .show-create': 'createItem'
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
  },

  createItem: function() {
    var view = new CreateView();
    this.$('.accordion-container').html(view.el);
  }
});
