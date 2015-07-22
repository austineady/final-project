import ReviewView from './reviewview';

export default Backbone.View.extend({
  template: JST.searchmodal,

  isEditing: false,

  isUser: true,

  events: {
    'click .search-item-list-add': 'addToList',
    'click .close-modal': 'close',
    'click .reviews': 'renderReviews',
    'click .features-head': 'toggleFeatures',
    'click .shipping': 'toggleShipping',
    'click .image-list': 'showImage'
  },

  initialize: function() {
    console.log(this.model);
    this.findItems();
  },

  render: function(item) {
    this.$el.html(this.template(item));
    this.toggleFeatures();
  },

  findItems: function() {
    var sku = this.model.sku;
    $.ajax({
      url: "http://api.remix.bestbuy.com/v1/products((sku="+sku+"))?show=name,sku,details.name,includedItemList.includedItem,customerTopRated,bestSellingRank,onSale,regularPrice,priceUpdateDate,alternateViewsImage,angleImage,spin360Url,largeFrontImage,largeImage,freeShipping,inStoreAvailabilityText,onlineAvailabilityText,inStorePickup,orderable,salePrice,url,accessoriesImage,alternateViewsImage,image,backViewImage,leftViewImage,rightViewImage,thumbnailImage,topViewImage,features.feature,shortDescription,color,customerReviewAverage,manufacturer&format=json&apiKey=e25cp4dyr5m785e27wke6rt3",
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
    if($('.reviews').hasClass('option-active')) {
      $('.reviews').removeClass('option-active');
      $('.option-box').html('');
      $('.option-box').removeClass('option-box-active');
    } else {
      $('.option-head').removeClass('option-active');
      $('.reviews').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      $.ajax({
        url: "http://api.remix.bestbuy.com/v1/reviews(sku="+this.model.sku+")?format=json&apiKey=e25cp4dyr5m785e27wke6rt3&show=id,sku,comment,reviewer.name,submissionTime,title,rating",
        success: function (data) {
          var view = new ReviewView({model: data});
          this.$('.option-box').html(view.el);
        }.bind(this),
         error: function(){
          this.render();
        }
      });
    }
  },

  addToList: function() {
    var user = Parse.User.current();
    console.log(user);
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
      spin360Url: this.model.spin360Url,
      largeFrontImage: this.model.largeFrontImage,
      angleImage: this.model.angleImage
    }, {
      success: function(product) {
        console.log('Successfully Saved', product);
      },
      error: function(product, error) {
        console.log(error, product);
      }
    });
  },

  toggleFeatures: function() {
    var item = this.model;
    if($('.features-head').hasClass('option-active')) {
      $('.features-head').removeClass('option-active');
      $('.option-box').removeClass('option-box-active');
      $('.option-box').html('');
    } else {
      $('.option-head').removeClass('option-active');
      $('.features-head').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      $('.option-box').html(JST.features({model: item}));
    }
  },

  toggleShipping: function() {
    if($('.shipping').hasClass('option-active')) {
      $('.shipping').removeClass('option-active');
      $('.option-box').removeClass('option-box-active');
      $('.option-box').html('');
    } else {
      $('.option-head').removeClass('option-active');
      $('.shipping').addClass('option-active');
      $('.option-box').addClass('option-box-active');
      var sku = this.model.sku;
      $.ajax({
        url: "http://api.remix.bestbuy.com/v1/products((sku="+sku+"))?show=name,sku,freeShipping,inStoreAvailabilityText,onlineAvailabilityText,inStorePickup,orderable,homeDelivery,friendsAndFamilyPickup,inStoreAvailability,onlineAvailability,shipping.ground,shipping.nextDay,shipping.secondDay,shipping.vendorDelivery,shippingCost,specialOrder&format=json&apiKey=e25cp4dyr5m785e27wke6rt3",
        success: function (data) {
          var item = data.products[0];
          this.$('.option-box').html(JST.shipping({model: item}));
        }.bind(this),
         error: function(){
          alert('No search results were found, please try again');
        }
      });
    }
  },

  showImage: function(e) {
    var src = e.target.src;
    this.$('.item-picture-box').html(JST.itemimage({model: src}))
  }
});
