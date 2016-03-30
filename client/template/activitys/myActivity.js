Template.myActivity.helpers({
	myActivitys: function(){
		console.log(Activitys.find({author: Meteor.user().username}).count());
		return Activitys.find({author: Meteor.user().username},{sort: {submitted: -1}});
	},

	hasMyActivity: function() {
		console.log(Activitys.find({author: Meteor.user().username}).count());
		if( Activitys.find({author: Meteor.user().username}).count() === 0) {
			return false;
		}

		return true;
	}
});

