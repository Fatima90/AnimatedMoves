var SoundCloud = React.createClass({
	render: function(){
		return (
		<div className="widget">
		<iframe id="soundcloud_widget" width="40%" height="166" scrolling="no"
		 src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261067825&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
		 <button id="stream" className="buttons" >Play / Pause</button>
		</div>
		)}
});
//https://w.soundcloud.com/player/?url=http://api.soundcloud.com/users/1539950/favorites

