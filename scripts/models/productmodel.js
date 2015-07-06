var Product = Backbone.Model.extend({
  defaults: {
    title: '',
    url: '',
    picture: ''
  }
});

var ProductCollection = Backbone.Collection.extend({
  model: Product
});

export default {Product, ProductCollection};
