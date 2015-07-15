import ReviewView from './reviewview';

export default Backbone.View.extend({
  template: JST.modal,

  isEditing: false,

  events: {
    'click .close-modal': 'close',
    'click .modal-background': 'close',
    'click .reviews': 'renderReviews',
    'click .list-item-edit': 'editItem',
    'submit .list-item-edit-form': 'findItem',
    'click .list-item-edit-cancel': 'cancelEdit',
    'click .list-item-edit-save': 'findItem',
    'click .list-item-delete': 'deleteItem'
  },

  initialize: function() {
    $('.modal-background').removeClass('modal-disabled');
    $('.item-modal').removeClass('modal-disabled');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  close: function() {
    $('.item-modal').addClass('modal-disabled');
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

  editItem: function() {
    this.model.isEditing = true;
    this.render();
  },

  findItem: function() {
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
      console.log(product);
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
    this.close();
    }
  },

  cancelEdit: function() {
    this.model.isEditing = false;
    this.render();
  }
})
