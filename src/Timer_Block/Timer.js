import './style.scss';
import './editor.scss';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	RichText,
	InspectorControls,
	ColorPalette
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker

} = wp.components;


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

registerBlockType( 'cgb/timer-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Timer',
	icon: 'clock',
	category: 'magik-blocks',
	attributes: {
		minutes: {type:'integer',default:45},// for date
		hours: {type:'integer',default:23},
		date: {type:'integer',default:24},
		month:{type:'integer',default:11},
		year:{type:'integer',default:2020},

		days_: {type:'integer',default:0}, //for showing on timer
		hours_: {type:'integer',default:0},
		minutes_: {type:'integer',default:0},
		seconds_: {type:'integer',default:0},
		backgroundColor: {
			type: 'string',
			default: '#ddd'
		},
		fontColor: {
			type: 'string',
			default: 'black'
		},
		timerShape: {
			type: 'string',
			default: ''
		}

	},

	edit: function(props) {
			function calculateDateDifference(){
				var attr = props.attributes;
				var targetDate = new Date(attr.year,attr.month,attr.date,attr.hours,attr.minutes,0,0);
				var variable1 = new Date(); //todays date
				var days_;
				var hours_;
				var minutes_;
				var seconds_;
				if(targetDate-variable1 <= 0) {
					//display zeros
					days_ = 0;
					hours_ = 0;
					minutes_ = 0;
					seconds_ = 0;
				}
				else{
					var delta = Math.abs((targetDate-variable1)/1000);
					// calculate (and subtract) whole days
					days_ = Math.floor(delta / 86400);
					delta -= days_ * 86400;
					// calculate (and subtract) whole hours
					hours_ = Math.floor(delta / 3600) % 24;
					delta -= hours_ * 3600;
					// calculate (and subtract) whole minutes
					minutes_ = Math.floor(delta / 60) % 60;
					delta -= minutes_ * 60;
					// what's left is seconds
					seconds_ = Math.floor(delta % 60);  // in theory the modulus is not required
				}
				props.setAttributes({
					days_: days_,
					hours_: hours_,
					minutes_ :minutes_,
					seconds_ :seconds_
				})
				
			}


			function updateDateTime(newDateTime){
				//"2020-12-24T22:45:00"
				var datetime = newDateTime.split('T');
				var date = datetime[0].split('-');
				var time = datetime[1].split(':');
				console.log(date)
				console.log(time)
				props.setAttributes({
					minutes: parseInt(time[1]),
					hours: parseInt(time[0]),
					date: parseInt(date[2]),
					month: parseInt(date[1])-1,
					year: parseInt(date[0]),
				})
				calculateDateDifference();
			}

			function onShapeChange(value){
				props.setAttributes({
					timerShape:value
				})
			}

			function onBackgroundColorChange(value){
				props.setAttributes({
					backgroundColor: value
				})
			}

			function onFontColorChange(value){
				props.setAttributes({
					fontColor: value
				})
			}
			
			var styling = {
				color: props.attributes.fontColor,
				backgroundColor: props.attributes.backgroundColor
			}

			var backgroundDefaultColors = [
				{ color: 'gray' },
				{ color: '#ddd' },
				{color: 'white'},
				{color: 'black'}
			];
			var fontDefaultColors = [
				{ color: 'white' },
				{ color: 'black' },
				{color: 'darkred'},
				{color: 'whitesmoke'}
			];

			return ([
				<InspectorControls>
					<PanelBody title={"Date and Time"}>
						<DateTimePicker
							currentDate = {new Date(props.attributes.year,props.attributes.month,props.attributes.date,props.attributes.hours,props.attributes.minutes,0,0)}
							onChange={updateDateTime}
						/>
					
					</PanelBody>
					<PanelBody title={"Styling and color"}>
						<SelectControl
									label="Shape"
									value={props.attributes.timerShape}
									options={[
										{ label: 'Square', value: '' },
										{ label: 'Round', value: 'tw-round' },
									]}
									onChange={onShapeChange}
						/>
						<label class="components-base-control__label">Background color</label>
						<ColorPalette
							value = { props.attributes.backgroundColor }
							onChange={onBackgroundColorChange}
							colors = {backgroundDefaultColors}
						/>
						<label class="components-base-control__label">Text color</label>
						<ColorPalette
							value = { props.attributes.fontColor }
							onChange={onFontColorChange}
							colors = {fontDefaultColors}
						/>
					</PanelBody>
				</InspectorControls>
				,
				<div className="tw-holder">
					<div class= "time-widget">
						<div class="tw-row">
							<div class={"tw-column"+" "+props.attributes.timerShape} style={styling}>
								<p class="tw-digit tw-digit-days">{props.attributes.days_}</p>
								<p class="tw-title">days</p>
							</div>
							<div class={"tw-column"+" "+props.attributes.timerShape} style={styling}>
								<p class="tw-digit tw-digit-hours">{props.attributes.hours_}</p>
								<p class="tw-title">hours</p>
							</div>
							<div class={"tw-column"+" "+props.attributes.timerShape} style={styling}>
								<p class="tw-digit tw-digit-minutes">{props.attributes.minutes_}</p>
								<p class="tw-title">minutes</p>
							</div>
							<div class={"tw-column"+" "+props.attributes.timerShape} style={styling}>
								<p class="tw-digit tw-digit-seconds">{props.attributes.seconds_}</p>
								<p class="tw-title">seconds</p>
							</div>
						</div>
					</div>
				</div>
			])
		}
	,
	save: function(props) {
	var timer_str = props.attributes.year+","+props.attributes.month+","+props.attributes.date+","+props.attributes.hours+","+props.attributes.minutes+","+0+","+0;
	var styling = {
		color: props.attributes.fontColor,
		backgroundColor: props.attributes.backgroundColor
	}
	return (
		<div className="tw-holder" data-time={timer_str}>
		  <div class= "time-widget">
			<div class="tw-row">
				<div class={"tw-column"+" "+props.attributes.timerShape} style={styling}>
					<p class="tw-digit tw-digit-days">{props.attributes.days_}</p>
					<p class="tw-title">days</p>
				</div>
				<div class={"tw-column"+" "+props.attributes.timerShape} style={styling}>
					<p class="tw-digit tw-digit-hours">{props.attributes.hours_}</p>
					<p class="tw-title">hours</p>
				</div>
				<div class={"tw-column"+" "+props.attributes.timerShape} style={styling}>
					<p class="tw-digit tw-digit-minutes">{props.attributes.minutes_}</p>
					<p class="tw-title">minutes</p>
				</div>
				<div class={"tw-column"+" "+props.attributes.timerShape} style={styling}>
					<p class="tw-digit tw-digit-seconds">{props.attributes.seconds_}</p>
					<p class="tw-title">seconds</p>
				</div>
			  </div>
			</div>
		</div>
	  );
	},
})
