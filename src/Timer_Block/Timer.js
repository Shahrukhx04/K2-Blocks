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
	PanelRow,
	TextControl,
	RangeControl,
	ColorPicker,
	ToggleControl,
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
		minutes: {type:'integer',default:45},
		hours: {type:'integer',default:23},
		date: {type:'integer',default:24},
		month:{type:'integer',default:11},
		year:{type:'integer',default:2020},
		backgroundColor: {
			type: 'string',
			default: '#ddd'
		},
		timerShape: {
			type: 'string',
			default: ''
		}

	},

	edit: function(props) {
			console.log("Called here")

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
			}

			function onShapeChange(value){
				props.setAttributes({
					timerShape:value
				})
			}

			function onBackgroundColorChange(value){

			}

			function onFontColorChange(value){
				
			}
			
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
						<ColorPalette
							label="Background color"
							value = { props.attributes.backgroundColor }
							onChange={onBackgroundColorChange}
							colors = {ToolBarColors}
						/>
						<ColorPalette
							label="Font color"
							value = { titleColor }
							onChange={onFontColorChange}
							colors = {ToolBarColors}
						/>
					</PanelBody>
				</InspectorControls>
				,
				<div className="tw-holder">
					<div class= "time-widget">
						<div class="tw-row">
							<div class={"tw-column"+" "+props.attributes.timerShape}>
								<p class="tw-digit tw-digit-days">0</p>
								<p class="tw-title">days</p>
							</div>
							<div class={"tw-column"+" "+props.attributes.timerShape}>
								<p class="tw-digit tw-digit-hours">0</p>
								<p class="tw-title">hours</p>
							</div>
							<div class={"tw-column"+" "+props.attributes.timerShape}>
								<p class="tw-digit tw-digit-minutes">0</p>
								<p class="tw-title">minutes</p>
							</div>
							<div class={"tw-column"+" "+props.attributes.timerShape}>
								<p class="tw-digit tw-digit-seconds">0</p>
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
	return (
		<div className="tw-holder" data-time={timer_str}>
		  <div class= "time-widget">
			<div class="tw-row">
				<div class={"tw-column"+" "+props.attributes.timerShape}>
					<p class="tw-digit tw-digit-days">0</p>
					<p class="tw-title">days</p>
				</div>
				<div class={"tw-column"+" "+props.attributes.timerShape}>
					<p class="tw-digit tw-digit-hours">0</p>
					<p class="tw-title">hours</p>
				</div>
				<div class={"tw-column"+" "+props.attributes.timerShape}>
					<p class="tw-digit tw-digit-minutes">0</p>
					<p class="tw-title">minutes</p>
				</div>
				<div class={"tw-column"+" "+props.attributes.timerShape}>
					<p class="tw-digit tw-digit-seconds">0</p>
					<p class="tw-title">seconds</p>
				</div>
			  </div>
			</div>
		</div>
	  );
	},
})
