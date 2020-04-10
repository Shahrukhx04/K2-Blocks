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
	  this.target = new Date(2019, 2, 31, 12, 30, 0, 0);
	  this.state = {
		seconds: 4,
		minutes: 3,
		hours: 2,
		days: 1
	  };
	}

	setTarget(t_date) {
		console.log("Before update");
		console.log(this.target.toLocaleString());
		this.setState({
			seconds: 4,
			minutes: 3,
			hours: 2,
			days: 1,
		  });
		this.target=t_date;
		console.log("After update");
		console.log(this.target.toLocaleString());
		console.log(t_date.toLocaleString());
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
		return wp.element.createElement("table", {
			class: "time-widget",
			cellspacing: "0"
		}, wp.element.createElement("tbody", null,
			wp.element.createElement("tr", null,
				wp.element.createElement("td", {
					class: "tw-digit",
					id: "tw-digit-days",
					align: "center"
				}, this.state.days),
				wp.element.createElement("td", {
					class: "tw-digit",
					id: "tw-digit-hours",
					align: "center"
				}, this.state.hours),
				wp.element.createElement("td", {
					class: "tw-digit",
					id: "tw-digit-minutes",
					align: "center"
				}, this.state.minutes),
				wp.element.createElement("td", {
					class: "tw-digit",
					id: "tw-digit-seconds",
					align: "center"
				}, this.state.seconds)),
			wp.element.createElement("tr", null,
				wp.element.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "days"),
				wp.element.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "hours"),
				wp.element.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "minutes"),
				wp.element.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "seconds"))));
	}
  } 


registerBlockType( 'cgb/timer-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Timer',
	icon: 'clock',
	category: 'magik-blocks',
	attributes: {
		target: {type: 'Date'}
	},

	/* This configures how the content and color fields will work, and sets up the necessary elements */

	edit: function(props) {
			
			props.attributes.target = new Date();
			var timer = new Timer();
			console.log(props.attributes.target)
			timer.setTarget(props.attributes.target);
			return props.isSelected ? //if selected
			//display backend controls  (
			timer
			:
			//display as frontend 
			//new Timer(props)

			timer;
		}
	,
	save: function(props) {
		var timer = new Timer();
		console.log(timer.toString());
		console.log(props.attributes.target);
		timer.setTarget(props.attributes.target);
	return (
		<div className="tw-holder">
		  <p className="tw-data">{props.attributes.target.toLocaleString()}</p>
		  {timer.render()}
		</div>
	  );
	},
})
