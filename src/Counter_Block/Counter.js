import './style.scss';
import './editor.scss';
import {FONTS} from './Fonts.js';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
//stuff
const {
	RichText,
	InspectorControls,
	ColorPalette,
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker,
	NumberControl,
	TextControl,
	RangeControl,
	ColorPicker,
	ColorIndicator,
	Card,
	CardBody
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
		widgetSize: {
			type: 'number',
			default: 150
		},
		paddingTop: {
			type: 'number',
			default: 10
		},
		backgroundColor: {
			type: 'string',
			default: '#26C6DA'
		},
		haloColor: {
			type: 'string',
			default: '#C5E1A5'
				
		},
		titleFontColor: {
			type: 'string',
			default: 'black'
		},
		numberFontColor: {
			type: 'string',
			default: 'black'
		},
		titleFontFamily: {
			type: 'string',
			default: 'Comic Sans, Comic Sans MS, cursive'
		},
		numberFontFamily: {
			type: 'string',
			default: 'Comic Sans, Comic Sans MS, cursive'
		},
		numberFontSize: {
			type: 'number',
			default: 3
		},
		titleFontSize: {
			type: 'number',
			deafult: 1
		},
		counterShapeClass: {
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
		},
		prefix: {
			type: 'string',
			default: ''
		},
		postfix: {
			type: 'string',
			default: ''
		}
		
	},

	edit: function(props) {

			function onBackgroundColorChange(value){
				props.setAttributes( {
					backgroundColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'} 
				);
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
				backgroundColor: (props.attributes.counterShapeClass == '')?'transparent':props.attributes.backgroundColor,
				width: props.attributes.widgetSize+"px",
				height: props.attributes.widgetSize+"px",
				boxShadow: (props.attributes.counterShapeClass != 'cw-halo')?'none':"0 0 25px "+props.attributes.haloColor	
			}
	
			var titleStyling = {
				color: props.attributes.titleFontColor,
				fontFamily: props.attributes.titleFontFamily,
				fontSize: props.attributes.titleFontSize + 'em',
			}
	
			var numberStyling = {
				color: props.attributes.numberFontColor,
				fontFamily: props.attributes.numberFontFamily,
				fontSize: props.attributes.numberFontSize + 'em',
			}

			var contentStyling = {
				paddingTop: props.attributes.paddingTop+'px'
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

			var colorControls = (
				<div>
					<label class="components-base-control__label">Background color</label>
					<ColorPicker
						color={ props.attributes.backgroundColor }
						onChangeComplete={onBackgroundColorChange}
					/>
				</div>
			);
			if(props.attributes.counterShapeClass==''){
				colorControls = null;
			}
			if(props.attributes.counterShapeClass=='cw-halo'){
				colorControls = (
					<div>
					<label class="components-base-control__label">Background color</label>
					<ColorPicker
						color={ props.attributes.backgroundColor }
						onChangeComplete={onBackgroundColorChange}
					/>
					<label class="components-base-control__label">Halo color</label>
					<ColorPicker
						color={ props.attributes.haloColor }
						onChangeComplete={ ( value ) => {props.setAttributes( {haloColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'} ); console.log(props.attributes.haloColor)} }
					/>
					</div>
					
				)
			}


			return ([
				<InspectorControls>
					<div>
						<p>Counts up to a certain Number or Days since a date</p>
					</div>
					<PanelBody title={"Content"}>
						<RangeControl
							label= "Widget Size"
							value={ props.attributes.widgetSize }
							onChange={ (value)=>{props.setAttributes({widgetSize:value})} }
							min={ 150 }
							max={ 1000 }
							step ={1}
						/>
						<RangeControl
							label= "Content Alignment"
							value={ props.attributes.paddingTop }
							onChange={ (value)=>{props.setAttributes({paddingTop:value})} }
							min={ 0 }
							max={ props.attributes.widgetSize }
							step ={1}
						/>
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
						<TextControl
								label={<strong>Prefix</strong>}
								onChange={(value)=>{props.setAttributes({prefix:value})}}
								value = {props.attributes.prefix}
						/>
						<TextControl
									label={<strong>PostFix</strong>}
									onChange={(value)=>{props.setAttributes({postfix:value})}}
									value = {props.attributes.postfix}
						/>
				</div>
					</PanelBody>
					<PanelBody title={"Styling and color"}>

						<SelectControl
									label="Background Shape"
									value={props.attributes.counterShapeClass}
									options={[
										{label: 'None', value: ''},
										{ label: 'Square', value: 'cw-square' },
										{ label: 'Round', value: 'cw-round' },
										{label: 'Halo', value: 'cw-halo'}
									]}
									onChange={(value)=>{props.setAttributes({counterShapeClass:value})}}
						/>

						{colorControls}

						<label class="components-base-control__label">Number color</label>
						<ColorPalette
							value = { props.attributes.numberFontColor }
							onChange={(value)=>{props.setAttributes({numberFontColor:value})}}
							colors = {fontDefaultColors}
						/>
						
						<SelectControl
									label="Number Font"
									value={props.attributes.numberFontFamily}
									options={FONTS}
									onChange={(value)=>{props.setAttributes({numberFontFamily:value})}}
						/>

						<RangeControl
							label= "Number Font Size"
							value={ props.attributes.numberFontSize }
							onChange={ (value)=>{props.setAttributes({numberFontSize:value})} }
							min={ 1 }
							max={ 8 }
							step ={0.1}
						/>

						<label class="components-base-control__label">Title color</label>
						<ColorPalette
							value = { props.attributes.titleFontColor }
							onChange={(value)=>{props.setAttributes({titleFontColor:value})}}
							colors = {fontDefaultColors}
						/>
						<SelectControl
									label="Title Font"
									value={props.attributes.titleFontFamily}
									options={FONTS}
									onChange={(value)=>{props.setAttributes({titleFontFamily:value})}}
						/>
						<RangeControl
							label= "Title Font Size"
							value={ props.attributes.titleFontSize }
							onChange={ (value)=>{props.setAttributes({titleFontSize:value})} }
							min={ 1 }
							max={ 8 }
							step ={0.1}
						/>
						
						
					</PanelBody>
				</InspectorControls>
				,
				<div className="cw-holder">
					<div className={"counter-widget"+" "+props.attributes.counterShapeClass} style={styling}>
						<div className="content" style={contentStyling}>
							<div className="cw-number" style={numberStyling}>
								<span className="cw-prefix">{props.attributes.prefix}</span>
								<span className="cw-span-number">{props.attributes.number}</span>
								<span className="cw-postfix">{props.attributes.postfix}</span>
							</div>
							<p className="cw-title" style={titleStyling}> {props.attributes.title} </p>
	
						</div>
					</div>
				</div>
			])
		}
	,
	save: function(props) {
		var styling = {
			backgroundColor: (props.attributes.counterShapeClass == '')?'transparent':props.attributes.backgroundColor,
			width: props.attributes.widgetSize+"px",
			height: props.attributes.widgetSize+"px",
			boxShadow: (props.attributes.counterShapeClass != 'cw-halo')?'none':"0 0 25px "+props.attributes.haloColor	
		}

		var titleStyling = {
			color: props.attributes.titleFontColor,
			fontFamily: props.attributes.titleFontFamily,
			fontSize: props.attributes.titleFontSize + 'em',
		}

		var numberStyling = {
			color: props.attributes.numberFontColor,
			fontFamily: props.attributes.numberFontFamily,
			fontSize: props.attributes.numberFontSize + 'em',
		}

		var contentStyling = {
			paddingTop: props.attributes.paddingTop+'px'
		}
		return (
			<div className="cw-holder">
				<div className={"counter-widget"+" "+props.attributes.counterShapeClass} style={styling} data-done={0}>
					<div className="content" style={contentStyling}>
						<div className="cw-number" style={numberStyling}>
							<span className="cw-prefix">{props.attributes.prefix}</span>
							<span className="cw-span-number">{props.attributes.number}</span>
							<span className="cw-postfix">{props.attributes.postfix}</span>
						</div>
						<p className="cw-title" style={titleStyling}> {props.attributes.title} </p>
					</div>
				</div>
			</div>
		);
		},
})
