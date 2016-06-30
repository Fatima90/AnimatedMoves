
var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url,{
	element: document.getElementById('playlist')
},{ auto_play: true })


      SC.initialize({
        client_id: 'YOUR_CLIENT_ID'
      });
      var inputField = document.getElementById('url');
      var title = document.getElementById('title');
      var info = document.getElementById('info');
      var currentPlayer;
     
      var streamTrack = function(track){
        return SC.stream('/tracks/' + "http://soundcloud.com/forss/flickermood").then(function(player){
          title.innerText = track.title;
          info.style.display = 'inline-block';

          if (currentPlayer) {
            currentPlayer.pause();
          }
          currentPlayer = player;
          player.play();
        }).catch(function(){
          console.log(arguments);
        });
      };

     
      document.getElementById('pause').addEventListener('click', function(){
        if (currentPlayer) {
          currentPlayer.pause();
        }
      });
      document.getElementById('play').addEventListener('click', function(){
        if (currentPlayer) {
          currentPlayer.play();
        }
      });