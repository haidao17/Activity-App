Template.activity.events({

  "click .joinbtn":function(e,template){

    e.preventDefault();

    if (Meteor.user()){

		  template.$(".joinbtn").attr("disabled","disabled").html("已参加");

      var user = Meteor.user();

      var joined = {
        activityId: template.data._id
      };

      Meteor.call('JoinToActivity', joined, function(){});

      // JoinActivity.insert(joined);

      console.log(JoinActivity.find().count());

    } else {
    	throwError('请先登录'); // 
    }

  }
});

Template.activity.helpers({
  ownActivity: function() {
    return this.userId === Meteor.userId();
  },
  
  alreadyJoin: function(template) {
    var user = Meteor.user();
    if(JoinActivity.find({"userId": user._id ,"activityId": this._id}).count() === 0){
      return false;
    }

    return true;
  },

  number: function(){

    return JoinActivity.find({"activityId": this._id}).count();
  }

});
