

//  Import CSS.
import './editor.scss';
import './style.scss';
import { GLOBAL_FONTS } from '../Global_Fonts';
import { GLOBAL_ICONS} from '../Global_Icons'




const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType,
	AlignmentToolbar
	// For attribute sources
} = wp.blocks;
const {
	RichText,
	InspectorControls,
	ColorPalette,
	PanelColorSettings
} = wp.editor;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	CheckboxControl,
	Panel,
	PanelRow,
	ColorPicker,
	TextControl
} = wp.components;







/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new Progress_Bar_Block provided a unique name and an object defining its
 * behavior. Once registered, the Progress_Bar_Block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The Progress_Bar_Block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */



registerBlockType( 'k2/classic-button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Classic Button' ), // Block title.
	icon: 'smiley' ,
	category: 'k2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Classic Button' ),
		__( 'Magik Blocks' ),
	],
	attributes: {
		AnimatedButtonWidth: {
			type: 'number',
			default: 20
		},
		AnimatedButtonBorderRadius: {
			type: 'number',
			default: 10
		},
		AnimatedButtonBorder: {
			type: 'number',
			default: 10
		},
		AnimatedButtonText: {
			type: 'string',
			default: 'Animated Button'
		},
		AnimatedLetterSpacing: {
			type: 'number',
			default: 0
		},

		ButtonColor:{
			type:'string',
			default: '#49119c'
		},
		TextColor:{
			type:'string',
			default: 'white'
		},
		AlertBoxIconType:{
			type: 'string',
			default: 'fa fa-rocket'
		},
		textFontFamily: {
			type: 'string',
			default: '"Gill Sans",Sans-serif'
		},
		textAlignment: {
			type: 'string',
			default: 'center'
		}



	},




	edit( { attributes, setAttributes } ) {
		const AnimatedButtonStyling = {
			width: attributes.AnimatedButtonWidth + 'rem',
			borderRadius: attributes.AnimatedButtonBorderRadius + 'rem',
			border: attributes.AnimatedButtonBorder + 'rem',
			borderColor: 'black',
			letterSpacing: attributes.AnimatedLetterSpacing + 'rem',
			backgroundColor: attributes.ButtonColor, fontSize: attributes.ButtonSize+"em",
			color: attributes.TextColor,
			fontFamily: attributes.textFontFamily,
			boxShadow: (attributes.BlockBackgroundShadow)?"0 0 10px " + attributes.ButtonColor + " , 0 0 40px " +  attributes.ButtonColor + ", 0 0 80px " + attributes.ButtonColor:''



		}


		var parentStyle = {justifyContent: attributes.textAlignment
		};


		const IconList = [
			{label: 'Rocket' , value: 'fa fa-rocket'},
			{label: 'Warning' ,value: 'fa fa-warning'},
			{label: 'aeroplane' ,value: 'fa fa-search'},
			{label: 'aeroplane' ,value: 'fa fa-envelope-o'}
		]

		function onChangeAnimatedButtonWidth(NewWidth) {
			setAttributes({
				AnimatedButtonWidth: NewWidth
			})
		}
		function onChangeAnimatedButtonBorderRadius(NewBorderRadius) {
			setAttributes({
				AnimatedButtonBorderRadius: NewBorderRadius
			})
		}
		function onChangeAnimatedButtonBorder(NewBorder) {
			setAttributes({
				AnimatedButtonBorder: NewBorder
			})
		}

		function onChangeButtonColor(value){
			setAttributes( {
				ButtonColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'});
		}
		function onChangeTextColor(value){
			console.log("Yes")
			console.log(value)
			setAttributes( {
				TextColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'});
		}

		function myFunction(value) {
			var ParentDiv = value.target.parentNode
			var PopupDiv = ParentDiv.getElementsByTagName('span')
			if (PopupDiv[1].hidden  === true){
				PopupDiv[1].hidden  = false
			} else if (PopupDiv[1].hidden  === false){
				PopupDiv[1].hidden  = true
			}

		}





		function onChangeButtonAnimatedText(NewText) {
			setAttributes({
				AnimatedButtonText: NewText
			})
		}

		function onChangeButtonLetterSpacing(NewLetterSpacing) {
			setAttributes({
				AnimatedLetterSpacing: NewLetterSpacing
			})
		}


		function onChangeAlertIconActive(value) {

			var MainDiv = document.getElementById("k2-ib-icon-list-wrapper-id");
			var Spans = MainDiv.getElementsByTagName('span');
			for (var i = 0; i < Spans.length; i++) {
				if (Spans[i].className.includes('k2-ib-active')){
					Spans[i].className = Spans[i].className.replace('k2-ib-active','')
				}
			}
			setAttributes({
				AlertBoxIconType: value.target.className
			})
			console.log(value.target.className)
			value.target.className = value.target.className + ' k2-ib-active'
		}


		//helper for alignment icons
		function onChangeAlignmentIconChange(value) {

			if (value.target.tagName === 'SPAN'){
				var ParentDiv = value.target.parentNode
				var MainDiv = ParentDiv.parentNode
				var Spans = MainDiv.getElementsByTagName('div');
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].getElementsByTagName('span')[0].className.includes('k2-ib-active')){
						Spans[i].getElementsByTagName('span')[0].className = Spans[i].getElementsByTagName('span')[0].className.replace('k2-ib-active','')
					}
				}
				value.target.className = value.target.className + ' k2-ib-active'

			}

		}


		function toggleShadow(){
			if (attributes.TimerLayout == 'Classic'){
				setAttributes({
					TimerValueBackGroundShadow:!attributes.TimerValueBackGroundShadow,
					BlockBackgroundShadow: false,
				})
			}
			else{
				setAttributes({
					TimerValueBackGroundShadow:false,
					BlockBackgroundShadow: !attributes.BlockBackgroundShadow,
				})
			}
		}


		return [
			<InspectorControls>


				<div className={'k2-ib-icon-list-wrapper'}>
					<div>
						<label><strong>Select Icon</strong></label>
					</div>
					<div id='k2-ib-icon-list-wrapper-id' className={'k2-ib-icon-list-sub-wrapper'}  onClickCapture={onChangeAlertIconActive}>
						{GLOBAL_ICONS.map((value, index) => {
							return <span className={'fa '+value}></span>
						})}
					</div>
				</div>

				<SelectControl
					label="Heading Font"
					value={attributes.textFontFamily}
					options={GLOBAL_FONTS}
					onChange={(value)=>{setAttributes({textFontFamily:value})}}
				/>




				<PanelBody title={'Button Customization'}>
					<RangeControl
						label={<strong> Button Width </strong>}
						value={ attributes.AnimatedButtonWidth }
						onChange={ onChangeAnimatedButtonWidth }
						min={ 13 }
						max={ 100 }
						step ={1}
					/>
					<RangeControl
						label={<strong> Button Border Radius </strong>}
						value={ attributes.AnimatedButtonBorderRadius }
						onChange={ onChangeAnimatedButtonBorderRadius }
						min={ 0 }
						max={ 100 }
						step ={.5}
					/>


					<TextControl
						onChange={onChangeButtonAnimatedText }
						value={ attributes.AnimatedButtonText}
					/>







					<RangeControl
						label={<strong> Letter Spacing </strong>}
						value={ attributes.AnimatedLetterSpacing }
						onChange={ onChangeButtonLetterSpacing}
						min={ 0 }
						max={ 10 }
						step ={.1}
					/>





					<PanelRow>
						<div style={{paddingBottom: '2%'}}>
							<label><strong>Alignment</strong></label>
						</div>
						<div id = {'AlignmentIconsParent'} className={'k2-hb-inspector-control-alignment'} onClick={onChangeAlignmentIconChange}>

							<div className={'k2-hb-inspector-control-alignment-single'}  onClick={() => {setAttributes({textAlignment:'flex-start'})}}>
								<span className="fa fa-align-left k2-hb-alignment-icon-style" ></span>
							</div>
							<div className={'k2-hb-inspector-control-alignment-single'} onClick={() => {setAttributes({textAlignment:'center'})}}>
								<span className="fa fa-align-center k2-hb-alignment-icon-style k2-hb-active"></span>
							</div>
							<div className={'k2-hb-inspector-control-alignment-single'} onClick={() => {setAttributes({textAlignment:'flex-end'})}}>
								<span className="fa fa-align-right k2-hb-alignment-icon-style"></span>
							</div>
						</div>
					</PanelRow>


				</PanelBody>










				<PanelBody>


					<PanelRow>
						<p><strong>Button color</strong></p>
						<div className="k2-hb-inspector-popup">
                            <span style={{backgroundColor:attributes.ButtonColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
                                </span>
							<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

                                <div>
                                    <ColorPicker
										color={ attributes.textColor }
										onChangeComplete={ onChangeButtonColor }
									/>
                                    <TextControl
										onChange={ ( value ) => {
											setAttributes( { ButtonColor: value } )

										} }
										value={ attributes.ButtonColor }
									/>
                                </div>

                            </span>
						</div>
					</PanelRow>


				</PanelBody>



				<PanelBody>




					<PanelRow>
						<p><strong>Text color</strong></p>
						<div className="k2-hb-inspector-popup">
                            <span style={{backgroundColor:attributes.TextColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
                                </span>
							<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

                                <div>
                                    <ColorPicker
										color={ attributes.textColor }
										onChangeComplete={ onChangeTextColor }
									/>
                                    <TextControl
										onChange={ ( value ) => {
											setAttributes( { TextColor: value } )

										} }
										value={ attributes.TextColor }
									/>
                                </div>

                            </span>
						</div>
					</PanelRow>


					<CheckboxControl
						label="Enable shadow"
						help="Should the timer have a shadow?"
						checked={ ( attributes.TimerLayout == 'Classic')? attributes.TimerValueBackGroundShadow: attributes.BlockBackgroundShadow }
						onChange={ toggleShadow }
					/>


				</PanelBody>






			</InspectorControls>
			,





			<div className="Outer" style={parentStyle}>
			<button style={AnimatedButtonStyling} className="gradient-button gradient-button-1">
						<i className={attributes.AlertBoxIconType}></i>
						{
							attributes.AnimatedButtonText
						}
					</button>
</div>


			]
	},

	save( { attributes } ) {

		const AnimatedButtonStyling = {
			width: attributes.AnimatedButtonWidth + 'rem',
			borderRadius: attributes.AnimatedButtonBorderRadius + 'rem',
			border: attributes.AnimatedButtonBorder + 'rem',
			borderColor: 'black',
			letterSpacing: attributes.AnimatedLetterSpacing + 'rem',
			backgroundColor: attributes.ButtonColor, fontSize: attributes.ButtonSize+"em",
			color: attributes.TextColor,
			fontFamily: attributes.textFontFamily,
			boxShadow: (attributes.BlockBackgroundShadow)?"0 0 10px " + attributes.ButtonColor + " , 0 0 40px " +  attributes.ButtonColor + ", 0 0 80px " + attributes.ButtonColor:''



		}



		var parentStyle = {justifyContent: attributes.textAlignment
		};


		const IconList = [
			{label: 'Rocket' , value: 'fa fa-rocket'},
			{label: 'Warning' ,value: 'fa fa-warning'},
			{label: 'aeroplane' ,value: 'fa fa-search'},
			{label: 'aeroplane' ,value: 'fa fa-envelope-o'}
			]





		return 	<div className="Outer" style={parentStyle}>
			<button style={AnimatedButtonStyling} className="gradient-button gradient-button-1">
				<i className={attributes.AlertBoxIconType}></i>
				{
					attributes.AnimatedButtonText
				}
			</button>
		</div>
	}
});
