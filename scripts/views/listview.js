import ListItemView from './listitemview';

export default Backbone.View.extend({
  template: JST.renderlist,

  initialize: function() {
    this.model = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.fetch().then(function(data) {
      var list = _.where(data.attributes.results, {owner: this.model.attributes.username});
      this.render(list);
      this.$('.item-modal').addClass('modal-disabled');
    //   this.$('.user-list').accordion({
    //     active: false,
    //     animate: 200,
    //     heightStyle: 'content',
    //     collapsible: true,
    //   });
    }.bind(this));
  },

  render: function(list) {
    this.$el.html(this.template());
    this.renderChildren(list)
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

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
})
