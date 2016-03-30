Template.activityEdit.events({
  'submit form':function(e){
    e.preventDefault();

    var curretnActivityId = this._id;

    console.log(this.id);
   
    var updateActivity = {
      name:$(e.target).find('[id=activityName]').val(),
      date:$(e.target).find('[id=activityTime]').val(),
      location:$(e.target).find('[id=activityLocation]').val(),
      detail:$(e.target).find('[id=activityDetail]').val(),
    }


    Activitys.update(curretnActivityId,{$set: updateActivity},function(error){
        Router.go('activityList');
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    // if (confirm("Delete this Activity?")) {
      var currentActivityId = this._id;
      console.log(this._id);
      Activitys.remove(currentActivityId);
      console.log(JoinActivity.remove(currentActivityId));
      JoinActivity.remove(currentActivityId);
      Router.go('activityList');
    // }
  }

});
