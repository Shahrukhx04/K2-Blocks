

//  Import CSS.
import './editor.scss';
import './style.scss';
import { GLOBAL_FONTS } from '../Global_Fonts';

import { GLOBAL_ICONS} from '../Global_Icons'



const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType,
	AlignmentToolbar,
	// For attribute sources
} = wp.blocks;
const {
	RichText,
	InspectorControls,
	DimensionControl,
} = wp.editor;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	PanelRow,
	ColorPicker,
	TextControl,

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

var texteditorBlockIcon=(
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

registerBlockType( 'k2/text-editor', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Text Editor' ), // Block title.
	icon: {
		src: texteditorBlockIcon
	} ,
	category: 'k2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Text Editor' ),
		__( 'Text' ),
	],
	attributes: {
		EditorFontSize: {
			type: 'number',
			default: 4
		},
		EditorFontFamily: {
			type: 'string',
			default: 'inherit'
		},
		EditorTextColor: {
			type:'string',
			default: 'white'
		},
		EditorTextAlignment: {
			type: 'string',
			default: 'left'
		},
		EditorFontWeight: {
			type: 'string',
			default: 'normal'
		},
		EditorTextTransform: {
			type: 'string',
			default: 'lowercase'
		},
		EditorLineHeight: {
			type: 'number',
			default: 1.5
		},
		EditorLetterSpacing: {
			type: 'number',
			default: 1
		},
		EditorTextDecoration:{
			type : 'string',
			default: 'none'
		},
		EditorTextStyle: {
			type: 'string',
			default: 'normal'
		},
		EditorContent: {
			type: 'string',
			default: 'Write some text here...'
		},
		EditorTopPadding: {
			type: 'number',
			default:0
		},
		EditorRightPadding:{
			type: 'number',
			default:0
		},
		EditorBottomPadding:{
			type: 'number',
			default:0
		},
		EditorLeftPadding:{
			type: 'number',
			default:0
		},
		EditorTopMargin: {
			type: 'number',
			default:0
		},
		EditorRightMargin: {
			type: 'number',
			default:0
		},
		EditorBottomMargin: {
			type: 'number',
			default:0
		},
		EditorLeftMargin: {
			type: 'number',
			default:0
		},
		EditorTopBorder: {
			type: 'number',
			default: 1
		},
		EditorRightBorder: {
			type: 'number',
			default: 1
		},
		EditorBottomBorder: {
			type: 'number',
			default: 1
		},
		EditorLeftBorder: {
			type: 'number',
			default: 1
		},
		EditorBorderStyle: {
			type: 'string',
			default: 'solid'
		},
		EditorBorderColor: {
			type: 'string',
			default: 'black'
		},
		EditorBackgroundColor: {
			type: 'string',
			default:'rgb(25, 149, 173)'
		},

		EditorWidgetWidth: {
			type: 'number',
			default:30
		}
	},
	// Editor Mode
	edit( { attributes, setAttributes } ) {
		const FontWeightAvailable= [
			{ label: 'normal'},
			{ label: '100'},
			{ label: '200'},
			{ label: '300'},
			{ label: '400'},
			{ label: '500'},
			{ label: '600'},
		]
		const BorderStylesAvailable = [
			{ label: 'None', value: 'none'},
			{ label: 'Hidden', value: 'hidden'},
			{ label: 'Solid', value: 'solid'},
			{ label: 'Dashed', value: 'dashed'},
			{ label: 'Dotted', value: 'dotted'},
			{ label: 'Double', value: 'double'},
			{ label: 'Groove', value: 'groove'},
			{ label: 'Ridge', value: 'ridge'},
			{ label: 'Inset', value: 'inset'},
			{ label: 'Outset', value: 'outset'},
		]
		const TextTransformAvailable =[
			{ label: 'Uppercase', value: 'uppercase'},
			{ label: 'Lowercase', value: 'lowercase'},
			{ label: 'Capitalize', value: 'capitalize'},
		]
		const TextStylesAvailable = [
			{ label : 'Normal', value: 'normal' },
			{ label : 'Oblique', value: 'oblique'},
			{ label : 'Italic', value: 'italic' },
		]
		const TextDecorAvailable = [
			{ label : 'None', value: 'none' },
			{ label : 'Underline', value: 'underline'},
			{ label : 'Line Through', value: 'line-through' },
			{ label : 'Overline', value: 'overline' },
		]
		const TextEditorStyling = {
			fontSize: attributes.EditorFontSize + 'vw',
			fontFamily: attributes.EditorFontFamily,
			color: attributes.EditorTextColor,
			fontWeight: attributes.EditorFontWeight,
			textTransform: attributes.EditorTextTransform,
			textAlign: attributes.EditorTextAlignment,
			fontStyle: attributes.EditorTextStyle,
			textDecoration: attributes.EditorTextDecoration,
			lineHeight: attributes.EditorLineHeight + 'em',
			letterSpacing: attributes.EditorLetterSpacing + 'px',

		}
		const EditorPaddingAndBorderSettings ={
			paddingTop: attributes.EditorTopPadding + 'px',
			paddingRight: attributes.EditorRightPadding + 'px',
			paddingBottom: attributes.EditorBottomPadding + 'px',
			paddingLeft: attributes.EditorLeftPadding + 'px',
			borderTop: attributes.EditorTopBorder + 'px',
			borderRight: attributes.EditorRightBorder + 'px',
			borderBottom: attributes.EditorBottomBorder + 'px',
			borderLeft: attributes.EditorLeftBorder + 'px' ,
			borderStyle: attributes.EditorBorderStyle,
			borderColor: attributes.EditorBorderColor,
			backgroundColor: attributes.EditorBackgroundColor,
		}
		const EditorMarginSettings = {
			marginTop: attributes.EditorTopMargin + 'px',
			marginRight: attributes.EditorRightMargin + 'px',
			marginBottom: attributes.EditorBottomMargin + 'px',
			marginLeft: attributes.EditorLeftMargin + 'px',
			width: attributes.EditorWidgetWidth + 'rem',

		}


		function onChangeEditorFontSize(newSize) {
			setAttributes({
				EditorFontSize: newSize
			})
		}
		function onChangeEditorFontWeight(NewWeight) {
			setAttributes({
				EditorFontWeight: NewWeight
			})
		}
		function onChangeEditorTextTransform(value) {
			setAttributes({
				EditorTextTransform: value
			})
		}
		function onChangeEditorTextStyle(newStyle) {
			setAttributes({
				EditorTextStyle: newStyle
			})
		}
		function onChangeEditorTextDecoration(newDecor) {
			setAttributes({
				EditorTextDecoration: newDecor
			})
		}

		function  onChangeEditorLineHeight(newHeight){
			setAttributes({
				EditorLineHeight: newHeight
			})
		}
		function onChangeEditorLetterSpacing(newSpacing){
			setAttributes({
				EditorLetterSpacing: newSpacing
			})
		}
		function onChangeEditorTextColor(value){
			setAttributes( {
				EditorTextColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'});
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

		function onChangeTextAlignmentIconChange(value) {
			if (value.target.tagName === 'SPAN'){
				var MainDiv = document.getElementById("k2-te-inspector-control-text-align");
				var Spans = MainDiv.getElementsByTagName('div');
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].getElementsByTagName('span')[0].className.includes('k2-te-active')){
						Spans[i].getElementsByTagName('span')[0].className = Spans[i].getElementsByTagName('span')[0].className.replace('k2-te-active','')
					}
				}
				console.log(value.target.tagName)
				value.target.className = value.target.className + ' k2-te-active'
			}
		}

		function onChangeEditorTextAlignment(NewPlacement) {
			setAttributes({
				EditorTextAlignment: NewPlacement
			})
		}
		function onChangeEditorTopPadding(){
			let parent = document.getElementById('k2-te-sub-parent');
			attributes.EditorTopPadding =  document.getElementById('k2-te-top-padding').value;

			if(attributes.EditorTopPadding==null)
			{
				parent.style.paddingTop = 0+'px';
			}
			else  parent.style.paddingTop = attributes.EditorTopPadding +'px'

		}
		function onChangeEditorRightPadding(){
			let parent = document.getElementById('k2-te-sub-parent');
			attributes.EditorRightPadding=  document.getElementById('k2-te-right-padding').value;
			if(attributes.EditorRightPadding==null)
			{
				parent.style.paddingRight = 0+'px';
			}
			else parent.style.paddingRight = attributes.EditorRightPadding+'px';
		}
		function onChangeEditorBottomPadding() {
			let parent = document.getElementById( 'k2-te-sub-parent' );
			attributes.EditorBottomPadding = document.getElementById( 'k2-te-bottom-padding' ).value;
			if(attributes.EditorBottomPadding)
			{
				parent.style.paddingBottom =0+'px';
			}
			else parent.style.paddingBottom = attributes.EditorBottomPadding + 'px';
		}
		function onChangeEditorLeftPadding() {
			let parent = document.getElementById( 'k2-te-sub-parent' );
			attributes.EditorLeftPadding = document.getElementById( 'k2-te-left-padding' ).value;
			if(attributes.EditorLeftPadding==null)
			{
				parent.style.paddingLeft =0+'px';
			}
			else parent.style.paddingLeft = attributes.EditorLeftPadding + 'px';
		}
		function onChangeEditorTopMargin(){
			let parent = document.getElementById('k2-te-parent');
			attributes.EditorTopMargin =  document.getElementById('k2-te-top-margin').value;
			if(attributes.EditorTopMargin==null)
			{
				parent.style.marginTop = 0+'px';
			}
			else parent.style.marginTop = attributes.EditorTopMargin+'px';
		}
		function onChangeEditorRightMargin(){
			let parent = document.getElementById('k2-te-parent');
			attributes.EditorRightMargin =  document.getElementById('k2-te-right-margin').value;
			if(attributes.EditorRightMargin==null)
			{
				parent.style.marginRight = 0+'px';
			}
			else parent.style.marginRight = attributes.EditorRightMargin+'px';
		}
		function onChangeEditorBottomMargin() {
			let parent = document.getElementById( 'k2-te-parent' );
			attributes.EditorBottomMargin = document.getElementById( 'k2-te-bottom-margin' ).value;
			if(attributes.EditorBottomMargin==null)
			{
				parent.style.marginBottom = 0+'px';
			}
			else parent.style.marginBottom = attributes.EditorBottomMargin + 'px';
		}
		function onChangeEditorLeftMargin() {
			let parent = document.getElementById( 'k2-te-parent' );
			attributes.EditorLeftMargin = document.getElementById( 'k2-te-left-margin' ).value;
			if(attributes.EditorLeftMargin==null)
			{
				parent.style.marginLeft = 0+'px';
			}
			else parent.style.marginLeft = attributes.EditorLeftMargin + 'px';
		}
		function onChangeEditorTopBorder() {
			let parent = document.getElementById( 'k2-te-sub-parent' );
			attributes.EditorTopBorder = document.getElementById( 'k2-te-top-border' ).value;
			if(attributes.EditorTopBorder==null)
			{
				parent.style.borderTop = 0+'px';
			}
			else parent.style.borderTop = attributes.EditorTopBorder + 'px ' + attributes.EditorBorderStyle + ' ' +attributes.EditorBorderColor;
		}
		function onChangeEditorRightBorder() {
			let parent = document.getElementById( 'k2-te-sub-parent' );
			attributes.EditorRightBorder = document.getElementById( 'k2-te-right-border' ).value;
			if(attributes.EditorRightBorder==null)
			{
				parent.style.borderRight = 0+'px';
			}
			else parent.style.borderRight = attributes.EditorRightBorder + 'px ' + attributes.EditorBorderStyle + ' ' +attributes.EditorBorderColor;
		}
		function onChangeEditorBottomBorder() {
			let parent = document.getElementById( 'k2-te-sub-parent' );
			attributes.EditorBottomBorder = document.getElementById( 'k2-te-bottom-border' ).value;
			if(attributes.EditorBottomBorder==null)
			{
				parent.style.borderBottom = 0+'px';
			}
			else parent.style.borderBottom = attributes.EditorBottomBorder + 'px ' + attributes.EditorBorderStyle + ' ' +attributes.EditorBorderColor;
		}
		function onChangeEditorLeftBorder() {
			let parent = document.getElementById( 'k2-te-sub-parent' );
			attributes.EditorLeftBorder = document.getElementById( 'k2-te-left-border' ).value;
			if(attributes.EditorLeftBorder==null)
			{
				parent.style.borderLeft = 0+'px';
			}
			else parent.style.borderLeft = attributes.EditorLeftBorder + 'px ' + attributes.EditorBorderStyle + ' ' +attributes.EditorBorderColor;
		}
		function onChangeEditorBorderColor(value){
			setAttributes( {
				EditorBorderColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'
			});
			let parent = document.getElementById('k2-te-sub-parent');
			parent.style.borderColor = attributes.EditorBorderColor;
		}
		function onChangeEditorBorderStyle(newBorderStyle){
			setAttributes({
				EditorBorderStyle: newBorderStyle
			})
			let parent = document.getElementById('k2-te-sub-parent');
			parent.style.borderStyle = attributes.EditorBorderStyle;
		}
		function onChangeEditorBackgroundColor(value){
			setAttributes({
				EditorBackgroundColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'
			});
		}

		function onChangeEditorWidgetWidth(newWidth){
			setAttributes({
				EditorWidgetWidth: newWidth
			})
		}
		function onChangeTeContent(newText){
			setAttributes({
				EditorContent: newText
			})
		}

		return [
			<InspectorControls>
				<PanelBody >
					<PanelRow>
						<div style={{paddingBottom: '2%'}}>
							<label><strong>Text Align</strong></label>
						</div>
						<div id ="k2-te-inspector-control-text-align" className={'k2-te-inspector-control-classic-position'} onClick={onChangeTextAlignmentIconChange}>

							<div className={'k2-te-inspector-control-classic-position-single'}  onClick={() => onChangeEditorTextAlignment('left')}>
								<span className="fa fa-align-left k2-te-alignment-icon k2-te-active" ></span>
							</div>
							<div className={'k2-te-inspector-control-classic-position-single'} onClick={() => onChangeEditorTextAlignment('center')}>
								<span className="fa fa-align-center k2-te-alignment-icon "></span>
							</div>
							<div className={'k2-te-inspector-control-classic-position-single'} onClick={() => onChangeEditorTextAlignment('right')}>
								<span className="fa fa-align-right k2-te-alignment-icon"></span>
							</div>
						</div>
					</PanelRow>
				</PanelBody>
				<PanelBody>
					<RangeControl
						label={<strong> Widget Width <small>  (rem)</small></strong>}
						value={ attributes.EditorWidgetWidth }
						onChange={ onChangeEditorWidgetWidth }
						min={ 0 }
						max={ 50 }
						step ={ 1 }
					/>
				</PanelBody>
				<PanelBody title={'Typography'}>

					<RangeControl
						label={<strong> Font Size <small>  (vw) </small></strong>}
						value={ attributes.EditorFontSize }
						onChange={ onChangeEditorFontSize }
						min={ 1 }
						max={ 10 }
						step ={1}
					/>
					<SelectControl
						label={<strong>Font Family</strong>}
						value={attributes.EditorFontFamily}
						options={GLOBAL_FONTS}
						onChange={(value)=>{setAttributes({EditorFontFamily:value})}}
					/>
					<SelectControl
						label={<strong>Font Weight</strong>}
						value={ attributes.EditorFontWeight }
						options={ FontWeightAvailable }
						onChange={ onChangeEditorFontWeight}
					/>
					<SelectControl
						label={<strong>Text Transform</strong>}
						value={ attributes.EditorTextTransform }
						options={ TextTransformAvailable }
						onChange={ onChangeEditorTextTransform }
					/>
					<SelectControl
						label={<strong>Style</strong>}
						value={ attributes.EditorTextStyle }
						options={ TextStylesAvailable }
						onChange={ onChangeEditorTextStyle }
					/>
					<SelectControl
						label={<strong>Text Decoration</strong>}
						value={ attributes.EditorTextDecoration }
						options={ TextDecorAvailable }
						onChange={ onChangeEditorTextDecoration }
					/>
					<RangeControl
						label={<strong>Line Height <small>  (em)</small></strong>}
						value={ attributes.EditorLineHeight }
						onChange={ onChangeEditorLineHeight }
						min={ 0 }
						max={ 50 }
						step ={0.1}
					/>
					<RangeControl
						label={<strong>Letter Spacing</strong>}
						value={ attributes.EditorLetterSpacing }
						onChange={ onChangeEditorLetterSpacing }
						min={ 0 }
						max={ 50 }
						step ={0.1}
					/>
					<PanelRow>
						<p><strong>Text color</strong></p>
						<div className="k2-CB-popup">
							<span style={{backgroundColor: attributes.EditorTextColor}} className={ 'k2-CB-dot' } onClick={ myFunction }>
							</span>
							<span className="k2-CB-popup-text"  hidden={ true }>
								<div>
									<ColorPicker
										color={ attributes.EditorTextColor }
										onChangeComplete={ onChangeEditorTextColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											setAttributes( { EditorTextColor: value } )
										} }
										value={ attributes.EditorTextColor}
									/>
								</div>
							</span>
						</div>
					</PanelRow>
					<PanelRow>
						<p><strong>Background color</strong></p>
						<div className="k2-CB-popup">
							<span style={{backgroundColor: attributes.EditorBackgroundColor}} className={ 'k2-CB-dot' } onClick={ myFunction }>
							</span>
							<span className="k2-CB-popup-text"  hidden={ true }>
								<div>
									<ColorPicker
										color={ attributes.EditorBackgroundColor }
										onChangeComplete={ onChangeEditorBackgroundColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											setAttributes( { EditorBackgroundColor: value } )
										} }
										value={ attributes.EditorBackgroundColor}
									/>
								</div>
							</span>
						</div>
					</PanelRow>

				</PanelBody>
				<PanelBody title={'Styles'}>
					<PanelRow>
						<div className={'k2-te-dimension-control'}>
							<label><strong>Padding</strong><small>  (Top, Right, Bottom, Left)</small></label>
							<div className={'k2-te-dimension-control-mt'}>
								<input type="number" id={'k2-te-top-padding'} min={0}
									   onChange={() => onChangeEditorTopPadding()}/>
								<input type="number" id={'k2-te-right-padding'} min={0}
									   onChange={() => onChangeEditorRightPadding()}/>
								<input type="number" id={'k2-te-bottom-padding'} min={0}
									   onChange={() => onChangeEditorBottomPadding()}/>
								<input type="number" id={'k2-te-left-padding'} min={0}
									   onChange={() => onChangeEditorLeftPadding()}/>
							</div>
						</div>
					</PanelRow>
					<PanelRow>
						<div className={'k2-te-dimension-control'}>
							<label><strong>Margin</strong><small>  (Top, Right, Bottom, Left)</small></label>
							<div className={'k2-te-dimension-control-mt'}>
								<input type="number" min={0} id={'k2-te-top-margin'}
									   onChange={() => onChangeEditorTopMargin()}/>
								<input type="number" min={0} id={'k2-te-right-margin'}
									   onChange={() => onChangeEditorRightMargin()}/>
								<input type="number" min={0} id={'k2-te-bottom-margin'}
									   onChange={() => onChangeEditorBottomMargin()}/>
								<input type="number" min={0} id={'k2-te-left-margin'}
									   onChange={() => onChangeEditorLeftMargin()}/>
							</div>

						</div>
					</PanelRow>
					<PanelRow>
						<div className={'k2-te-dimension-control'}>
							<label><strong>Border</strong><small>  (Top, Right, Bottom, Left)</small></label>
							<div className={'k2-te-dimension-control-mt'}>
								<input type="number" min={0} id={'k2-te-top-border'}
									   onChange={() => onChangeEditorTopBorder()}/>
								<input type="number" min={0} id={'k2-te-right-border'}
									   onChange={() => onChangeEditorRightBorder()}/>
								<input type="number" min={0} id={'k2-te-bottom-border'}
									   onChange={() => onChangeEditorBottomBorder()}/>
								<input type="number" min={0} id={'k2-te-left-border'}
									   onChange={() => onChangeEditorLeftBorder()}/>
							</div>
						</div>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label={<strong>Border Style</strong>}
							value={ attributes.EditorBorderStyle }
							options={ BorderStylesAvailable }
							onChange={ onChangeEditorBorderStyle }
						/>
					</PanelRow>
					<PanelRow>
						<p><strong>Border color</strong></p>
						<div className="k2-CB-popup">
							<span style={{backgroundColor: attributes.EditorBorderColor}} className={ 'k2-CB-dot' } onClick={ myFunction }>
							</span>
							<span className="k2-CB-popup-text"  hidden={ true }>
								<div>
									<ColorPicker
										color={ attributes.EditorBorderColor }
										onChangeComplete={ onChangeEditorBorderColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											setAttributes( { EditorBorderColor: value } )
										} }
										value={ attributes.EditorBorderColor}
									/>
								</div>
							</span>
						</div>
					</PanelRow>
				</PanelBody>
			</InspectorControls>,
			<div id={'k2-te-wrapper'} >
				<div id={'k2-te-parent'} style={EditorMarginSettings}>
					<div id={'k2-te-sub-parent'} style={EditorPaddingAndBorderSettings}>
						<RichText
							tagName="p"
							style = {TextEditorStyling}
							value={ attributes.EditorContent }
							className={"k2-te-paragraph"}
							formattingControls={ [ 'bold', 'italic'] }
							onChange={ onChangeTeContent }
							placeholder={ ( 'Write some text here...' ) }
						/>
					</div>
				</div>
			 </div>
		]
	},

	// Preview Mode

	save( { attributes } ) {
		const TextEditorStyling = {
			fontSize: attributes.EditorFontSize + 'vw',
			fontFamily: attributes.EditorFontFamily,
			color: attributes.EditorTextColor,
			fontWeight: attributes.EditorFontWeight,
			textTransform: attributes.EditorTextTransform,
			textAlign: attributes.EditorTextAlignment,
			fontStyle: attributes.EditorTextStyle,
			textDecoration: attributes.EditorTextDecoration,
			lineHeight: attributes.EditorLineHeight + 'em',
			letterSpacing: attributes.EditorLetterSpacing + 'px',
		}
		const EditorPaddingAndBorderSettings ={
			paddingTop: attributes.EditorTopPadding + 'px',
			paddingRight: attributes.EditorRightPadding + 'px',
			paddingBottom: attributes.EditorBottomPadding + 'px',
			paddingLeft: attributes.EditorLeftPadding + 'px',
			borderTop: attributes.EditorTopBorder + 'px',
			borderRight: attributes.EditorRightBorder + 'px',
			borderBottom: attributes.EditorBottomBorder + 'px',
			borderLeft: attributes.EditorLeftBorder + 'px' ,
			borderStyle: attributes.EditorBorderStyle,
			borderColor: attributes.EditorBorderColor,
			backgroundColor: attributes.EditorBackgroundColor,
		}
		const EditorMarginSettings = {
			marginTop: attributes.EditorTopMargin + 'px',
			marginRight: attributes.EditorRightMargin + 'px',
			marginBottom: attributes.EditorBottomMargin + 'px',
			marginLeft: attributes.EditorLeftMargin + 'px',
			width: attributes.EditorWidgetWidth + 'rem',

		}
		return <div id={'k2-te-wrapper'}>
					<div id={'k2-te-parent'} style={EditorMarginSettings}>
						<div  style={EditorPaddingAndBorderSettings}>
							<RichText.Content tagName="p"
								value={ attributes.EditorContent }
								style={TextEditorStyling}
								className={"k2-te-paragraph"}
								formattingControls={ [ 'bold', 'italic'] }
								placeholder={__( 'Write some text here...' )}/>
						</div>
				</div>
			</div>;
	}
});

