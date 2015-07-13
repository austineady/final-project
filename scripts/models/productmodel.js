var Product = Backbone.Model.extend({
  defaults: {
    name: '',
    color: '',
    customerReviewAverage: '',
    url: '',
    image: '',
    backViewImage: '',
    leftViewImage: '',
    rightViewImage: '',
    topViewImage: '',
    thumbnailImage: '',
    isEditing: false,
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
