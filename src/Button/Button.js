

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
var buttonBlockIcon=(
	<svg width={800} height={800} viewBox="0 0 800 800">
      <image
        x={161}
        y={343}
        width={477}
        height={111}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd0AAABvCAMAAACeluqWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEU2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGo2yGoAAAAcFDiVAAAAH3RSTlMABlam3/nz11VR21IDiVTj5Ftcq6zg+PLZB4qTlFP6t2bvfgAAAAFiS0dEILNrPYAAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkBwYBERMA73gBAAABnUlEQVR42u3Wa07CABBF4amA1toWCsUHKu5/l1I0rIDJJCfnW8FNzp8bsWgeVuvNjxgen1ZtEzfPXfUg3Vn38t+2H6qnKMHQX+sal2lY4o7VK5RkvByqbfUIJdk1MVVvUJp9HKonKM0cx+oJSnOM1+oJSrOJ6gVKZF0y65JZl8y6ZNYlsy6ZdcmsS2ZdMuuSWZfMumTWJbMumXXJrEtmXTLrklmXzLpk1iWzLpl1yaxLZl0y65JZl8y6ZNYlsy6ZdcmsS2ZdMuuSWZfMumTWJbMumXXJrEtmXTLrklmXzLpk1iWzLpl1yaxLZl0y65JZl8y6ZNYlsy6ZdcmsS2ZdMuuSWZfMumTWJbMumXXJrEtmXTLrklmXzLpk1iWzLpl1yaxLZl0y65JZl8y6ZNYlsy6ZdcmsS2ZdMuuSWZfMumTWJbMumXXJrEtmXTLrksVb9QKl2cR79QSlOcaheoLSzDFVT1CafTTb6g1KsvuIaKtHKEkbF6fqFUpxWuJG/1m9Qwm++vjz3VVP0Z11Y9w007w+Vw/SnZzX89Rcu/4CtlcBl9E+D6EAAAAASUVORK5CYII="
      />
      <path fill="#fff" stroke="#040404" d="M322 390h156v17H322z" />
    </svg>
)

registerBlockType( 'k2/classic-button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Classic Button' ), // Block title.
	icon: {
		src: buttonBlockIcon
	} ,
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
		AnimatedButtonLink: {
			type: 'string',
			default: 'https://www.k2blocks.com'
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
			// console.log("Yes")
			// console.log(value)
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


		function onChangeButtonLink(NewLink) {
			setAttributes({
				AnimatedButtonLink: NewLink
			})
		}




		function onChangeButtonLetterSpacing(NewLetterSpacing) {
			setAttributes({
				AnimatedLetterSpacing: NewLetterSpacing
			})
		}


		function onChangeAlertIconActive(value) {

			if (value.target.tagName === 'SPAN') {

				var MainDiv = document.getElementById( "k2-CB-icon-list-wrapper-id" );
				var Spans = MainDiv.getElementsByTagName( 'span' );
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].className.includes( 'k2-CB-active' )) {
						Spans[i].className = Spans[i].className.replace( 'k2-CB-active', '' )
					}
				}
				setAttributes( {
					AlertBoxIconType: value.target.className
				} )
				console.log( value.target.className )
				value.target.className = value.target.className + ' k2-CB-active'
			}
		}


		//helper for alignment icons
		function onChangeAlignmentIconChange(value) {

			if (value.target.tagName === 'SPAN'){
				var ParentDiv = value.target.parentNode
				var MainDiv = ParentDiv.parentNode
				var Spans = MainDiv.getElementsByTagName('div');
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].getElementsByTagName('span')[0].className.includes('k2-CB-active')){
						Spans[i].getElementsByTagName('span')[0].className = Spans[i].getElementsByTagName('span')[0].className.replace('k2-CB-active','')
					}
				}
				value.target.className = value.target.className + ' k2-CB-active'

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


				<div className={'k2-CB-icon-list-wrapper'}>
					<div>
						<label><strong>Select Icon</strong></label>
					</div>
					<div id='k2-CB-icon-list-wrapper-id' className={'k2-CB-icon-list-sub-wrapper'}  onClickCapture={onChangeAlertIconActive}>
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
						label={<strong> Button Text </strong>}
						onChange={onChangeButtonAnimatedText }
						value={ attributes.AnimatedButtonText}
					/>


					<TextControl
						label={<strong> Button Link </strong>}
						onChange={onChangeButtonLink }
						value={ attributes.AnimatedButtonLink}
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
						<div id = {'AlignmentIconsParent'} className={'k2-CB-inspector-control-alignment'} onClick={onChangeAlignmentIconChange}>

							<div className={'k2-CB-inspector-control-alignment-single'}  onClick={() => {setAttributes({textAlignment:'flex-start'})}}>
								<span className="fa fa-align-left k2-CB-alignment-icon-style" ></span>
							</div>
							<div className={'k2-CB-inspector-control-alignment-single'} onClick={() => {setAttributes({textAlignment:'center'})}}>
								<span className="fa fa-align-center k2-CB-alignment-icon-style k2-CB-active"></span>
							</div>
							<div className={'k2-CB-inspector-control-alignment-single'} onClick={() => {setAttributes({textAlignment:'flex-end'})}}>
								<span className="fa fa-align-right k2-CB-alignment-icon-style"></span>
							</div>
						</div>
					</PanelRow>


				</PanelBody>










				<PanelBody>


					<PanelRow>
						<p><strong>Button color</strong></p>
						<div className="k2-CB-popup">
							<span style={{backgroundColor: attributes.ButtonColor}} className={ 'k2-CB-dot' } onClick={ myFunction }>
							</span>
							<span className="k2-CB-popup-text"  hidden={ true }>

								<div>
									<ColorPicker
										color={ attributes.textColor }
										onChangeComplete={ onChangeButtonColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											setAttributes( { ButtonColor: value } )
										} }
										value={ attributes.ButtonColor}
									/>
								</div>

							</span>
						</div>
					</PanelRow>


				</PanelBody>



				<PanelBody>


					<PanelRow>
						<p><strong>Text color</strong></p>
						<div className="k2-CB-popup">
							<span style={{backgroundColor: attributes.TextColor}} className={ 'k2-CB-dot' } onClick={ myFunction }>
							</span>
							<span className="k2-CB-popup-text"  hidden={ true }>

								<div>
									<ColorPicker
										color={ attributes.textColor }
										onChangeComplete={ onChangeTextColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											setAttributes( { TextColor: value } )
										} }
										value={ attributes.TextColor}
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

		var parentStyle = {justifyContent: attributes.textAlignment };
		var link = attributes.AnimatedButtonLink

		var sup = "parent.open('" + link + "')"

		const IconList = [
			{label: 'Rocket' , value: 'fa fa-rocket'},
			{label: 'Warning' ,value: 'fa fa-warning'},
			{label: 'aeroplane' ,value: 'fa fa-search'},
			{label: 'aeroplane' ,value: 'fa fa-envelope-o'}
			]



		return 	<div className="Outer" onClick={sup} style={parentStyle}>
			<button style={AnimatedButtonStyling} className="gradient-button gradient-button-1">
				<i className={attributes.AlertBoxIconType}></i>
				{
					attributes.AnimatedButtonText
				}
			</button>
		</div>
	}
});
