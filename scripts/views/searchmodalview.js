import ReviewView from './reviewview';

export default Backbone.View.extend({
  template: JST.modal,

  isEditing: false,

  events: {
    'click .close-modal': 'close',
    'click .reviews': 'renderReviews',
  },

  initialize: function() {
    $('.search-item-modal').removeClass('search-modal-disabled');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
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
});
