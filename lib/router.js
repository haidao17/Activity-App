Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/submit_activity',function(){
	this.render('newActivity');
}, {
	name: 'newActivity'
});

Router.route('/activity/:_id/edit', {
  name: 'activityEdit',
  waitOn: function() {
    return Meteor.subscribe('activitys');
  },
  data: function() { return Activitys.findOne(this.params._id); }
});


Router.route('/myActivity',{
  name: 'myActivity',
  waitOn: function() {
      return Meteor.subscribe('activitys');
  },
  data: function() { return Activitys.findOne(this.params._id); }
});


Router.route('/myJoinedActivity', {
  name: 'myJoinedActivity',
  waitOn: function() {
    return Meteor.subscribe('activitys');
  },
  data: function() { return Activitys.findOne(this.params._id); }
});


Router.route('/:activityLimit?', {
  	name: 'activityList',
  	waitOn: function() {
    	var limit = parseInt(this.params.activityLimit) || 4;
    	// console.log(limit);
    	return Meteor.subscribe('activitys', {sort: {submitted: -1}, limit: limit});
  	},
	data: function() {
		var limit = parseInt(this.params.activityLimit) || 4;
		var hasMore = Activitys.find({}, {sort: {submitted: -1}, limit: limit}).count() === limit;
		var nextPath = this.route.path({activityLimit: limit + 4});
		// console.log(nextPath);
		// console.log(hasMore);

		return {
	  		activitys: Activitys.find({}, {sort: {submitted: -1}, limit: limit}),
	  		nextPath: hasMore ? nextPath : null
		};
  	}
});

