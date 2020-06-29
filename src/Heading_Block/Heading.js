import './style.scss';
import './editor.scss';
import {GLOBAL_FONTS} from '../Global_Fonts';
import { GLOBAL_ICONS} from '../Global_Icons';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	InspectorControls,
	RichText,
	MediaUpload
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker,
	ColorPicker,
	CheckboxControl,
	TextControl,
	RangeControl,
	PanelRow,

} = wp.components;

const headingBlockIcon = (
	<svg></svg>
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

registerBlockType( 'k2/heading-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Heading',
	icon: {
		src: headingBlockIcon,
	},
	category: 'k2-blocks',
	attributes: {
		headingType:{
			type:'string',
			default:'iconHeading'
		},
		headingTag: {
			type:'string',
			default:'h1'
		},
		headingText: {
			type:'string',
			default: 'K2 HEADING'
		},
		/*Text styling */
		textColor:{
			type:'string',
			default: 'black'
		},
		textFontFamily: {
			type: 'string',
			default: '"Montserrat",Sans-serif'
		},
		textSize: {
			type: 'number',
			default: 3
		},
		textAlignment: {
			type: 'string',
			default: 'center'
		},
		backGroundColor: {
			type:'string',
			default: 'transparent'
		},
		textFontWeight: {
			type: 'string',
			default: 'normal'
		},
		textFontStyle: {
			type: 'string',
			default: 'normal'
		},
		/*Border styling */
		borderStyle: {
			type:'string',
			default: 'under2'
		},
		lineColor:{
			type:'string',
			default: '#35C76B'
		},
		borderWidth:{
			type:'number',
			default: 5
		},
		/*icon type*/
		iconType:{
			type:'string',
			default: 'image'
		},
		iconClass:{
			type:'string',
			default: 'fa fa-rocket'
		},
		imageurl:{
			type:'string',
			default:'http://k2blocks.com/wp-content/uploads/2020/05/K2-Blocks-Logo-1.png'
		},
		/*icon styling*/
		iconSize:{
			type: 'number',
			default: 5
		},
		iconColor:{
			type:'string',
			default: 'black'
		},
		/*image styling*/
		imageheight:{
			type: 'number',
			default: 7
		},
		imagewidth:{
			type: 'number',
			default: 7
		}
	},

	edit: function(props) {

		/*Functions **************************/
		function onChangetextFontColor(value){
			props.setAttributes( {
				textColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
			);
		}

		function onChangeBackgroundColor(value){
			props.setAttributes( {
				backGroundColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
			);
		}

		function onChangeLineColor(value){
			props.setAttributes( {
				lineColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'}
			);
		}

		function onChangeiconColor(value){
			props.setAttributes( {
			iconColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'});
		}

		//helper for color popup
		function myFunction(value) {
			var ParentDiv = value.target.parentNode
			var PopupDiv = ParentDiv.getElementsByTagName('span')
			if (PopupDiv[1].hidden  === true){
				PopupDiv[1].hidden  = false
			} else if (PopupDiv[1].hidden  === false){
				PopupDiv[1].hidden  = true
			}
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

		//helper icon slector
		function onChangeIconActive(value) {

			if (value.target.tagName === 'SPAN') {

				var MainDiv = document.getElementById( "k2-ib-icon-list-wrapper-id" );
				var Spans = MainDiv.getElementsByTagName( 'span' );
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].className.includes( 'k2-ib-active' )) {
						Spans[i].className = Spans[i].className.replace( 'k2-ib-active', '' )
					}
				}
				props.setAttributes( {
					iconClass: value.target.className
				} )
				console.log( value.target.className )
				value.target.className = value.target.className + ' k2-ib-active'
			}
		}

		function onImageSelect(value){
			props.setAttributes({imageurl:value.url})
			console.log(value.url)
		}

		/*Variables**************************/
		var iconStylingMenu = null;
		if(props.attributes.headingType == 'iconHeading' && props.attributes.iconType == 'icon'){
			iconStylingMenu = (
				<PanelBody title={'Icon Settings'}>
					<div className={'k2-ib-icon-list-wrapper'}>
						<div>
							<label><strong>Select Icon</strong></label>
						</div>
						<div id='k2-ib-icon-list-wrapper-id' className={'k2-ib-icon-list-sub-wrapper'}  onClickCapture={onChangeIconActive}>
						{GLOBAL_ICONS.map((value, index) => {
							return <span className={'fa '+value}></span>
						})}
						</div>
					</div>
					<RangeControl
						label={<strong>Icon Size</strong>}
						value={ props.attributes.iconSize }
						onChange={ (value)=>{props.setAttributes({iconSize:value})} }
						min={ 0.1 }
						max={ 10 }
						step ={0.1}
					/>
					<PanelRow>
						<p><strong>Icon color</strong></p>
						<div className="k2-hb-inspector-popup">
							<span style={{backgroundColor:props.attributes.iconColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
								</span>
									<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

								<div>
									<ColorPicker
										color={ props.attributes.textColor }
										onChangeComplete={ onChangeiconColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											props.setAttributes( { iconColor: value } )
										} }
										value={ props.attributes.iconColor }
									/>
								</div>

							</span>
						</div>
					</PanelRow>
				</PanelBody>
			)
		}

		var imageStylingMenu = null;
		if(props.attributes.headingType == 'iconHeading' && props.attributes.iconType == 'image'){
			imageStylingMenu = (
				<PanelBody title={'Picture Settings'}>
					{/** pic upload pic size*/}
					<MediaUpload
						onSelect = {onImageSelect}
						type = {'images'}
						value = {props.attributes.imageurl}
						render={ ({open}) => {
							return (
								<div style={{backgroundImage: 'url("' +props.attributes.imageurl + '")'}} className={'k2-hb-image-select-control'}>
										<i className="fa fa-plus-circle" onClick={open}></i>
								</div>
							)
						}}
					/>
					<RangeControl
						label= "Image Width"
						value={ props.attributes.imagewidth }
						onChange={ (value)=>{props.setAttributes({imagewidth:value})} }
						min={ 1 }
						max={ 10 }
						step ={0.1}
					/>
					<RangeControl
						label= "Image height"
						value={ props.attributes.imageheight }
						onChange={ (value)=>{props.setAttributes({imageheight:value})} }
						min={ 1 }
						max={ 10 }
						step ={0.1}
					/>
				</PanelBody>
			)
		}

		const tagOptions = [
			{ label: 'p', value: 'p' },
			{ label: 'h1', value: 'h1'},
			{ label: 'h2', value: 'h2'},
			{ label: 'h3', value: 'h3'},
			{ label: 'h4', value: 'h4'},
			{ label: 'h5', value: 'h5'},
			{ label: 'h6', value: 'h6'},
		];

		var iconParentStyle = {
			justifyContent: props.attributes.textAlignment,
			backgroundColor: props.attributes.backGroundColor
		};
		var imageStyling = {
			minHeight: props.attributes.imageheight + 'em',
			width: props.attributes.imagewidth + 'em'
		}

		var iconStruct = null;
		if(props.attributes.headingType == 'iconHeading'){
			if(props.attributes.iconType == 'icon'){
				iconStruct = (
					<div style = {iconParentStyle} className='k2-hb-icon-container'>
						<i style={{color:props.attributes.iconColor, fontSize:props.attributes.iconSize+"em"}} className={props.attributes.iconClass}></i>
					</div>
				)
			}
			else if (props.attributes.iconType == 'image'){
				iconStruct = (
					<div style = {iconParentStyle} className='k2-hb-icon-container'>
						<img src={props.attributes.imageurl} style={imageStyling}></img>
					</div>
				)
			}
		}

		var textStyling = {
			fontSize: props.attributes.textSize+'em',
			color: props.attributes.textColor,
			fontFamily: props.attributes.textFontFamily,
			fontWeight: props.attributes.textFontWeight,
			fontStyle: props.attributes.textFontStyle,
			borderWidth: props.attributes.borderWidth+"px"
		}

		var borderClass = "";
		var parentStyle = {justifyContent: props.attributes.textAlignment,
			backgroundColor: props.attributes.backGroundColor
		};
		if(props.attributes.borderStyle == 'left'){
			borderClass = " k2-hb-border-left";
			textStyling.borderColor = props.attributes.lineColor;
		}
		else if (props.attributes.borderStyle == 'top'){
			borderClass = " k2-hb-border-top";
		}
		else if (props.attributes.borderStyle == 'under1'){
			borderClass = " k2-hb-border-under1";
			parentStyle.borderColor = props.attributes.lineColor;
		}
		else if (props.attributes.borderStyle == 'under2'){
			borderClass = " k2-hb-border-under2";
			textStyling.borderColor = props.attributes.lineColor;
			parentStyle.borderBottom = "1px solid #9E9E9E";
		}

		var lineColor = null;
		var lineWidth = null;
		if(props.attributes.borderStyle == 'left' || props.attributes.borderStyle == 'under1' || props.attributes.borderStyle == 'under2' ){
			lineColor = (<PanelRow>
				<p><strong>Line color</strong></p>
				<div className="k2-hb-inspector-popup">
					<span style={{backgroundColor:props.attributes.titleFontColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
						</span>
							<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

						<div>
							<ColorPicker
								color={ props.attributes.textColor }
								onChangeComplete={ onChangeLineColor }
							/>
							<TextControl
								onChange={ ( value ) => {
									props.setAttributes( { lineColor: value } )
								} }
								value={ props.attributes.lineColor }
							/>
						</div>

					</span>
				</div>
			</PanelRow>)
			lineWidth = (
				<RangeControl
					label= "Line thickness"
					value={ props.attributes.borderWidth }
					onChange={ (value)=>{props.setAttributes({borderWidth:value})} }
					min={ 1 }
					max={ 20 }
					step ={1}
				/>
			)
		}

		var iconTypeSelector = null;
		if(props.attributes.headingType == 'iconHeading'){
			iconTypeSelector = (
				<SelectControl
						label="Icon Type"
						value={props.attributes.iconType}
						options={[
							{ label: 'Icon', value: 'icon' },
							{ label: 'Image', value: 'image'}
						]}
						onChange={(value)=>{
							props.setAttributes({iconType:value})
						}}
					/>
			)
		}

		return ([
			<InspectorControls>
				<PanelBody title={'General'}>
					<SelectControl
						label="Type"
						value={props.attributes.headingType}
						options={[
							{ label: 'Classic', value: 'classic' },
							{ label: 'Icon Heading', value: 'iconHeading'}
						]}
						onChange={(value)=>{
							props.setAttributes({headingType:value})
						}}
					/>
					{iconTypeSelector}
					<SelectControl
						label="Tag"
						value={props.attributes.headingTag}
						options={tagOptions}
						onChange={(value)=>{
							props.setAttributes({headingTag:value})
						}}
					/>
				</PanelBody>
				<PanelBody title={'Text Styling'}>
					<RangeControl
						label= "Font Size"
						value={ props.attributes.textSize }
						onChange={ (value)=>{props.setAttributes({textSize:value})} }
						min={ 1 }
						max={ 10 }
						step ={0.1}
					/>
					<PanelRow>
						<p><strong>Title color</strong></p>
						<div className="k2-hb-inspector-popup">
							<span style={{backgroundColor:props.attributes.titleFontColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
								</span>
									<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

								<div>
									<ColorPicker
										color={ props.attributes.textColor }
										onChangeComplete={ onChangetextFontColor }
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
					<PanelRow>
						<p><strong>Background color</strong></p>
						<div className="k2-hb-inspector-popup">
							<span style={{backgroundColor:props.attributes.backGroundColor }} className={ 'k2-counter-inspector-dot' } onClick={ myFunction }>
								</span>
									<span className="k2-hb-inspector-popuptext" id="myPopup" hidden={ true }>

								<div>
									<ColorPicker
										color={ props.attributes.textColor }
										onChangeComplete={ onChangeBackgroundColor }
									/>
									<TextControl
										onChange={ ( value ) => {
											props.setAttributes( { backGroundColor: value } )
										} }
										value={ props.attributes.backGroundColor }
									/>
								</div>

							</span>
						</div>
					</PanelRow>
					<SelectControl
						label="Heading Font"
						value={props.attributes.textFontFamily}
						options={GLOBAL_FONTS}
						onChange={(value)=>{props.setAttributes({textFontFamily:value})}}
					/>
					<SelectControl
						label="Weight"
						value={ props.attributes.textFontWeight }
						options={ [
							{ label: 'normal'},
							{ label: '100'},
							{ label: '200'},
							{ label: '300'},
							{ label: '400'},
							{ label: '500'},
							{ label: '600'},
						] }
						onChange={ (value)=>{props.setAttributes({textFontWeight:value})}}
					/>
					<SelectControl
						label="Style"
						value={ props.attributes.textFontStyle }
						options={
							[
								{ label: 'Normal', value: 'Normal' },
								{ label: 'oblique', value: 'oblique' },
								{ label: 'italic', value: 'italic' },
							]
						}
						onChange={ (value)=>{props.setAttributes({textFontStyle:value})}}
					/>
					<PanelRow>
						<div style={{paddingBottom: '2%'}}>
							<label><strong>Alignment</strong></label>
						</div>
						<div id = {'AlignmentIconsParent'} className={'k2-hb-inspector-control-alignment'} onClick={onChangeAlignmentIconChange}>

							<div className={'k2-hb-inspector-control-alignment-single'}  onClick={() => {props.setAttributes({textAlignment:'flex-start'})}}>
								<span className="fa fa-align-left k2-hb-alignment-icon-style" ></span>
							</div>
							<div className={'k2-hb-inspector-control-alignment-single'} onClick={() => {props.setAttributes({textAlignment:'center'})}}>
								<span className="fa fa-align-center k2-hb-alignment-icon-style k2-hb-active"></span>
							</div>
							<div className={'k2-hb-inspector-control-alignment-single'} onClick={() => {props.setAttributes({textAlignment:'flex-end'})}}>
								<span className="fa fa-align-right k2-hb-alignment-icon-style"></span>
							</div>
						</div>
					</PanelRow>
					<SelectControl
						label="Line style"
						value={props.attributes.borderStyle}
						options={[
							{ label: 'None', value: 'none'},
							{ label: 'Left ', value: 'left' },
							{ label: 'Top hat', value: 'top'},
							{ label: 'Underline', value: 'under1'},
							{ label: 'Double Underline', value: 'under2'},
						]}
						onChange={(value)=>{
							props.setAttributes({borderStyle:value})
						}}
					/>
					{lineColor}
					{lineWidth}
				</PanelBody>
				{iconStylingMenu}
				{imageStylingMenu}



			</InspectorControls>
			,
			<div className={'k2-hb-parent-container'}>
				{iconStruct}
				<div className={'k2-hb-text-container'+borderClass} style={parentStyle}>
					<RichText
						tagName = {props.attributes.headingTag} // The tag here is the element output and editable in the admin
						value={ props.attributes.headingText } // Any existing content, either from the database or an attribute default
						className = {'k2-hb-text'+borderClass}
						style = {textStyling}
						formattingControls={ [ 'bold', 'italic', 'link', 'text-color', 'text-highlight'] } // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={ (value)=>{props.setAttributes({headingText:value})} } // Store updated content as a block attribute
						placeholder={ "K2 HEADING" } // Display this text before any content has been added by the user
					/>
				</div>
			</div>
		])
		}
	,
	save: function(props) {
		var textStyling = {
			fontSize: props.attributes.textSize+'em',
			color: props.attributes.textColor,
			fontFamily: props.attributes.textFontFamily,
			fontWeight: props.attributes.textFontWeight,
			fontStyle: props.attributes.textFontStyle,
			borderWidth: props.attributes.borderWidth+"px"
		}

		var borderClass = "";
		var parentStyle = {justifyContent: props.attributes.textAlignment,
			backgroundColor: props.attributes.backGroundColor
		};
		if(props.attributes.borderStyle == 'left'){
			borderClass = " k2-hb-border-left";
			textStyling.borderColor = props.attributes.lineColor;
		}
		else if (props.attributes.borderStyle == 'top'){
			borderClass = " k2-hb-border-top";
		}
		else if (props.attributes.borderStyle == 'under1'){
			borderClass = " k2-hb-border-under1";
			parentStyle.borderColor = props.attributes.lineColor;
		}
		else if (props.attributes.borderStyle == 'under2'){
			borderClass = " k2-hb-border-under2";
			textStyling.borderColor = props.attributes.lineColor;
			parentStyle.borderBottom = "1px solid #9E9E9E";
		}

		var imageStyling = {
			minHeight: props.attributes.imageheight + 'em',
			width: props.attributes.imagewidth + 'em'
		}
		var iconParentStyle = {
			justifyContent: props.attributes.textAlignment,
			backgroundColor: props.attributes.backGroundColor
		};
		var iconStruct = null;
		if(props.attributes.headingType == 'iconHeading'){
			if(props.attributes.iconType == 'icon'){
				iconStruct = (
					<div style = {iconParentStyle} className='k2-hb-icon-container'>
						<i style={{color:props.attributes.iconColor, fontSize:props.attributes.iconSize+"em"}} className={props.attributes.iconClass}></i>
					</div>
				)
			}
			else if (props.attributes.iconType == 'image'){
				iconStruct = (
					<div style = {iconParentStyle} className='k2-hb-icon-container'>
						<img src={props.attributes.imageurl} style={imageStyling}></img>
					</div>
				)
			}
		}
		return (
			<div className={'k2-hb-parent-container'}>
				{iconStruct}
				<div className={'k2-hb-text-container'+borderClass} style={parentStyle}>
					<RichText.Content
						tagName={props.attributes.headingTag} // The tag here is the element output and editable in the admin
						value={ props.attributes.headingText } // Any existing content, either from the database or an attribute default
						className = {'k2-hb-text'+borderClass}
						style = {textStyling}
					/>
				</div>
			</div>
	  );
	},
})
