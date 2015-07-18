import ReviewView from './reviewview';

export default Backbone.View.extend({
  template: JST.searchmodal,

  isEditing: false,

  isUser: true,

  events: {
    'click .search-item-list-add': 'addToList',
    'click .close-modal': 'close',
    'click .reviews': 'renderReviews',
  },

  initialize: function() {
    console.log(this.model);
    this.findItems();
  },

  render: function(item) {
    this.$el.html(this.template(item));
  },

  findItems: function() {
    var sku = this.model.sku;
    $.ajax({
      url: "http://api.remix.bestbuy.com/v1/products((sku="+sku+"))?show=name,sku,details.name,includedItemList.includedItem,customerTopRated,bestSellingRank,onSale,priceUpdateDate,freeShipping,inStoreAvailabilityText,onlineAvailabilityText,inStorePickup,orderable,salePrice,url,accessoriesImage,alternateViewsImage,image,backViewImage,leftViewImage,rightViewImage,thumbnailImage,topViewImage,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3",
      success: function (data) {
        $('.search-item-modal').removeClass('search-modal-disabled');
        this.model = data.products[0];
        console.log(this.model);
        this.render(this.model);
      }.bind(this),
       error: function(){
        alert('No search results were found, please try again');
      }
    });
  },

  close: function() {
    $('.search-item-modal').addClass('search-modal-disabled');
  },

  renderReviews: function() {
    $.ajax({
      url: "http://api.remix.bestbuy.com/v1/reviews(sku="+this.model.sku+")?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=id,sku,comment,reviewer.name,submissionTime,title,rating",
      success: function (data) {
        var view = new ReviewView({model: data});
        this.$('.review-box').html(view.el);
      }.bind(this),
       error: function(){
        this.render();
      }
    });
  },

  addToList: function() {
    var user = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    product.save({
      color: this.model.color,
      customerReviewAverage: this.model.customerReviewAverage,
      features: this.model.features,
      image: this.model.image,
      backViewImage: this.model.backViewImage,
      leftViewImage: this.model.leftViewImage,
      rightViewImage: this.model.rightViewImage,
      topViewImage: this.model.topViewImage,
      thumbnailImage: this.model.thumbnailImage,
      url: this.model.url,
      name: this.model.name,
      salePrice: this.model.salePrice,
      shortDescription: this.model.shortDescription,
      sku: this.model.sku,
      owner: user.attributes.username,
      details: this.model.details,
      alternateViewsImage: this.model.alternateViewsImage,
      bestSellingRank: this.model.bestSellingRank,
      customerTopRated: this.model.customerTopRated,
      freeShipping: this.model.freeShipping,
      inStoreAvailabilityText: this.model.inStoreAvailabilityText,
      inStorePickup: this.model.inStorePickup,
      includedItemList: this.model.includedItemList,
      onSale: this.model.onSale,
      onlineAvailabilityText: this.model.onlineAvailabilityText,
      orderable: this.model.orderable,
      priceUpdateDate: this.model.priceUpdateDate,
    }, {
      success: function(product) {
        console.log('Successfully Saved', product);
      },
      error: function(product, error) {
        console.log(error, product);
      }
    });
  },
});
