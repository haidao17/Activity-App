Template.myJoinedActivity.helpers({
	
	myJoinedActivitys: function(){

		var joinedActivityObjArray = JoinActivity.find({"userId":Meteor.user()._id}).fetch();

		console.log(joinedActivityObjArray);

		var myJoindedActivity = [];

		var varForActivity;

		for (obj in joinedActivityObjArray)
		{
			console.log(joinedActivityObjArray[obj]);
			// console.log(Activitys.findOne({"_id": obj.activityId}));
			varForActivity = Activitys.findOne({"_id": joinedActivityObjArray[obj].activityId});
			if (varForActivity !== undefined){
				myJoindedActivity.push(varForActivity);
			}

		}

		console.log(myJoindedActivity);
		return myJoindedActivity;
	},

	hasMyJoinedActivity: function() {
		
		if( JoinActivity.find({"userId":Meteor.user()._id}).count() === 0) {
			return false;
		}

		return true;
	}
});
