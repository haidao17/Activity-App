Template.commentSubmit.onCreated(function() {
  Session.set('commentSubmitErrors', {});
});

Template.commentSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('commentSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=body]');
    var comment = {
      body: $body.val(),
      activityId: template.data._id
    };

    console.log(comment.activityId);
    var errors = {};
    if (! comment.body) {
      errors.body = "请写下你的评论";
      return Session.set('commentSubmitErrors', errors);
    }

    Meteor.call('commentInsert', comment, function(error, commentId) {
      $(body).val('');
    });
  }
});