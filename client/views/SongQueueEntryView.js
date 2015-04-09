// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: "tr",

  template: _.template("<td>(<%= artist%>)</td><td><%= title%></td>"),

  initialize: function() {
    this.render();
    this.model.on('ended', function(){

    });
  },

  events: {
    //event listeners to the song queue elements. to be added later
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
