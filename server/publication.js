Meteor.publish('activitys', function(options) {
	return Activitys.find({},options);
});

Meteor.publish('comments', function() {
  	return Comments.find();
});

Meteor.publish('joinActivity', function() {
  	return JoinActivity.find();
});