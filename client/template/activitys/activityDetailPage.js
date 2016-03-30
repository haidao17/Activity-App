Template.activityDetailPage.helpers({
  comments: function() {
    return Comments.find({activityId: this._id});
  }
});