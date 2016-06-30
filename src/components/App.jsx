class App extends React.Component{
	constructor(props){
		super(props)
		this.state={
			currentmove:""
		}
	}
	render(){
		return(
			<div >
			<SoundCloud/>
			</div>
		);
	}
}
// window.setInterval(function(){
// 		$('.widget').click(function(){alert('hello');});
// },1000)

window.App = App;
ReactDOM.render(<App/>,document.getElementById("app"));