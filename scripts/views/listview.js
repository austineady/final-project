import ListItemView from './listitemview';

export default Backbone.View.extend({
  template: JST.renderlist,

  initialize: function() {
    this.model = Parse.User.current();
    this.render();
    this.listenTo(this.collection, 'change', this.render);
  },

  render: function() {
    $('.side-nav').removeClass('side-nav-active');
    $('.show-list').addClass('side-nav-active');
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.fetch({
      success: function(data) {
        this.collection = _.where(data.attributes.results, {owner: this.model.attributes.username});
        this.$el.html(this.template());
        this.renderChildren();
      }.bind(this),
      error: function() {
        this.$el.html(this.template({error: "You have no items on your list!"}))
      }.bind(this)
    });
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new ListItemView({
        model: child,
        collection: this.collection
      });
      this.$('.user-list').append(view.el);
      return view;
    }.bind(this));
    this.activateGrid();
    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  },

  activateGrid: function() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 230,
      gutter: 20,
      percentPosition: true
    });
    this.render();
  }
})
