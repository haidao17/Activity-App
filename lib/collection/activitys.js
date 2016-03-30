Activitys = new Mongo.Collection('activitys');


Activitys.allow({
  update: function(userId, activitys) { 
    return activitys && activitys.userId === userId; 
  },
  remove: function(userId, activitys) { 
    return activitys && activitys.userId === userId;  
  }
});


Meteor.methods({
  ActivityInsert: function(Activity) {
      
    	var currentUser = Meteor.user();
      
    	var newActivityWithUserInfo = _.extend(Activity, {
      		userId: currentUser._id,
      		author: currentUser.username,
      		submitted: new Date()
    	});
      
    	var activityId = Activitys.insert(newActivityWithUserInfo);
    	
      return {
      		_id: activityId
    	};
  }
});


validateActivity = function (activity) {
  var errors = {};
  if (!activity.name)
    errors.name = "请填写活动标题";
  if (!activity.date)
    errors.date =  "请填写活动时间";
    if (!activity.location)
    errors.location = "请填写活动地点";
  if (!activity.detail)
    errors.detail =  "请填写活动细节";
  return errors;
}
