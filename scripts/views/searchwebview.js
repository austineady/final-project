import SearchItemWebView from './searchitemwebview';

export default Backbone.View.extend({
  template: JST.websearchresults,

  className: 'web-results-box',

  initialize: function() {
    console.log(this.collection);
    this.render();
    /*this.$('.search-results-box').accordion({
      active: false,
      animate: 200,
      heightStyle: 'content',
      collapsible: true,
    }); */
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.products.map(function(child) {
      var view = new SearchItemWebView({
        model: child
      });
      this.$('.search-results-box').append(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
