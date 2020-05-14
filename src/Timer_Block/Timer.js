import './style.scss';
import './editor.scss';
import {GLOBAL_FONTS} from '../Global_Fonts';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	InspectorControls,
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker,
	ColorPicker,
	CheckboxControl,
	TextControl,
	RangeControl

} = wp.components;

const accordionBlockIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="-69 0 512 512" width="512px" class=""><g>
		<path d="m270.894531 286.8125c-11.867187-12.816406-17.113281-18.976562-17.113281-30.738281 0-11.949219 0-19.164063 19.832031-39.921875 21.558594-22.5625 51.082031-53.46875 51.082031-156.667969 0-8.285156-5.96875-15-13.332031-15h-249.550781c-7.363281 0-13.332031 6.714844-13.332031 15 0 103.199219 29.527343 134.105469 51.082031 156.667969 12.367188 12.945312 19.832031 20.757812 19.832031 39.921875 0 9.523437-4.90625 15.253906-16 27.3125-21.867187 23.765625-54.914062 59.683593-54.914062 169.140625 0 8.28125 5.96875 15 13.332031 15h249.550781c7.363281 0 13.332031-6.71875 13.332031-15 0-107.621094-32.375-142.582032-53.800781-165.714844zm0 0" fill="#c4e8f2" data-original="#C4E8F2" class=""/>
		<g fill="#ffcd2a">
			<path d="m315.671875 441.351562-119.074219-106.664062c-5.699218-5.101562-14.320312-5.101562-20.019531 0l-119.070313 106.664062c-4.632812 4.148438-6.226562 10.722657-4.003906 16.53125 2.222656 5.804688 7.792969 9.640626 14.011719 9.640626h238.148437c6.21875 0 11.789063-3.832032 14.011719-9.640626 2.222657-5.808593.628907-12.382812-4.003906-16.53125zm0 0" data-original="#FFCD2A" class="" style={{fill:'#43CEA2'}} data-old_color="#FFCD2A"/><path d="m201.625 266.15625c0-8.304688-6.730469-15.035156-15.035156-15.035156-8.304688 0-15.035156 6.730468-15.035156 15.035156 0 8.300781 6.730468 15.03125 15.035156 15.03125 8.304687 0 15.035156-6.730469 15.035156-15.03125zm0 0" data-original="#FFCD2A" class="" style={{fill:'#43CEA2'}} data-old_color="#FFCD2A"/>
			<path d="m201.625 305.988281c0-8.304687-6.730469-15.035156-15.035156-15.035156-8.304688 0-15.035156 6.730469-15.035156 15.035156 0 8.300781 6.730468 15.03125 15.035156 15.03125 8.304687 0 15.035156-6.730469 15.035156-15.03125zm0 0" data-original="#FFCD2A" class="" style={{fill:'#43CEA2'}} data-old_color="#FFCD2A"/>
			<path d="m98.308594 155.128906c7.152344 15.058594 16.144531 23.421875 26.550781 33.101563 9.152344 8.511719 20.542969 19.109375 28.585937 34.011719 6.609376 12.246093 19.308594 19.855468 33.144532 19.855468 13.835937 0 26.535156-7.609375 33.140625-19.855468 8.042969-14.902344 19.433593-25.496094 28.585937-34.011719 10.410156-9.679688 19.402344-18.042969 26.550782-33.097657 3.820312-8.039062 6.890624-17.640624 9.132812-28.535156.910156-4.414062-.21875-9.003906-3.066406-12.5-2.847656-3.492187-7.117188-5.519531-11.625-5.519531h-165.4375c-4.511719 0-8.777344 2.027344-11.628906 5.523437-2.847657 3.492188-3.972657 8.082032-3.0625 12.5 2.242187 10.890626 5.3125 20.492188 9.128906 28.527344zm0 0" data-original="#FFCD2A" class="" style={{fill:'#43CEA2'}} data-old_color="#FFCD2A"/>
			</g>
			<path d="m61.8125 44.484375c-7.363281 0-13.332031 6.714844-13.332031 15 0 103.199219 29.527343 134.105469 51.082031 156.667969 12.367188 12.945312 19.832031 20.757812 19.832031 39.921875 0 9.523437-4.90625 15.253906-16 27.3125-21.867187 23.765625-54.914062 59.679687-54.914062 169.136719 0 8.285156 5.96875 15 13.332031 15h124.777344v-423.039063zm0 0" fill="#ddf1f8" data-original="#DDF1F8" class=""/>
			<path d="m176.578125 334.6875-119.070313 106.664062c-4.632812 4.148438-6.226562 10.722657-4.003906 16.53125 2.222656 5.804688 7.792969 9.640626 14.011719 9.640626h119.074219v-136.664063c-3.582032 0-7.160156 1.277344-10.011719 3.828125zm0 0" fill="#ffe353" data-original="#FFE353" class="active-path" style={{fill:'#4AE6B5'}} data-old_color="#ffe353"/>
			<path d="m186.589844 251.121094c-8.304688 0-15.035156 6.730468-15.035156 15.035156 0 8.300781 6.730468 15.03125 15.035156 15.03125zm0 0" fill="#ffe353" data-original="#FFE353" class="active-path" style={{fill:'#4AE6B5'}} data-old_color="#ffe353"/><path d="m186.589844 290.953125c-8.304688 0-15.035156 6.730469-15.035156 15.035156 0 8.300781 6.730468 15.03125 15.035156 15.03125zm0 0" fill="#ffe353" data-original="#FFE353" class="active-path" style={{fill:'#4AE6B5'}} data-old_color="#ffe353"/>
			<path d="m103.871094 108.574219c-4.511719 0-8.777344 2.027343-11.628906 5.523437-2.847657 3.496094-3.972657 8.085938-3.0625 12.5 2.242187 10.894532 5.3125 20.496094 9.128906 28.53125 7.152344 15.058594 16.144531 23.417969 26.550781 33.101563 9.152344 8.511719 20.542969 19.105469 28.585937 34.011719 6.609376 12.246093 19.308594 19.851562 33.144532 19.851562v-133.519531zm0 0" fill="#ffe353" data-original="#FFE353" class="active-path" style={{fill:'#4AE6B5'}} data-old_color="#ffe353"/>
			<path d="m16.175781 74.484375h340.828125c8.28125 0 15-6.714844 15-15v-44.484375c0-8.285156-6.71875-15-15-15h-340.828125c-8.285156 0-15 6.714844-15 15v44.484375c0 8.285156 6.714844 15 15 15zm0 0" fill="#006091" data-original="#006091" class="" style={{fill:'#400CBA'}} data-old_color="#006091"/><path d="m358.179688 437.523438h-343.179688c-8.285156 0-15 6.71875-15 15v44.476562c0 8.285156 6.714844 15 15 15h343.175781c8.285157 0 15-6.714844 15-15v-44.476562c.003907-8.28125-6.714843-15-14.996093-15zm0 0" fill="#006091" data-original="#006091" class="" style={{fill:'#400CBA'}} data-old_color="#006091"/>
			<path d="m16.175781 0c-8.285156 0-15 6.714844-15 15v44.484375c0 8.285156 6.714844 15 15 15h170.414063v-74.484375zm0 0" fill="#0077b1" data-original="#0077B1" class="" style={{fill:'#470DD0'}} data-old_color="#0077b1"/>
		<path d="m15 437.523438c-8.285156 0-15 6.71875-15 15v44.476562c0 8.285156 6.714844 15 15 15h171.589844v-74.476562zm0 0" fill="#0077b1" data-original="#0077B1" class="" style={{fill:'#470DD0'}} data-old_color="#0077b1"/>
		</g>
		</svg>
);
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

registerBlockType( 'k2/timer-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Timer',
	icon: {
		src: accordionBlockIcon,
	},
	category: 'magik-blocks',
	attributes: {
		minutes: {type:'integer',default:0},// for date
		hours: {type:'integer',default:0},
		date: {type:'integer',default:1},
		month:{type:'integer',default:1},
		year:{type:'integer',default:2020},

		days_: {type:'integer',default:0}, //for showing on timer
		hours_: {type:'integer',default:0},
		minutes_: {type:'integer',default:0},
		seconds_: {type:'integer',default:0},

		TimerValueBackgroundColor: {
			type: 'string',
			default: '#B2A6FF'
		},
		TimerValueBackGroundShadow: {
			type: 'boolean',
			default:'true'
		},
		TimerValueColor: {
			type: 'string',
			default: 'white'
		},
		numberFontSize: {
			type: 'number',
			default: 3
		},
		numberFontFamily: {
			type: 'string',
			default: '"Montserrat",Sans-serif'
		},
		TimerTextColor: {
			type: 'string',
			default: '#B2A6FF'
		},
		textFontFamily: {
			type: 'string',
			default: '"Montserrat",Sans-serif'
		},
		textFontSize : {
			type: 'number',
			default: 1
		},
		TimerLayout: {
			type: 'string',
			default: 'Classic'
		},
		BlockBackgroundColor: {
			type: 'string',
			default: 'transparent'
		},
		BlockBackgroundShadow: {
			type: 'boolean'
		},
		BlockMinWidth: {
			type: 'number',
			default: 5
		},
		CircleBlockRadium: {
			type: 'number',
			default: 0
		}

	},

	edit: function(props) {
			function calculateDateDifference(year, month, date,hours,minutes){
				var attr = props.attributes;
				var targetDate = new Date(year, month, date,hours,minutes,0,0);
				var variable1 = new Date(); //todays date
				console.log("Todays date: " +variable1.toLocaleString())
				console.log("Set date:"+targetDate.toLocaleString())
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

				console.log("result: "+days_+" "+hours_+" "+minutes_+" "+seconds_)
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
				calculateDateDifference(parseInt(date[0]),parseInt(date[1])-1,parseInt(date[2]),parseInt(time[0]),parseInt(time[1]));
			}

			function onChangeBackgroundColor(value) {
				if(props.attributes.TimerLayout == 'Classic')
					props.setAttributes(
						{
							TimerValueBackgroundColor: 'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')',
						}
					)
				else{
					props.setAttributes(
						{
							BlockBackgroundColor: 'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'
						}
					)
				}
			}

			function toggleShadow(){
				if (props.attributes.TimerLayout == 'Classic'){
					props.setAttributes({
						TimerValueBackGroundShadow:!props.attributes.TimerValueBackGroundShadow,
						BlockBackgroundShadow: false,
					})
				}
				else{
					props.setAttributes({
						TimerValueBackGroundShadow:false,
						BlockBackgroundShadow: !props.attributes.BlockBackgroundShadow,
					})
				}
			}

			function onChangeTimerValueColor(value) {
				props.setAttributes({
					TimerValueColor: 'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'
				})
			}

			function onChangeTimerTextColor(value) {
				props.setAttributes({
					TimerTextColor: 'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'
				})
			}

			function onChangeTimerLayout(NewLayout) {
				props.setAttributes({
					TimerLayout: NewLayout
				})

				if (NewLayout == 'Classic'){
					props.setAttributes({
						TimerValueBackgroundColor: props.attributes.BlockBackgroundColor,
						TimerValueBackGroundShadow: props.attributes.BlockBackgroundShadow,
						BlockBackgroundColor: 'transparent',
						BlockBackgroundShadow: false,
						BlockMinWidth: 5,
						CircleBlockRadium: 1,
						TimerTextColor: props.attributes.BlockBackgroundColor
					})
				} else if (NewLayout == 'Cover'){
					props.setAttributes({
						BlockBackgroundColor: props.attributes.TimerValueBackgroundColor,
						BlockBackgroundShadow: props.attributes.TimerValueBackGroundShadow,
						TimerValueBackgroundColor: 'transparent',
						TimerValueBackGroundShadow: false,
						BlockMinWidth: 15,
						CircleBlockRadium: 1,
						TimerTextColor: 'white'

					})
				}
			}
			var fontDefaultColors = [
				{ color: '#32897A' },
				{  color: '#1995AD' },
				{  color: '#011A27' },
				{  color: '#F69454' },
			];

			const TimerBlockStyling = {
				backgroundColor: props.attributes.BlockBackgroundColor,
				boxShadow: (props.attributes.BlockBackgroundShadow)?"1px 1px 10px #888888":'',
				minWidth: props.attributes.BlockMinWidth + '%',
				borderRadius: '2%'
			}
			const TimerValueContainerStyling = {
				backgroundColor: props.attributes.TimerValueBackgroundColor,
				boxShadow: (props.attributes.TimerValueBackGroundShadow)?"1px 1px 10px #888888":'',
				color: props.attributes.TimerValueColor,
				fontSize: props.attributes.numberFontSize+"em",
				fontFamily: props.attributes.numberFontFamily,
			}

			const TimerTextContainerStyling = {
				color: props.attributes.TimerTextColor,
				fontSize: props.attributes.textFontSize+"em",
				fontFamily: props.attributes.textFontFamily
			}
			return ([
				<InspectorControls>

					<PanelBody title={'Date Time Settings'}>
							<DateTimePicker
								currentDate = {new Date(props.attributes.year,props.attributes.month,props.attributes.date,props.attributes.hours,props.attributes.minutes,0,0)}
								onChange={updateDateTime}
							/>
					</PanelBody>

					<PanelBody title={"Background"}>
						<SelectControl
									label="Skin"
									value={props.attributes.TimerLayout}
									options={[
										{ label: 'Classic', value: 'Classic' },
										{ label: 'Cover', value: 'Cover'}
									]}
									onChange={onChangeTimerLayout}
						/>
						<CheckboxControl
							label="Enable shadow"
							help="Should the timer have a shadow?"
							checked={ ( props.attributes.TimerLayout == 'Classic')? props.attributes.TimerValueBackGroundShadow: props.attributes.BlockBackgroundShadow }
							onChange={ toggleShadow }
						/>
						<label class="components-base-control__label">Timer color</label>
						<ColorPicker
							color={ ( props.attributes.TimerLayout == 'Classic')? props.attributes.TimerValueBackgroundColor : props.attributes.BlockBackgroundColor }
							onChangeComplete={onChangeBackgroundColor}
						/>
						<TextControl
							onChange={(value)=>{
								if(props.attributes.TimerLayout == 'Classic')props.setAttributes({TimerValueBackgroundColor: value,})
								else{props.setAttributes({BlockBackgroundColor: value})}}
							}
							value = {( props.attributes.TimerLayout == 'Classic')? props.attributes.TimerValueBackgroundColor : props.attributes.BlockBackgroundColor}
						/>
					</PanelBody>
					<PanelBody title={"Numbers Styling"}>
						<label class="components-base-control__label">Numbers color</label>
						<ColorPicker
							color={ props.attributes.TimerValueColor}
							onChangeComplete={onChangeTimerValueColor}
						/>
						<TextControl
							onChange={(value)=>{props.setAttributes({TimerValueColor:value})}}
							value = {props.attributes.TimerValueColor}
						/>
						<RangeControl
							label= "Number Font Size"
							value={ props.attributes.numberFontSize }
							onChange={ (value)=>{props.setAttributes({numberFontSize:value})} }
							min={ 1 }
							max={ 8 }
							step ={0.1}
						/>
						<SelectControl
							label="Number Font"
							value={props.attributes.numberFontFamily}
							options={GLOBAL_FONTS}
							onChange={(value)=>{props.setAttributes({numberFontFamily:value})}}
						/>
					</PanelBody>

					<PanelBody title={"Text Styling"}>
						<label class="components-base-control__label">Text color</label>
						<ColorPicker
							color={ props.attributes.TimerTextColor }
							onChangeComplete={onChangeTimerTextColor}
						/>
						<TextControl
							onChange={(value)=>{props.setAttributes({TimerTextColor:value})}}
							value = {props.attributes.TimerTextColor}
						/>
						<RangeControl
							label= "Text Font Size"
							value={ props.attributes.textFontSize }
							onChange={ (value)=>{props.setAttributes({textFontSize:value})} }
							min={ 1 }
							max={ 8 }
							step ={0.1}
						/>
						<SelectControl
							label="Text Font"
							value={props.attributes.textFontFamily}
							options={GLOBAL_FONTS}
							onChange={(value)=>{props.setAttributes({textFontFamily:value})}}
						/>
					</PanelBody>	
				</InspectorControls>
				,
				<div className={'TimerParentContainer'}>


					<div style={TimerBlockStyling} className={'TimerBlockContainer'}>
						<span style={{display: 'block'}}>
							<div style={TimerValueContainerStyling} className='TimerValueContainer'>
								{
									(props.attributes.days_ < 10)? '0' + props.attributes.days_ : props.attributes.days_
								}
							</div>
							<div style={TimerTextContainerStyling} className={'TimerTextContainer'} >
								Days
							</div>
						</span>
					</div>


					<div style={TimerBlockStyling} className={'TimerBlockContainer'}>
						<span style={{display: 'block'}}>
							<div style={TimerValueContainerStyling} className={'TimerValueContainer'}>
								{
									(props.attributes.hours_ < 10)? '0' + props.attributes.hours_ : props.attributes.hours_
								}
							</div>
							<div style={TimerTextContainerStyling} className={'TimerTextContainer'} >
								Hours
							</div>
						</span>
					</div>


					<div style={TimerBlockStyling} className={'TimerBlockContainer'}>
						<span style={{display: 'block'}}>
							<div style={TimerValueContainerStyling} className={'TimerValueContainer'}>
								{
									(props.attributes.minutes_ < 10)? '0' + props.attributes.minutes_ : props.attributes.minutes_
								}
							</div>
							<div style={TimerTextContainerStyling} className={'TimerTextContainer'} >
								Minutes
							</div>
						</span>
					</div>


					<div style={TimerBlockStyling} className={'TimerBlockContainer'}>
						<span style={{display: 'block'}}>
							<div style={TimerValueContainerStyling} className={'TimerValueContainer'}>
								{
									(props.attributes.seconds_ < 10)? '0' + props.attributes.seconds_ : props.attributes.seconds_
								}
							</div>
							<div style={TimerTextContainerStyling} className={'TimerTextContainer'} >
								Seconds
							</div>
						</span>
					</div>
				</div>
			])
		}
	,
	save: function(props) {
	var timer_str = props.attributes.year+","+props.attributes.month+","+props.attributes.date+","+props.attributes.hours+","+props.attributes.minutes+","+0+","+0;
	const TimerBlockStyling = {
		backgroundColor: props.attributes.BlockBackgroundColor,
		boxShadow: (props.attributes.BlockBackgroundShadow)?"1px 1px 10px #888888":'',
		minWidth: props.attributes.BlockMinWidth + '%',
		borderRadius: '1%'
	}
	const TimerValueContainerStyling = {
		backgroundColor: props.attributes.TimerValueBackgroundColor,
		boxShadow: (props.attributes.TimerValueBackGroundShadow)?"1px 1px 10px #888888":'',
		color: props.attributes.TimerValueColor
	}

	const TimerTextContainerStyling = {
		color: props.attributes.TimerTextColor
	}


		return (
			<div className={'TimerParentContainer'} data-time={timer_str}>

				<div style={TimerBlockStyling} className={'TimerBlockContainer'} >
						<span style={{display: 'block'}}>
							<div style={TimerValueContainerStyling} className={'TimerValueContainer tw-digit-days'}>
								{
									(props.attributes.days_ < 10)? '0' + props.attributes.days_ : props.attributes.days_
								}
							</div>
							<div style={TimerTextContainerStyling} className={'TimerTextContainer'} >
								Days
							</div>
						</span>
				</div>


				<div style={TimerBlockStyling} className={'TimerBlockContainer'}>
						<span style={{display: 'block'}}>
							<div style={TimerValueContainerStyling} className={'TimerValueContainer tw-digit-hours'}>
								{
									(props.attributes.hours_ < 10)? '0' + props.attributes.hours_ : props.attributes.hours_
								}
							</div>
							<div style={TimerTextContainerStyling} className={'TimerTextContainer'} >
								Hours
							</div>
						</span>
				</div>


				<div style={TimerBlockStyling} className={'TimerBlockContainer'}>
						<span style={{display: 'block'}}>
							<div style={TimerValueContainerStyling} className={'TimerValueContainer tw-digit-minutes'}>
								{
									(props.attributes.minutes_ < 10)? '0' + props.attributes.minutes_ : props.attributes.minutes_
								}
							</div>
							<div style={TimerTextContainerStyling} className={'TimerTextContainer'} >
								Minutes
							</div>
						</span>
				</div>


				<div style={TimerBlockStyling} className={'TimerBlockContainer'}>
						<span style={{display: 'block'}}>
							<div style={TimerValueContainerStyling} className={'TimerValueContainer tw-digit-seconds'}>
								{
									(props.attributes.seconds_ < 10)? '0' + props.attributes.seconds_ : props.attributes.seconds_
								}
							</div>
							<div style={TimerTextContainerStyling} className={'TimerTextContainer'} >
								Seconds
							</div>
						</span>
				</div>

			</div>
	  );
	},
})
