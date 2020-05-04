import './style.scss';
import './editor.scss';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
//stuff
const {
	RichText,
	InspectorControls,
	ColorPalette
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker,
	NumberControl,
	TextControl

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

registerBlockType( 'k2/counter-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Counter',
	icon: 'arrow-up-alt2',
	category: 'magik-blocks',
	attributes: {
		backgroundColor: {
			type: 'string',
			default: '#ab47bc'
		},
		fontColor: {
			type: 'string',
			default: 'white'
		},
		counterShape: {
			type: 'string',
			default: ''
		},
		number: {
			type: 'string',
			default: '0'
		},
		type: {
			type:'string',
			default: 'number'
		},
		title: {
			type: 'string',
			default: 'Title'
		},
		date: {
			type: 'object',
			default:{
				day: 1,
				month: 0,
				year: 2020
			}
		}
		
	},

	edit: function(props) {

			function onShapeChange(value){
				props.setAttributes({
					counterShape:value
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

			function onNumberChange(value){
				props.setAttributes({
					number: value
				})
			}

			function onTypeChange(value){
				props.setAttributes({
					type: value
				})
			}

			function onDateChange(newDateTime){
				var datetime = newDateTime.split('T');
				var date = datetime[0].split('-');
				console.log(date)
				var day=parseInt(date[2])
				var month= parseInt(date[1])-1
				var year=parseInt(date[0])
				props.setAttributes({
					date:{
						day:day,
						month:month,
						year:year
					}
				})
				var targetDate = new Date(year,month,day,0,0,0,0);
				var variable1 = new Date(); //todays date
				var days_;
				console.log(targetDate.toLocaleString())
				if(targetDate-variable1 >= 0) {
					//display zero
					days_ = 0;
					
				}
				else{
					var delta = Math.abs((targetDate-variable1)/1000);
					// calculate (and subtract) whole days
					days_ = Math.floor(delta / 86400);
				}

				props.setAttributes({
					number:days_
				})
			}
			
			function onTitleChange(value){
				props.setAttributes({
					title:value
				})
			}
			var styling = {
				backgroundColor: props.attributes.backgroundColor
			}
			 var textStyling = {
				color: props.attributes.fontColor,
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
			var contentControls = (
				<TextControl
							label={<strong>Number</strong>}
							onChange={onNumberChange}
							value = {props.attributes.number}
						/>
			);
			if (props.attributes.type === 'days'){
				contentControls = (
					<div>
						<label>Date</label>
						<DateTimePicker
							currentDate = {new Date(props.attributes.date.year,props.attributes.date.month,props.attributes.date.day,0,0,0,0)}
							onChange={onDateChange}
						/>
					</div>
				);
			}
			return ([
				<InspectorControls>
					<PanelBody title={"Content"}>
						<SelectControl
							label="Type"
							value={props.attributes.type}
							options={[
								{ label: 'Number', value: 'number' },
								{ label: 'Days since Date', value: 'days' },
							]}
							onChange={onTypeChange}
						/>
						<div>
						{contentControls}
						<TextControl
							label={<strong>Title</strong>}
							onChange={onTitleChange}
							value = {props.attributes.title}
						/>
				</div>
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
				<div className="cw-holder">
					<div className="counter-widget" style={styling}>
						<div className="content">
							<p className="cw-number" style={textStyling}> {props.attributes.number} </p>
							<p className="cw-title" style={textStyling}> {props.attributes.title} </p>
						</div>
					</div>
				</div>
			])
		}
	,
	save: function(props) {
	var styling = {
		color: props.attributes.fontColor,
		backgroundColor: props.attributes.backgroundColor
	}
	var textStyling = {
		color: props.attributes.fontColor,
	 }
	return (
		<div className="cw-holder">
			<div className="counter-widget" style={styling} data-done={0}>
				<div className="content">
					<p className="cw-number" style={textStyling}> {props.attributes.number} </p>
					<p className="cw-title" style={textStyling}> {props.attributes.title} </p>
				</div>
			</div>
		</div>
	  );
	},
})
