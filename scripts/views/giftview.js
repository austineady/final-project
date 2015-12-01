import GiftItemView from './giftitemview';

export default Backbone.View.extend({
  template: JST.gift,

  initialize: function() {
    var user = Parse.User.current();
    var Activity = Parse.Object.extend('Activity');
    var activity = new Activity();
    activity.fetch().then(function(data) {
      var list = _.where(data.attributes.results, {user: user.attributes.username});
      this.render(list);
    }.bind(this));
  },

  render: function(list) {
    console.log(list);
    this.$el.html(this.template());
    this.renderChildren(list);
  },

  renderChildren: function(list){
  _.invoke(this.children || [], 'remove');

  this.children = list.map(function(child) {
    var view = new GiftItemView({
      model: child
    });
    this.$('.gift-list').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
},

})
