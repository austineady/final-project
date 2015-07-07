import ListItemView from './listitemview';
import SearchView from './searchview';

export default Backbone.View.extend({
  template: JST.home,

  events: {
    'submit .plus-form': 'saveEntry',
    'submit .home-search-form': 'showResults'
  },

  initialize: function() {
    this.model = Parse.User.current();
    console.log(this.model);
    this.render();
    /*this.$('.home-search-bar').autocomplete({
      source: this.model.attributes.list,
      position: { my: "left top", at: "left bottom", collision: "none" }
    });*/
    this.$("#accordion").accordion({
      active: 1,
      animate: 200,
      heightStyle: "content",
      collapsible: true,
    });
    this.$('.user-list').accordion({
      active: 2,
      animate: 200,
      heightStyle: 'content',
      collapsible: true,
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
  },

  showResults: function(e) {
    e.preventDefault();
    var query = this.$('.home-search-bar').val();
    var search = query.replace(' ', '&search=');
    $.ajax({
      url: "http://api.remix.bestbuy.com/v1/products((search="+search+"))?show=name,sku,salePrice,image,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3",
      success: function (data) {
        var view = new SearchView({collection: data});
        this.$('.search-results').html(view.el);
      }.bind(this),
       error: function(){
        alert('No search results were found, please try again');
      }
    });
  }
});
