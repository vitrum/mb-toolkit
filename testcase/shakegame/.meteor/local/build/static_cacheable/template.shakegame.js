(function(){ Meteor.startup(function(){document.body.appendChild(Spark.render(Meteor._def_template(null,Handlebars.json_ast_to_func([[">","hello"],"\n   ",[">","message"]]))));});Meteor._def_template("hello",Handlebars.json_ast_to_func(["<h1>Hello World!</h1>\n  ",["{",[[0,"greeting"]]],"\n  <input type=\"button\" value=\"Click\" />"]));
Meteor._def_template("message",Handlebars.json_ast_to_func(["<div class=\"hero-unit\">\n    <h1>Messages</h1>\n    <ul>\n      ",["#",[[0,"each"],[0,"messages"]],["\n      <li>",["{",[[0,"username"]]]," says: ",["{",[[0,"content"]]],"</li>\n      "]],"\n    </ul>\n  </div>"]));

}).call(this);
