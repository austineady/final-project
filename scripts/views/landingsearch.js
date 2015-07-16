import SearchItemView from './searchitemview';

export default Backbone.View.extend({
  template: JST.landingsearch,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.products.map(function(child) {
      var view = new SearchItemView({
        model: child
      });
      this.$('.search-results-box').prepend(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
})
