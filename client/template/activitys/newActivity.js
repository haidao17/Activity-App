Template.newActivity.events({
	'submit form':function(e){
		e.preventDefault();
		console.log($(e.target).find('[id=activityName]').val());
		var creatActivity = {
			name:$(e.target).find('[id=activityName]').val(),
			date:$(e.target).find('[id=activityTime]').val(),
			location:$(e.target).find('[id=activityLocation]').val(),
			detail:$(e.target).find('[id=activityDetail]').val(),
		}

		var errors = validateActivity(creatActivity);
		// console.log("hahah "+errors);
		if(errors.name||errors.date||errors.location||errors.detail)
			return Session.set('activitySubmitErrors',errors);

		Meteor.call('ActivityInsert', creatActivity, function(error, result) {
      		Router.go('activityList');
    	});
	}
});


Template.newActivity.onCreated(function() {
  	Session.set('postSubmitErrors', {});
});


Template.newActivity.helpers({
  	errorMessage: function(field) {
    	return Session.get('activitySubmitErrors')[field];
  	},
  	errorClass: function (field) {
    	return !!Session.get('activitySubmitErrors')[field] ? 'has-error' : '';
  	}
});