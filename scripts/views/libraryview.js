import CategoryItemView from './categoryitemview';

export default Backbone.View.extend({
  template: JST.library,

  initialize: function() {
    this.collection = [
      {categoryName: "Applicances", categoryId: "abcat0900000"},
      {categoryName: "TV & Home Theater", categoryId: "abcat0100000"},
      {categoryName: "Computers & Tablets", categoryId: "abcat0500000"},
      {categoryName: "Cell Phones", categoryId: "abcat0800000"},
      {categoryName: "Cameras & Camcorders", categoryId: "abcat0400000"},
      {categoryName: "Audio", categoryId: "abcat0200000"},
      {categoryName: "Car Electronics & GPS", categoryId: "abcat0300000"},
      {categoryName: "Video Games, Movies & Music", categoryId: "pcmcat311300050017"},
      {categoryName: "Health, Fitness & Beauty", categoryId: "pcmcat242800050021"},
      {categoryName: "Home & Office", categoryId: "pcmcat312300050015"},
      {categoryName: "Wearable Technology", categoryId: "pcmcat332000050000"},
      {categoryName: "By Brand", categoryId: "pcmcat128500050004"},
    ]
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
    this.activeNav();
  },

  activeNav: function() {
    this.$('.side-nav').removeClass('side-nav-active');
    this.$('.show-library').addClass('side-nav-active');
  },

  renderChildren: function(){
  _.invoke(this.children || [], 'remove');

  this.children = this.collection.map(function(child) {
    var view = new CategoryItemView({
      model: child
    });
    this.$('.category-list').append(view.el);
    return view;
  }.bind(this));

  return this;
},

remove: function(){
  _.invoke(this.children || [], 'remove');
  Backbone.View.prototype.remove.apply(this, arguments);
}
})
