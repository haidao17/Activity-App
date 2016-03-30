Template.commentItem.helpers({
  submittedText: function() {
    return this.submitted.toString();
  },
  checkUser: function(){
  	console.log(this.userId);
  	console.log(Meteor.userId);

  	return  this.userId === Meteor.userId();	
  }
});

Template.commentItem.events({
  'click .delete': function(e) {
    e.preventDefault();

    // if (confirm("Delete this Activity?")) {
      var currentCommentId = this._id;
      Comments.remove(currentCommentId);
    // }
  }

});