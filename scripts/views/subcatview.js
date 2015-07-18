import SubCatItemView from './subcatitemview';

export default Backbone.View.extend({
  template: JST.subcat,

  initialize: function() {
    this.collection = this.collection.categories[0].subCategories;
    console.log(this.collection);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');

  this.children = this.collection.map(function(child) {
    var view = new SubCatItemView({
      model: child
    });
    this.$('.subcategory-list').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
}
});
