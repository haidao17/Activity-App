Template.activityList.helpers({
	activitys: function() {
		return Activitys.find({}, {sort: {submitted: -1}});
	}
});