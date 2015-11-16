import ReviewView from './reviewview';

export default Backbone.View.extend({
  template: JST.modal,

  isEditing: false,

  events: {
    'click .close-modal': 'close',
    'click .modal-underlay': 'close',
    'click .reviews': 'renderReviews',
    'click .list-item-edit': 'editItem',
    'submit .list-item-edit-form': 'findItem',
    'click .list-item-edit-cancel': 'cancelEdit',
    'click .list-item-edit-save': 'findItem',
    'click .list-item-delete': 'deleteItem',
    'click .features-head': 'toggleFeatures',
    'click .shipping': 'toggleShipping',
    'click .image-list': 'showImage'
  },

  initialize: function() {
    this.render();
  },

  render: function(item) {
    $('.item-modal').removeClass('modal-disabled');
    $('.modal-underlay').removeClass('modal-disabled');
    this.$el.html(this.template(this.model));
    this.toggleFeatures();
  },

  close: function() {
    $('.item-modal').addClass('modal-disabled');
    $('.modal-underlay').addClass('modal-disabled');
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

  editItem: function() {
    this.model.isEditing = true;
    this.render();
  },

  findItem: function() {
    console.log(this.model);
    var Product = Parse.Object.extend("Product");
    var query = new Parse.Query(Product);
    var objectId = this.model.objectId;
    query.get(objectId, {
      success: function(product) {
        console.log(product);
        this.saveItem(product);
    }.bind(this),
    error: function(object, error) {
      alert('There seems to be something wrong with the server. Please try again in a few minutes');
    }
  });
},

  saveItem: function(product) {
    var name = this.$('.edit-name').val();
    var color = this.$('.edit-color').val();
    var price = this.$('.edit-price').val();
    var description = this.$('.edit-description').val();
    product.save({
      name: name,
      color: color,
      price: price,
      description: description,
      isEditing: false,
    });
      toastr.success("Your item has been saved");
      this.close();
      document.location.reload(true);
  },

  deleteItem: function() {
    var result = confirm('Are you sure you want to delete this item? This action is irreversible');
    if(result) {
      var that = this;
      var Product = Parse.Object.extend("Product");
      var query = new Parse.Query(Product);
      var objectId = that.model.objectId;
      query.get(objectId, {
        success: function(product) {
          product.destroy();
      }
    });
    toastr.success("Your item has been deleted");
    this.close();
    }
  },

  cancelEdit: function() {
    this.model.isEditing = false;
    this.render(this.model);
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
})
