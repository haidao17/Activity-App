JoinActivity = new	Mongo.Collection('joinActivity');

JoinActivity.allow({
  insert: function(userId, doc) {
    return !! userId;
  },
  update: function(userId, doc) { 
    return doc && doc.userId === userId; 
  },
  remove: function(userId, doc) { 
    return doc && doc.userId === userId;  
  }
});

Meteor.methods({
  JoinToActivity: function(Attributes) {

    var user = Meteor.user();
    
    join = _.extend(Attributes, {
      userId: user._id,
    });
    
    return JoinActivity.insert(join);
  }
});