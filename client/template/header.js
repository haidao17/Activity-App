Template.header.events({

  "click .need-to-log":function(e,template){
    
    if (!Meteor.user()){
    	throwError('请先登录');
      e.preventDefault(); 
    }

  }
});