import ListView from './listview';
import FriendListView from './friendlistview';
import FriendView from './friendview';
import CreateView from './createview';
import GiftView from './giftview';
import RenderSearchView from './rendersearchview';
import LibraryView from './libraryview';


export default Backbone.View.extend({
  template: JST.home,

  events: {
    'click .app-title-user': 'search',
    'click .show-search': 'search',
    'click .show-list': 'renderList',
    'click .render-list': 'renderList',
    'click .show-create': 'createItem',
    'click .show-gifts': 'renderGifts',
    'click .show-library': 'renderLibrary'
  },

  initialize: function() {
    this.model = Parse.User.current();
    console.log(this.model);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
    this.renderFriends();
    this.search();
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
  },

  renderGifts: function() {
    var view = new GiftView();
    this.$('.accordion-container').html(view.el);
  },

  renderLibrary: function() {
    var view = new LibraryView();
    this.$('.accordion-container').html(view.el);
  }
});
