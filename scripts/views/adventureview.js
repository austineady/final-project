import AdventureItemView from './adventureitemview';

export default Backbone.View.extend({
  template: JST.adventure,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');

  this.children = this.collection.map(function(child) {
    var view = new AdventureItemView({
      model: child
    });
    this.$('.adventure-list').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
}
})
