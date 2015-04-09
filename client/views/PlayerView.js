// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id="myAudio" controls autoplay />',

  initialize: function() {
    this.$('#myAudio').on('play', function(){
      console.log('cool yeah!');
    });
    this.$('#myAudio').bind('ended', function(){
      console.log('even cooler');
    });
  },

  events: {
    'ended' : 'endedSong'
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  endedSong: function(){
    this.model.ended();
  }

});
