import CategoryItemView from './categoryitemview';
import LibrarySearchView from './librarysearchview';

export default Backbone.View.extend({
  template: JST.library,

  currentPage: 1,

  events: {
    'submit .library-search': 'search'
  },

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
},

  search: function(e) {
    e.preventDefault();
    $('.subcat-box').addClass('subcat-box-inactive');
    var query = this.$('.home-search-bar').val();
    var search = query.replace(' ', '&search=');
    $.ajax({
      url: "http://api.remix.bestbuy.com/v1/products((search="+search+"))?show=name,sku,details.name,includedItemList.includedItem,customerTopRated,bestSellingRank,onSale,priceUpdateDate,freeShipping,inStoreAvailabilityText,onlineAvailabilityText,inStorePickup,orderable,salePrice,url,accessoriesImage,alternateViewsImage,image,backViewImage,leftViewImage,rightViewImage,thumbnailImage,topViewImage,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3&page="+this.currentPage,
      success: function (data) {
        var view = new LibrarySearchView({collection: data});
        this.$('.subcat-product-box').html(view.el);
        if(data.currentPage === 1) {
          this.$('.search-backwards').removeClass('search-backwards');
        }
      }.bind(this),
       error: function(){
        alert('No search results were found, please try again');
      }
    });
  }
})
