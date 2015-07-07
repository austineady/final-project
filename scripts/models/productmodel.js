var Product = Backbone.Model.extend({
  defaults: {
    name: '',
    color: '',
    customerReviewAverage: '',
    url: '',
    image: '',
    features: [],
    manufacturer: '',
    shortDescription: '',
    salePrice: null,
    label: '',
    sku: null,
  }
});

var ProductCollection = Backbone.Collection.extend({
  model: Product
});

export default {Product, ProductCollection};
