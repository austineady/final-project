import ListItemView from './listitemview';
import SearchView from './searchview';

export default Backbone.View.extend({
  template: JST.home,

  events: {
    'click .item-list-add': 'listAdd',
    'click .app-title-user': 'search',
    'submit .plus-form': 'saveEntry',
    'submit .home-search-form': 'showResults'
  },

  initialize: function() {
    this.model = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.fetch().then(function(data) {
      var list = _.where(data.attributes.results, {owner: this.model.attributes.username});
      this.render(list);
      this.$("#accordion").accordion({
        active: 1,
        animate: 200,
        heightStyle: "content",
        collapsible: true,
      });
      this.$('.user-list').accordion({
        header: "paper-shadow",
        active: 2,
        animate: 200,
        heightStyle: 'content',
        collapsible: true,
      });
    }.bind(this));
    /*this.$('.home-search-bar').autocomplete({
      source: this.model.attributes.list,
      position: { my: "left top", at: "left bottom", collision: "none" }
    });*/
  },

  render: function(list) {
    this.$el.html(this.template(this.model));
    this.renderChildren(list);
  },

  renderChildren: function(list){
    _.invoke(this.children || [], 'remove');

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
  },

  listAdd: function() {
    this.$("#accordion").accordion({
      active: 2,
    });
  },

  search: function() {
    this.$("#accordion").accordion({
      active: 0,
    });
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
