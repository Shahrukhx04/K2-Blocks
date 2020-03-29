import './style.scss';
import './editor.scss';
import { DateTimePicker } from '@wordpress/components';


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


class Timer extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		target:new Date(2020, 0, 20, 12, 30, 0, 0) ,
		seconds: 4,
		minutes: 3,
		hours: 2,
		days: 1
	  };
	}

	setTarget(_target) {
		this.setState({target:_target});
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
		var variable2 = this.state.target;
		console.log(variable1.toLocaleString());
		console.log(variable2.toLocaleString());
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
			target: new Date(2020, 5, 20, 12, 30, 0, 0),
			seconds: seconds_,
			minutes: minutes_,
			hours: hours_,
			days:days_
		});
	}

	render() {
		return React.createElement("table", {
			class: "time-widget",
			cellspacing: "0"
		}, React.createElement("tbody", null,
			React.createElement("tr", null,
				React.createElement("td", {
					class: "tw-digit",
					align: "center"
				}, this.state.days),
				React.createElement("td", {
					class: "tw-digit",
					align: "center"
				}, this.state.hours),
				React.createElement("td", {
					class: "tw-digit",
					align: "center"
				}, this.state.minutes),
				React.createElement("td", {
					class: "tw-digit",
					align: "center"
				}, this.state.seconds)),
			React.createElement("tr", null,
				React.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "days"),
				React.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "hours"),
				React.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "minutes"),
				React.createElement("td", {
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
	},

	/* This configures how the content and color fields will work, and sets up the necessary elements */

	edit: function(props) {
			
			props.setAttributes({target: new Date(2020, 0, 20, 12, 30, 0, 0)});
			var timer = new Timer();
			timer.setTarget(new Date(2020, 0, 20, 12, 30, 0, 0));
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
		return new Timer(props);
	}
})
