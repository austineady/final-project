import ListView from './listview';
import FriendListView from './friendlistview';
import FriendView from './friendview';
import CreateView from './createview';
import GiftView from './giftview';
import RenderFeedView from './renderfeedview';
import LibraryView from './libraryview';
import router from './../router';
import UsersListView from './userslistview';


export default Backbone.View.extend({
  template: JST.home,

  events: {
    'click .app-title-user': 'search',
    'click .show-search': 'search',
    'click .show-list': 'renderList',
    'click .render-list': 'renderList',
    'click .show-create': 'createItem',
    'click .show-gifts': 'renderGifts',
    'click .show-library': 'renderLibrary',
    'click .menu-drawer-icon': 'openDrawer',
    'click .drawer-modal': 'closeDrawer',
    'click .log-out': 'logOut'
  },

  initialize: function() {
    this.model = Parse.User.current();
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
    this.renderFriends();
    this.renderUsers();
    this.search();
  },

  renderFriends: function() {
    var view = new FriendListView({collection: this.model.attributes.friends});
    this.$('.drawer-friends').html(view.el);
  },

  renderUsers: function() {
    var view = new UsersListView();
    this.$('.users-list').html(view.el);
  },

  search: function() {
    // router.navigate('feed', {trigger: true});
    var view = new RenderFeedView();
    this.$('.accordion-container').html(view.el);
  },

  renderList: function() {
    // router.navigate('list', {trigger: true});
    var view = new ListView();
    this.$('.accordion-container').html(view.el);
  },

  createItem: function() {
    // router.navigate('create', {trigger: true});
    var view = new CreateView();
    this.$('.accordion-container').html(view.el);
  },

  renderGifts: function() {
    // router.navigate('gifts', {trigger: true});
    var view = new GiftView();
    this.$('.accordion-container').html(view.el);
  },

  renderLibrary: function() {
    // router.navigate('library', {trigger: true});
    var view = new LibraryView();
    this.$('.accordion-container').html(view.el);
  },

  openDrawer: function() {
    $('.drawer-content').removeClass('drawer-hidden');
    $('.drawer-modal').removeClass('drawer-hidden');
  },

  closeDrawer: function() {
    $('.drawer-content').addClass('drawer-hidden');
    $('.drawer-modal').addClass('drawer-hidden');
  },

  logOut: function() {
    Parse.User.logOut();
    document.location.reload(true);
  }
});
