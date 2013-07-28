(function(){ Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteor-example.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.message.messages = function() {
      return Messages.find()
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

}).call(this);
