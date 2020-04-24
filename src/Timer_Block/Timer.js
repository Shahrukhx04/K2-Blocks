import './style.scss';
import './editor.scss';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */


class Timer extends wp.element.Component {
	constructor(props) {
	  super(props);
	  this.target = new Date();
	  this.state = {
		seconds: 4,
		minutes: 3,
		hours: 2,
		days: 1
	  };
	}


	componentDidMount() {
		this.intervalID = setInterval(
		  () => this.tick(),
		  1000
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick() {
		var variable1 = new Date();
		var variable2 = this.target;
		// Create a third variable by adding both variables:
		var delta = Math.abs((variable2-variable1)/1000);
		// calculate (and subtract) whole days
		var days_ = Math.floor(delta / 86400);
		delta -= days_ * 86400;
		// calculate (and subtract) whole hours
		var hours_ = Math.floor(delta / 3600) % 24;
		delta -= hours_ * 3600;
		// calculate (and subtract) whole minutes
		var minutes_ = Math.floor(delta / 60) % 60;
		delta -= minutes_ * 60;
		// what's left is seconds
		var seconds_ = Math.floor(delta % 60);  // in theory the modulus is not required
		this.setState({
			seconds: seconds_,
			minutes: minutes_,
			hours: hours_,
			days:days_
		});
	}

	render() {
		return (
		<div class= "time-widget" style={{height:"auto"}}>
			<div class="tw-row">
				<div class="tw-column">
					<p class="tw-digit tw-digit-days">{this.state.days}</p>
					<p class="tw-title">days</p>
				</div>
				<div class="tw-column">
					<p class="tw-digit tw-digit-hours">{this.state.hours}</p>
					<p class="tw-title">hours</p>
				</div>
				<div class="tw-column">
					<p class="tw-digit tw-digit-minutes">{this.state.minutes}</p>
					<p class="tw-title">minutes</p>
				</div>
				<div class="tw-column">
					<p class="tw-digit tw-digit-seconds">{this.state.seconds}</p>
					<p class="tw-title">seconds</p>
				</div>
			  </div>
			  </div>
			)
	}
  } 


registerBlockType( 'cgb/timer-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Timer',
	icon: 'clock',
	category: 'magik-blocks',
	attributes: {
		minutes: {type:'integer',default:45},
		hours: {type:'integer',default:23},
		date: {type:'integer',default:24},
		month:{type:'integer',default:12},
		year:{type:'integer',default:2020},
	},

	edit: function(props) {
			var timer = new Timer();
			console.log("Called here")
			function updateContent(event) {
				console.log("update content called");
				if (event.target.name === 'timer_date_input'){
					//create new date with new date and same time
					var temp = event.target.value.split("/");
					console.log(temp);
					//target_date = new Date(/*year*/parseInt(temp[2]), parseInt(temp[0])-1/*month*/,parseInt(temp[1]) /*day*/, props.attributes.hours/*hours*/,props.attributes.minutes /*minutes*/, 0/*seconds*/, 0/*milliseconds*/);
					if(temp.length == 3){
						props.setAttributes({
							minutes: props.attributes.minutes,
							hours: props.attributes.hours,
							date: parseInt(temp[1]),
							month:parseInt(temp[0])-1,
							year:parseInt(temp[2]),
						})
					}
				}
				else if (event.target.name === 'timer_time_input'){
					//create new date with new time and old date
					var temp = event.target.value.split(":");
					//target_date = new Date(/*year*/props.attributes.year, props.attributes.month/*month*/,props.attributes.date /*day*/, parseInt(temp[0])/*hours*/, parseInt(temp[1])/*minutes*/, 0/*seconds*/, 0/*milliseconds*/);
					if(temp.length == 2){
						props.setAttributes({
							minutes: parseInt(temp[1]),
							hours: parseInt(temp[0]),
							date: props.attributes.date,
							month:props.attributes.month,
							year:props.attributes.year,
						})
					}
				}
				timer.setTarget(props.attributes);
			}
			
			return (
				<div id="timer-be">
					<label>Select date:</label><br></br>
					{React.createElement("input", { type: "text",id: "timer_date_input",name:"timer_date_input",placeholder:"MM/DD/YYYY",
							defaultValue:props.attributes.month+"/"+props.attributes.date+"/"+props.attributes.year,  onChange: updateContent })}
					<br></br>
					<label>Select time:</label><br></br>
					<input type="input" id="timer_time_input" name="timer_time_input" placeholder="HH-MM" defaultValue={props.attributes.hours+":"+props.attributes.minutes} onChange={updateContent}></input>
				</div>
			)
		}
	,
	save: function(props) {
		var timer = new Timer();
		var timer_str = props.attributes.year+","+props.attributes.month+","+props.attributes.date+","+props.attributes.hours+","+props.attributes.minutes+","+0+","+0;
	return (
		<div className="tw-holder" data-time={timer_str}>
		  {timer.render()}
		</div>
	  );
	},
})
