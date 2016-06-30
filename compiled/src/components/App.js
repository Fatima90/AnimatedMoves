"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

		_this.state = {
			currentmove: ""
		};
		return _this;
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(SoundCloud, null)
			);
		}
	}]);

	return App;
}(React.Component);
// window.setInterval(function(){
// 		$('.widget').click(function(){alert('hello');});
// },1000)

window.App = App;
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNMLGNBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHFGQUNYLEtBRFc7O0FBRWpCLFFBQUssS0FBTCxHQUFXO0FBQ1YsZ0JBQVk7QUFERixHQUFYO0FBRmlCO0FBS2pCOzs7OzJCQUNPO0FBQ1AsVUFDQztBQUFBO0FBQUE7QUFDQSx3QkFBQyxVQUFEO0FBREEsSUFERDtBQUtBOzs7O0VBYmdCLE1BQU0sUzs7Ozs7QUFtQnhCLE9BQU8sR0FBUCxHQUFhLEdBQWI7QUFDQSxTQUFTLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF1QixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBdkIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZT17XG5cdFx0XHRjdXJyZW50bW92ZTpcIlwiXG5cdFx0fVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgPlxuXHRcdFx0PFNvdW5kQ2xvdWQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuLy8gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4vLyBcdFx0JCgnLndpZGdldCcpLmNsaWNrKGZ1bmN0aW9uKCl7YWxlcnQoJ2hlbGxvJyk7fSk7XG4vLyB9LDEwMDApXG5cbndpbmRvdy5BcHAgPSBBcHA7XG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiXX0=