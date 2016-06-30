"use strict";

var SoundCloud = React.createClass({
	displayName: "SoundCloud",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "widget" },
			React.createElement("iframe", { id: "soundcloud_widget", width: "40%", height: "166", scrolling: "no",
				src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261067825&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true" }),
			React.createElement(
				"button",
				{ id: "stream", className: "buttons" },
				"Play"
			)
		);
	}
});
//https://w.soundcloud.com/player/?url=http://api.soundcloud.com/users/1539950/favorites
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NvdW5kQ2xvdWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxhQUFhLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNsQyxTQUFRLGtCQUFVO0FBQ2pCLFNBQ0E7QUFBQTtBQUFBLEtBQUssV0FBVSxRQUFmO0FBQ0EsbUNBQVEsSUFBRyxtQkFBWCxFQUErQixPQUFNLEtBQXJDLEVBQTJDLFFBQU8sS0FBbEQsRUFBd0QsV0FBVSxJQUFsRTtBQUNDLFNBQUksd0xBREwsR0FEQTtBQUdDO0FBQUE7QUFBQSxNQUFRLElBQUcsUUFBWCxFQUFvQixXQUFVLFNBQTlCO0FBQUE7QUFBQTtBQUhELEdBREE7QUFNRTtBQVIrQixDQUFsQixDQUFqQiIsImZpbGUiOiJTb3VuZENsb3VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNvdW5kQ2xvdWQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG5cdFx0PGlmcmFtZSBpZD1cInNvdW5kY2xvdWRfd2lkZ2V0XCIgd2lkdGg9XCI0MCVcIiBoZWlnaHQ9XCIxNjZcIiBzY3JvbGxpbmc9XCJub1wiXG5cdFx0IHNyYz1cImh0dHBzOi8vdy5zb3VuZGNsb3VkLmNvbS9wbGF5ZXIvP3VybD1odHRwcyUzQS8vYXBpLnNvdW5kY2xvdWQuY29tL3RyYWNrcy8yNjEwNjc4MjUmYW1wO2F1dG9fcGxheT1mYWxzZSZhbXA7aGlkZV9yZWxhdGVkPWZhbHNlJmFtcDtzaG93X2NvbW1lbnRzPXRydWUmYW1wO3Nob3dfdXNlcj10cnVlJmFtcDtzaG93X3JlcG9zdHM9ZmFsc2UmYW1wO3Zpc3VhbD10cnVlXCI+PC9pZnJhbWU+XG5cdFx0IDxidXR0b24gaWQ9XCJzdHJlYW1cIiBjbGFzc05hbWU9XCJidXR0b25zXCIgPlBsYXk8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XHQpfVxufSk7XG4vL2h0dHBzOi8vdy5zb3VuZGNsb3VkLmNvbS9wbGF5ZXIvP3VybD1odHRwOi8vYXBpLnNvdW5kY2xvdWQuY29tL3VzZXJzLzE1Mzk5NTAvZmF2b3JpdGVzXG5cbiJdfQ==