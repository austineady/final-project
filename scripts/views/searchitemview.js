export default Backbone.View.extend({
  template: JST.searchitem,

  events: {
    'click .search-item-list-add': 'addToList',
  },

  opened: false,

  tagName: 'li',

  className: 'search-item',

  initialize: function() {
    this.render();
    this.showOverlay();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  addToList: function() {
    console.log(this.model);
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
      owner: user.attributes.username
    });
    console.log(user);
    document.location.reload(true);
    /*user.attributes.list.push(this.model);
    console.log(user.attributes.list);
    user.save();*/
  },

  showOverlay: function() {
    this.$('.overlay-'+this.model.sku).dialog({
      autoOpen: false,
      modal: false,
      position: { my: "center-top", at: "center-top", of: '.search-results' },
      dialogClass: 'search-dialog',
      buttons: [
        {
          text: "Add to List",
          click: function() {
            this.addToList();
            $('.overlay-'+this.model.sku).dialog('close');
          }.bind(this),
        }
      ],
      width: 800
    });

    this.$('.opener').click(function(e) {
      $('.overlay-'+this.model.sku).dialog('open');
    }.bind(this));
  }

});
