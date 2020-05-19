import './style.scss';
import './editor.scss';
import {GLOBAL_FONTS} from '../Global_Fonts';
import { InnerBlocks } from '@wordpress/block-editor';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	InspectorControls,
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	ColorPicker,
	TextControl,
	RangeControl,
	PanelRow

} = wp.components;

const modalBlockIcon =  (
    <svg width={800} height={800} viewBox="0 0 800 800">
      <image
        width={800}
        height={800}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAC4jAAAuIwF4pT92AAAnfElEQVR42u3df5BlZ13n8c/tnoRAJCF2CAlEWFLsqmtZtaWC 6Fq15arrj9USF1CU0pjZiKJZ0OgQRMAIJBGGCLuFurVWze5ay66I4C8sKYVVATGACLJRlEVERYVN RiHKr2S6z/5xepJOZ2Yyfe493+eee1+vqq6e9Nw+85zuzjn33c95zp11XRcAAIAKG60HAAAArA8B AgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIA AJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACU ESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEg AABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAA QBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZ AQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQEC AACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAA lBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQR IAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAA AEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABA GQECAACUESAAAEAZAQIAAJQRIAAAQBkBAgAAlBEgAABAGQECAACUESAAAEAZAQIAAJQRIAAAQBkB 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 39h6TAAsJwECwELsRsiRJG9tPRYAltes67rWYwAAANaEGRAAAKCMAAEAAMoIEAAAoIwAAQAAyggQ AACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAA oIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCM AAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAAB AADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAA yggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoI EAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAA AKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACg jAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwA AQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEA AMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADK CBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQ AACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAA oIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCM AAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAAB AADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAA yggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoI EAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAA AKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACg jAABAADKCBAAAKCMAAEAAMoIEAAAoIwAAQAAyggQAACgjAABAADK/H/bHD8ZnRj6HgAAACV0RVh0 ZGF0ZTpjcmVhdGUAMjAyMC0wNS0xNlQxODo1Mzo1MiswMzowMHaH3BYAAAAldEVYdGRhdGU6bW9k aWZ5ADIwMjAtMDUtMTZUMTg6NTM6NTIrMDM6MDAH2mSqAAAAAElFTkSuQmCC"
      />
    </svg>
  );
//   const MY_TEMPLATE = [
// 	[ 'core/heading', { placeholder: 'This is a Modal popup' } ],
//     [ 'core/paragraph', { placeholder: 'Add your blocks here' } ],
// ];
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

registerBlockType( 'k2/modal-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Modal box',
	icon: {
		src: modalBlockIcon,
	},
	category: 'k2-blocks',
	attributes: {
		type : {
			type: 'string',
			default: 'button'
		},
		popupDelay: {
			type: 'number',
			default: 3
		},
		buttonColor: {
			type: 'string',
			default: '#43cea2'
		},
		buttonText: {
			type: 'string',
			default: 'Open Sesame'
		},
		buttonTextSize: {
			type: 'string',
			default: 1
		},
		buttonWidth: {
			type: 'number',
			default: 2
		},
		buttonHeight: {
			type: 'number',
			default: 1
		},
		closeButtonPosition: {
			type: 'Object',
			default:{
				top:0,
				right:0,
				text:'topright'
			}
		},
		textColor:{
			type:'string',
			default:'white'
		},
		textFontFamily:{
			type:'string',
			default:''
		}

	},

	edit: function(props) {


		function myFunction(value) {
			var ParentDiv = value.target.parentNode
			var PopupDiv = ParentDiv.getElementsByTagName('span')
			if (PopupDiv[1].hidden  === true){
				PopupDiv[1].hidden  = false
			} else if (PopupDiv[1].hidden  === false){
				PopupDiv[1].hidden  = true
			}
		}

		function onCloseButtonPositionChange(value){
			if(value=='topright'){
				props.setAttributes({
					closeButtonPosition:{top:0,right:0,text:value}
				})
			}
			else if(value == 'topleft'){
				props.setAttributes({
					closeButtonPosition:{top:0,right:'auto',text:value}
				})
			}
			else if(value == 'bottomright'){
				props.setAttributes({
					closeButtonPosition:{top:'90%',right:0,text:value}
				})
			}
			else if(value == 'bottomleft'){
				props.setAttributes({
					closeButtonPosition:{top:'90%',right:'auto',text:value}
				})
			}
			console.log(props.attributes.closeButtonPosition)
		}
			var controls = (
				<PanelBody title={"Button styling"}>
					<TextControl
						label={<strong>Text</strong>}
						onChange={(value)=>{props.setAttributes({buttonText:value})}}
						value = {props.attributes.buttonText}
					/>

					<PanelRow>
						<p><strong>Title color</strong></p>
						<div className="popup">
								<span style={{backgroundColor:props.attributes.textColor }} className={ 'dot' } onClick={ myFunction }>
									</span>
							<span className="popuptext" id="myPopup" hidden={ true }>

									<div>
										<ColorPicker
											color={ props.attributes.textColor }
											onChangeComplete={ ( value ) => {props.setAttributes( {textColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'} ); console.log(props.attributes.haloColor)} }
										/>
										<TextControl
											onChange={ ( value ) => {
												props.setAttributes( { textColor: value } )
											} }
											value={ props.attributes.textColor }
										/>
									</div>

								</span>
						</div>
					</PanelRow>



					<SelectControl
								label="Text Font"
								value={props.attributes.textFontFamily}
								options={GLOBAL_FONTS}
								onChange={(value)=>{props.setAttributes({textFontFamily:value})}}
					/>

					<PanelRow>
						<p><strong>Button color</strong></p>
						<div className="popup">
								<span style={{backgroundColor:props.attributes.buttonColor }} className={ 'dot' } onClick={ myFunction }>
									</span>
							<span className="popuptext" id="myPopup" hidden={ true }>

									<div>
										<ColorPicker
											color={props.attributes.buttonColor}
											onChangeComplete={(value)=>{props.setAttributes({buttonColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'})}}
										/>
										<TextControl
											onChange={ ( value ) => {
												props.setAttributes( { buttonColor: value } )
											} }
											value={ props.attributes.buttonColor }
										/>
									</div>

								</span>
						</div>
					</PanelRow>


					<RangeControl
						label= "Button width"
						value={ props.attributes.buttonWidth }
						onChange={ (value)=>{props.setAttributes({buttonWidth:value})} }
						min={ 0.1 }
						max={ 10 }
						step ={0.1}
					/>
					<RangeControl
						label= "Button Height"
						value={ props.attributes.buttonHeight }
						onChange={ (value)=>{props.setAttributes({buttonHeight:value})} }
						min={ 0.1 }
						max={ 10 }
						step ={0.1}
					/>
					<RangeControl
						label= "Font size"
						value={ props.attributes.buttonTextSize }
						onChange={ (value)=>{props.setAttributes({buttonTextSize:value})} }
						min={ 0.1 }
						max={ 10 }
						step ={0.1}
					/>
				</PanelBody>
			);
			if(props.attributes.type == 'time'){

				controls = (
								<PanelBody>

										<RangeControl
													label= "Popup delay (secs)"
													value={ props.attributes.popupDelay }
													onChange={ (value)=>{props.setAttributes({popupDelay:value})} }
													min={ 1 }
													max={ 10 }
													step ={1}
												/>
								</PanelBody>

				);
			}

			var buttonStyle = {
				backgroundColor: props.attributes.buttonColor,
				padding : props.attributes.buttonHeight+"em "+props.attributes.buttonWidth+"em",
				fontSize: props.attributes.buttonTextSize+"em",
				fontFamily:props.attributes.textFontFamily,
				color: props.attributes.textColor,

			}
			var closeButtonStyle = {
				top:props.attributes.closeButtonPosition.top,
				right:props.attributes.closeButtonPosition.right
			}
			return ([
				<InspectorControls>
					<PanelBody>

						<SelectControl
							label="Type"
							value={props.attributes.type}
							options={[
								{ label: 'Button', value: 'button' },
								{ label: 'Timed', value: 'time'}
							]}
							onChange={(value)=>{props.setAttributes({type:value})}}
						/>
						<SelectControl
							label="'Close' button position"
							value={props.attributes.closeButtonPosition.text}
							options={[
								{ label: 'Top Right', value: 'topright' },
								{ label: 'Top Left', value: 'topleft'},
								{ label: 'Bottom Right', value: 'bottomright'},
								{ label: 'Bottom Left', value: 'bottomleft'}
							]}
							onChange={onCloseButtonPositionChange}
						/>

					</PanelBody>

					{controls}
				</InspectorControls>

				,
				<div className={'modal-container'}>
					{(props.attributes.type == 'button') &&
						<button className={'modal-button'} style = {buttonStyle}>{props.attributes.buttonText}</button>
					}
					<div className="modal-backend">
						<div className="modal-content-backend">
							<InnerBlocks renderAppender={ () => (<InnerBlocks.ButtonBlockAppender/>) }/>
						</div>
						<div className="close" style={closeButtonStyle}>&times;</div>
					</div>
				</div>
			])
		}
	,
	save: function(props) {
		var buttonStyle = {
			backgroundColor: props.attributes.buttonColor,
			padding : props.attributes.buttonHeight+"em "+props.attributes.buttonWidth+"em",
			fontSize: props.attributes.buttonTextSize+"em",
			fontFamily:props.attributes.textFontFamily,
			color: props.attributes.textColor,
		}
		var closeButtonStyle = {
			top:props.attributes.closeButtonPosition.top,
			right:props.attributes.closeButtonPosition.right
		}
		return (
		<div className={'modal-container'} data-type={props.attributes.type} data-time={props.attributes.popupDelay*1000}>
			{
				(props.attributes.type == 'button') &&
				<button className={'modal-button'} style = {buttonStyle}>{props.attributes.buttonText}</button>
			}
			<div className="modal fade-in">
				<div className="modal-content">
					<InnerBlocks.Content />
					<div className="close" style={closeButtonStyle}>&times;</div>
				</div>
			</div>
		</div>
	  );
	},
})
