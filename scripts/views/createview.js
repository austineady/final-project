export default Backbone.View.extend({
  template: JST.createitem,

  events: {
    'submit .create-item': 'saveItem',
    'click .create-item-save': 'saveItem'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.activeNav();
  },

  activeNav: function() {
    $('.side-nav').removeClass('side-nav-active');
    $('.show-create').addClass('side-nav-active');
  },

  saveItem: function(e) {
    e.preventDefault();
    var user = Parse.User.current();
    var Product = Parse.Object.extend('Product');
    var product = new Product();
    var featureString = this.$('.create-features').val();
    var features = [];
    features.push(featureString);
    //var features = _.toArray(featureString);
    // var features = _.map(featureArray, ',', function(index) {
    //   return {"feature": index};
    // });
    console.log(features);
    product.save({
      customerReviewAverage: '',
      backViewImage: '',
      leftViewImage: '',
      rightViewImage: '',
      topViewImage: '',
      thumbnailImage: '',
      url: '',
      sku: null,
      owner: user.attributes.username,
      name: this.$('.create-name').val(),
      color: this.$('.create-color').val(),
      manufacturer: this.$('.create-manufacturer').val(),
      shortDescription: this.$('.create-description').val(),
      salePrice: this.$('.create-price').val(),
      features: features,
      image: this.$('.create-image').val()
    }).then(function() {
      this.render();
    }.bind(this));
  }
})
