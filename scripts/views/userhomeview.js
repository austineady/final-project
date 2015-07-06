import ListItemView from './listitemview';

export default Backbone.View.extend({
  template: JST.home,

  events: {
    'submit .plus-form': 'saveEntry'
  },

  initialize: function() {
    this.model = Parse.User.current();
    console.log(this.model);
    this.render();
    this.$('.home-search-bar').autocomplete({
      source: this.model.attributes.list,
      position: { my: "left top", at: "left bottom", collision: "none" }
    });
    this.$("#accordion").accordion({
      active: 1,
      animate: 200,
      heightStyle: "content",
    });
    this.$('.user-list').accordion({
      active: 2,
      animate: 200,
      heightStyle: 'content',
    });
  },

  render: function() {
    this.$el.html(this.template(this.model));
    this.renderChildren();
  },

  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.model.attributes.list.map(function(child) {
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
  },

  saveEntry: function() {
    var url = this.$('.plus-url').val();
    var title = this.$('.plus-name').val();
    var description = this.$('.plus-description').val();
    var picture = this.$('.plus-picture').val();
    //make this into a model and save it onto the user's collection
  }
});
