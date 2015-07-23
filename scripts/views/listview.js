import ListItemView from './listitemview';

export default Backbone.View.extend({
  template: JST.renderlist,

  initialize: function() {
    this.model = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.fetch({
      success: function(data) {
        console.log(data);
        var list = _.where(data.attributes.results, {owner: this.model.attributes.username});
        this.render(list);
      }.bind(this),
      error: function(error) {
        this.render();
      }.bind(this)
    });
  },

  render: function(list) {
    if(list) {
      this.$el.html(this.template());
      $('.side-nav').removeClass('side-nav-active');
      $('.show-list').addClass('side-nav-active');
      this.renderChildren(list);
    } else {
      this.$el.html(this.template({error: "You have no items on your list!"}))
    }
  },

  renderChildren: function(list){
    _.invoke(this.children || [], 'remove');

    console.log(list);

    this.children = list.map(function(child) {
      var view = new ListItemView({
        model: child
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
  }
})
