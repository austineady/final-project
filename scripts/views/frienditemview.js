export default Backbone.View.extend({
  template: JST.frienditem,

  events: {
    'click .friend-item-add': 'addToList',
    'click .friend-item-gift': 'giftItem'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  addToList: function() {
    this.model = this.model.attributes;
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
      owner: user.attributes.username
    });
    toastr.success("This item has been added to your list");
    /*user.attributes.list.push(this.model);
    console.log(user.attributes.list);
    user.save();*/
  },

  giftItem: function() {
    var user = Parse.User.current();
    var Activity = Parse.Object.extend('Activity');
    var activity = new Activity();
    var owner = this.model.attributes.owner;
    var item = [this.model.attributes];
    activity.save({
      user: user.attributes.username,
      oppositeUser: owner,
      item: item
    });
    toastr.success("This item has been added to your Gift List");
  }
})
