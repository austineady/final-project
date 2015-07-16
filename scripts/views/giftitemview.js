export default Backbone.View.extend({
  template: JST.giftitem,

  events: {
    'click .delete-gift': 'deleteGift'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  deleteGift: function() {
        var Activity = Parse.Object.extend("Activity");
        var query = new Parse.Query(Activity);
        var objectId = this.model.objectId;
        query.get(objectId, {
          success: function(activity) {
            activity.destroy();
            document.location.reload(true);
        },
          error: function(object, error) {
            console.log(object, error);
          }
      });
  }
})
