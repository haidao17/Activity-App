Comments = new Mongo.Collection('comments');


Comments.allow({
  update: function(userId, doc) { 
    return doc && doc.userId === userId; 
  },
  remove: function(userId, doc) { 
    return doc && doc.userId === userId;  
  }
});

Meteor.methods({
  commentInsert: function(commentAttributes) {

    var user = Meteor.user();
    var activity = Activitys.findOne(commentAttributes.activityId);
    if (!activity)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    
    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    
    return Comments.insert(comment);
  }
});
