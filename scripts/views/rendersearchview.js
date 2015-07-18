import SearchView from './searchview';

export default Backbone.View.extend({
  template: JST.rendersearch,

  currentPage: 1,

  events: {
    'submit .home-search-form': 'showResults',
    'click .search-backwards': 'pageBackward',
    'click .search-forwards': 'pageForward'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.activeNav();
  },

  activeNav: function() {
    this.$('.side-nav').removeClass('side-nav-active');
    this.$('.show-search').addClass('side-nav-active');
  },

  showResults: function(e) {
    e.preventDefault();
    var query = this.$('.home-search-bar').val();
    var search = query.replace(' ', '&search=');
    $.ajax({
      url: "http://api.remix.bestbuy.com/v1/products((search="+search+"))?show=name,sku,image,salePrice&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page="+this.currentPage,
      success: function (data) {
        var view = new SearchView({collection: data});
        this.$('.search-results').html(view.el);
        if(data.currentPage === 1) {
          this.$('.search-backwards').removeClass('search-backwards');
        }
      }.bind(this),
       error: function(){
        alert('No search results were found, please try again');
      }
    });
  },

  pageForward: function(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber + 1;
    this.showResults(e);
  },

  pageBackward: function(e) {
    var currentPageNumber = this.currentPage;
    this.currentPage = currentPageNumber - 1;
    this.showResults(e);
  },

});
