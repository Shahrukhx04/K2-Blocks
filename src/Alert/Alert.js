/**
 * BLOCK: progressbar
 *
 * Registering a basic Progress_Bar_Block with Gutenberg.
 * Simple Progress_Bar_Block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import { GLOBAL_FONTS } from '../Global_Fonts';



const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType,
	AlignmentToolbar
	// For attribute sources
} = wp.blocks;
const {
	RichText,
	InspectorControls,
	ColorPalette
} = wp.editor;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	Panel,
	PanelRow

} = wp.components;

const alertBoxIcon = (
    <svg width={800} height={800} viewBox="0 0 800 800">
      <image
        width={800}
        height={800}
        xlinkHref="data:image/png;base64,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 AElFTkSuQmCC"
      />
    </svg>
);

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
registerBlockType( 'k2/alert-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Alert Block' ), // Block title.
	icon: {src:alertBoxIcon}, 
	category: 'k2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Alert blocks' ),
		__( 'Magik Blocks' ),
	],
	attributes: {

		AlertBoxText: {
			type: 'string',
			default: 'Hello, I am a info box with an icon and text. '
		},
		AlertBoxColor: {
			type: 'string',
			default: 'transparent'
		},
		AlertBoxBorderColor: {
			type: 'string',
			default: 'green'
		},
		AlertBoxTextColor: {
			type: 'string',
			default: 'orange'
		},
		AlertBoxIconSize: {
			type: 'number',
			default: 5
		},
		AlertBoxTextSize: {
			type: 'number',
			default: 2
		},
		AlertBoxIconColor: {
			type: 'string',
			default: 'orange'
		},
		AlertBoxIconType:{
			type: 'string',
			default: 'fa fa-rocket'
		},
		AlertBoxIconSpacing:{
			type: 'string',
			default: 0
		},
		AlertBoxLayoutOptions:{
			type: 'string',
			default: 'Classic'
		},
		AlertBoxLayoutAttribute:{
			type: 'string',
			default: 'column'
		},
		AlertBoxClassicAlignment: {
			type: 'string',
			default: 'flex-start'
		},
		AlertBoxSimpleAlignment: {
			type: 'string',
			default: 'flex-start'
		},
		AlertBoxBorderStyle: {
			type: 'string',
			default: 'None'
		},
		AlertBoxBorderWidth: {
			type: 'number',
			default: 2
		},
		AlertBoxBorderRadius: {
			type: 'number',
			default: 0
		},
		AlertBoxWidgetWidth: {
			type: 'number',
			default: 60
		},
		AlertIconBackgroundColor: {
			type: 'string',
			default: '#FED8B1'
		},
		AlertIconBackgroundBorderRadius: {
			type:'number',
			default: 0
		},
		AlertBoxTextFontFamily: {
			type: 'string',
			default: 'Lucida Console'
		},
		AlertBoxTextFontWeight: {
			type: 'string',
			default: 'normal'
		},
		AlertBoxTextStyle: {
			type: 'number',
			default: 'normal'
		},
		AlertBoxTextDecoration: {
			type: 'string',
			default: 'None'
		},

	},


	/**
	 * The edit function describes the structure of your Progress_Bar_Block in the context of the editor.
	 * This represents what the editor will render when the Progress_Bar_Block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit ({attributes, setAttributes}) {

		const {Content} = attributes

		const ToolBarColors = [
			{ color: '#32897A' },
			{  color: '#1995AD' },
			{  color: '#011A27' },
			{  color: '#F69454' },
		];
		const FontWeightAvaibles= [
			{ label: 'normal'},
			{ label: '100'},
			{ label: '200'},
			{ label: '300'},
			{ label: '400'},
			{ label: '500'},
			{ label: '600'},
		]

		const IconList = [
			{label: 'Rocket' , value: 'fa fa-rocket'},
			{label: 'Warning' ,value: 'fa fa-warning'},
			{label: 'aeroplane' ,value: 'fa fa-search'},
			{label: 'aeroplane' ,value: 'fa fa-envelope-o'}
		]

		const ParentContainerStyling = {
			backgroundColor: attributes.AlertBoxColor,
			borderColor: attributes.AlertBoxBorderColor,
			flexDirection: attributes.AlertBoxLayoutAttribute,
			alignItems: attributes.AlertBoxClassicAlignment,
			justifyContent: attributes.AlertBoxSimpleAlignment,
			borderStyle: attributes.AlertBoxBorderStyle,
			borderWidth: attributes.AlertBoxBorderWidth + 'px',
			borderRadius: attributes.AlertBoxBorderRadius + 'px'
		}

		const AlertIconStyling = {
			fontSize: attributes.AlertBoxIconSize + 'rem',
			color: attributes.AlertBoxIconColor,
			backgroundColor: attributes.AlertIconBackgroundColor,
			borderRadius: attributes.AlertIconBackgroundBorderRadius,
			padding: '0.2em'
		}

		const AlertTextStyling = {
			display: 'block',
			fontSize: attributes.AlertBoxTextSize + 'rem',
			color: attributes.AlertBoxTextColor,
			paddingLeft: attributes.AlertBoxIconSpacing + 'em',
			fontFamily: attributes.AlertBoxTextFontFamily,
			fontWeight: attributes.AlertBoxTextFontWeight,
			fontStyle: attributes.AlertBoxTextStyle,
			textDecoration: attributes.AlertBoxTextDecoration,
			wordWrap: 'break-word'
		}

		const SubWidgetStyling = {
			width: '100%',
		}

		function onAlertBoxTextChange(NewText){
			setAttributes({
				AlertBoxText: NewText
			})
		}

		function onChangeAlertBoxColor(NewColor) {
			setAttributes({
				AlertBoxColor: NewColor
			})
		}

		function onChangeAlertBoxBorderColor(NewColor) {
			setAttributes({
				AlertBoxBorderColor: NewColor
			})
		}

		function OnChangeAlertBoxTextColor(NewColor) {
			setAttributes({
				AlertBoxTextColor: NewColor
			})
		}

		function onChangeIconSize(NewSize) {
			setAttributes({
				AlertBoxIconSize: NewSize
			})
		}

		function onChangeTextSize(NewSize) {
			setAttributes({
				AlertBoxTextSize: NewSize
			})
		}

		function onChangeIconColor(NewColor) {
			setAttributes({
				AlertBoxIconColor: NewColor
			})
		}


		function onChangeAlertBoxIconSpacing(NewSpacing) {
			setAttributes({
				AlertBoxIconSpacing: NewSpacing
			})
		}

		function onChangeAlertBoxLayout(NewLayout) {
			setAttributes({
				AlertBoxLayoutOptions: NewLayout
			})
			if (NewLayout === 'Classic'){
				setAttributes({
					AlertBoxLayoutAttribute: 'column',
					AlertBoxIconSpacing: 0
				})
			}else if (NewLayout === 'Simple'){
				setAttributes({
					AlertBoxLayoutAttribute: 'row',
					AlertBoxIconSpacing: 0.5,
					AlertBoxClassicAlignment: 'center',
				})
			}
		}

		function onChangeAlertBoxClassicAlignment(NewAllignment) {
			if ( attributes.AlertBoxLayoutOptions === 'Classic'){
				setAttributes({
					AlertBoxClassicAlignment: NewAllignment
				})
			}else if (attributes.AlertBoxLayoutOptions === 'Simple'){
				setAttributes({
					AlertBoxSimpleAlignment: NewAllignment
				})
			}
		}

		function onChangeAlertBoxBorderStyle(NewStyle) {
			setAttributes({
				AlertBoxBorderStyle: NewStyle
			})
		}
		function onChangeAlertBoxBorderWidth(NewWidth) {
			setAttributes({
				AlertBoxBorderWidth: NewWidth
			})
		}
		function onChangeAlertBoxBorderRadius(NewRadius) {
			setAttributes({
				AlertBoxBorderRadius: NewRadius
			})
		}

		function onChangeSubWidgetWidth(NewWidth) {
			setAttributes({
				AlertBoxWidgetWidth: NewWidth
			})
		}

		function onChangeAlertIconBackgroundColor(NewColor) {
			setAttributes({
				AlertIconBackgroundColor: NewColor
			})
		}

		function onChangeAlertIconBackgroundBorderRadius(NewRadius) {
			setAttributes({
				AlertIconBackgroundBorderRadius:NewRadius
			})
		}


		function onChangeAlertIconActive(value) {

			var MainDiv = document.getElementById("IconWrapper");
			var Spans = MainDiv.getElementsByTagName('span');
			for (var i = 0; i < Spans.length; i++) {
				if (Spans[i].className.includes('active')){
					Spans[i].className = Spans[i].className.replace('active','')
				}
			}
			setAttributes({
				AlertBoxIconType: value.target.className
			})
			console.log(value.target.className)
			value.target.className = value.target.className + ' active'
		}


		function onChangeAlertBoxTextFontFamily(NewFamily) {
			setAttributes({
				AlertBoxTextFontFamily: NewFamily
			})
		}

		function onChangeAlertBoxTextFontWeight(NewWeight) {
			setAttributes({
				AlertBoxTextFontWeight: NewWeight
			})
		}

		function onChangeAlertBoxTextFontStyle(NewStyle) {
			setAttributes({
				AlertBoxTextStyle: NewStyle
			})
		}

		function onChangeAlertBoxTextFontDecoration(NewDecoration) {
			setAttributes({
				AlertBoxTextDecoration: NewDecoration
			})
		}

		function onChangeAlignmentIconChange(value) {

			if (value.target.tagName === 'SPAN'){
				var MainDiv = document.getElementById("AlignmentIconsParent");
				var Spans = MainDiv.getElementsByTagName('div');
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].getElementsByTagName('span')[0].className.includes('active')){
						Spans[i].getElementsByTagName('span')[0].className = Spans[i].getElementsByTagName('span')[0].className.replace('active','')
					}
				}
				console.log(value.target.tagName)
				value.target.className = value.target.className + ' active'

			}

		}

		return (
				[

					<InspectorControls>


						<PanelBody>

							<div className={'IconListWrapper'}>
								<div>
									<label><strong>Select Icon</strong></label>
								</div>
								<div id='IconWrapper' className={'IconListSubWrapper'}  onClickCapture={onChangeAlertIconActive}>
									<span className={'fa fa fa-rocket active'}></span>
									<span className={'fa fa fa-bell'} ></span>
									<span className={'fa fa fa-plane'}></span>
									<span className={'fa fa fa-clock'}></span>
									<span className={'fa fa fa-pen'} ></span>
									<span className={'fa fa-address-book'} ></span>

									<span className={'fa fa fa-ad'}></span>
									<span className={'fa fa fa-align-right'} ></span>
									<span className={'fa fa fa-allergies'}></span>
									<span className={'fa fa fa-ambulance'}></span>
									<span className={'fa fa fa-american-sign-language-interpreting'} ></span>
									<span className={'fa fa-anchor'} ></span>


									<span className={'fa fa fa-angle-double-down'}></span>
									<span className={'fa fa fa-angle-double-left'} ></span>
									<span className={'fa fa fa-angle-double-right'}></span>
									<span className={'fa fa fa-angle-double-up'}></span>
									<span className={'fa fa fa-angle-down'} ></span>
									<span className={'fa fa-angle-left'} ></span>
								</div>
							</div>
							<SelectControl
								label="Layout"
								value={ attributes.AlertBoxLayoutOptions }
								options={
									[
										{ label: 'Classic', value: 'Classic' },
										{ label: 'Simple', value: 'Simple' }
									]
								}
								onChange={ onChangeAlertBoxLayout}
							/>

							<RangeControl
								label={<strong>Icon Size</strong>}
								value={ attributes.AlertBoxIconSize }
								onChange={ onChangeIconSize }
								min={ 0.2 }
								max={ 15 }
								step ={0.1}
							/>
							<RangeControl
								label={<strong>Icon Radius</strong>}
								value={ attributes.AlertIconBackgroundBorderRadius }
								onChange={ onChangeAlertIconBackgroundBorderRadius }
								min={ 0 }
								max={ 50 }
								step ={1}
							/>

							<RangeControl
								label={<strong>Text Size</strong>}
								value={ attributes.AlertBoxTextSize }
								onChange={ onChangeTextSize }
								min={ 0.2 }
								max={ 5 }
								step ={0.1}
							/>

							{
								(attributes.AlertBoxLayoutOptions === 'Classic')?null:
									<div>
										<RangeControl
											label={<strong>Icon Spacing</strong>}
											value={ attributes.AlertBoxIconSpacing }
											onChange={ onChangeAlertBoxIconSpacing }
											min={ 0.0 }
											max={ 10 }
											step ={0.1}
										/>
									</div>
							}

							<PanelRow>

								<div style={{paddingBottom: '2%'}}>
									<label><strong>Alignment</strong></label>
								</div>
								<div id = {'AlignmentIconsParent'} className={'InspectorControlAlertBoxAlignment'} onClick={onChangeAlignmentIconChange}>

									<div className={'InspectorControlAlertBoxAlignmentEach'}  onClick={() => onChangeAlertBoxClassicAlignment('flex-start')}>
										<span className="fas fa-align-left AlignmentIconsStyle active" ></span>
									</div>
									<div className={'InspectorControlAlertBoxAlignmentEach'} onClick={() => onChangeAlertBoxClassicAlignment('center')}>
										<span className="fas fa-align-center AlignmentIconsStyle"></span>
									</div>
									<div className={'InspectorControlAlertBoxAlignmentEach'} onClick={() => onChangeAlertBoxClassicAlignment('flex-end')}>
										<span className="fas fa-align-right AlignmentIconsStyle"></span>
									</div>
								</div>

							</PanelRow>

						</PanelBody>

						<PanelBody title={'Border'}>
							<SelectControl
								label="Border Type"
								value={ attributes.AlertBoxBorderStyle }
								options={
									[
										{ label: 'None', value: 'None' },
										{ label: 'Solid', value: 'Solid' },
										{ label: 'Double', value: 'Double' },
										{ label: 'Dotted', value: 'Dotted' },
										{ label: 'Dashed', value: 'Dashed' },
										{ label: 'groove', value: 'groove' }
									]
								}
								onChange={ onChangeAlertBoxBorderStyle}
							/>

							{
								(attributes.AlertBoxBorderStyle === 'None')?null:
									<div>

										<p><strong>Border Color</strong></p>
										<ColorPalette
											value={attributes.AlertBoxBorderColor}
											onChange={onChangeAlertBoxBorderColor}
											colors = {ToolBarColors}
										/>


										<RangeControl
											label={<strong>Border Width</strong>}
											value={ attributes.AlertBoxBorderWidth }
											onChange={ onChangeAlertBoxBorderWidth }
											min={ 0 }
											max={ 50 }
											step ={1}
										/>


										<RangeControl
											label={<strong>Border Radius</strong>}
											value={ attributes.AlertBoxBorderRadius }
											onChange={ onChangeAlertBoxBorderRadius }
											min={ 0 }
											max={ 50 }
											step ={1}
										/>
									</div>
							}

						</PanelBody>

						<PanelBody title={'Typography'}>
							<PanelRow>
								<SelectControl
									label="Font Family"
									value={ attributes.AlertBoxTextFontFamily }
									options={ GLOBAL_FONTS }
									onChange={ onChangeAlertBoxTextFontFamily}
								/>

							</PanelRow>

							<PanelRow>
								<SelectControl
									label="Weight"
									value={ attributes.AlertBoxTextFontWeight }
									options={ FontWeightAvaibles }
									onChange={ onChangeAlertBoxTextFontWeight}
								/>
							</PanelRow>

							<SelectControl
								label="Style"
								value={ attributes.AlertBoxTextStyle }
								options={
									[
										{ label: 'Normal', value: 'Normal' },
										{ label: 'oblique', value: 'oblique' },
										{ label: 'italic', value: 'italic' },
									]
								}
								onChange={ onChangeAlertBoxTextFontStyle}
							/>

							<SelectControl
								label="Decoration"
								value={ attributes.AlertBoxTextDecoration }
								options={
									[
										{ label: 'None', value: 'None' },
										{ label: 'underline', value: 'underline' },
										{ label: 'overline', value: 'overline' },
										{ label: 'line-through', value: 'line-through' },
									]
								}
								onChange={ onChangeAlertBoxTextFontDecoration}
							/>
						</PanelBody>

						<PanelBody title={'Colors'}>

							<p><strong>Text Color</strong></p>
							<ColorPalette
								value={attributes.AlertBoxTextColor}
								onChange={OnChangeAlertBoxTextColor}
								colors = {ToolBarColors}
								/>
							<p><strong>Icon Color</strong></p>
							<ColorPalette
								value={attributes.AlertBoxIconColor}
								onChange={onChangeIconColor}
								colors = {ToolBarColors}
							/>


							<p><strong>Icon Backgound Color</strong></p>
							<ColorPalette
								value={attributes.AlertIconBackgroundColor}
								onChange={onChangeAlertIconBackgroundColor}
								colors = {ToolBarColors}
							/>



						</PanelBody>

						<PanelBody title={'Background'}>
							<p><strong>Fill Color</strong></p>
							<ColorPalette
								value = {attributes.AlertBoxColor}
								onChange = {onChangeAlertBoxColor}
								colors = {ToolBarColors}
							/>
						</PanelBody>

					</InspectorControls>,

					<div className={'WidgetContainer'}>

						<div style={SubWidgetStyling}>

							<div style={ParentContainerStyling} className={'container'}>
								<div className={"box"}>
									<i style={AlertIconStyling} className={attributes.AlertBoxIconType}></i>
								</div>
								<RichText
									tagName="div" // The tag here is the element output and editable in the admin
									value={ attributes.AlertBoxText } // Any existing content, either from the database or an attribute default
									className = {'box'}
									style = {AlertTextStyling}
									formattingControls={ [ 'bold', 'italic', 'link', 'text-color', 'text-highlight'] } // Allow the content to be made bold or italic, but do not allow other formatting options
									onChange={ onAlertBoxTextChange } // Store updated content as a block attribute
									placeholder={ __( 'This is Magik Alert Block' ) } // Display this text before any content has been added by the user
								/>
							</div>
						</div>


					</div>
				]
			)


	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save ({attributes}) {

		const ParentContainerStyling = {
			backgroundColor: attributes.AlertBoxColor,
			borderColor: attributes.AlertBoxBorderColor,
			flexDirection: attributes.AlertBoxLayoutAttribute,
			alignItems: attributes.AlertBoxClassicAlignment,
			justifyContent: attributes.AlertBoxSimpleAlignment,
			borderStyle: attributes.AlertBoxBorderStyle,
			borderWidth: attributes.AlertBoxBorderWidth + 'px',
			borderRadius: attributes.AlertBoxBorderRadius + 'px'
		}

		const AlertIconStyling = {
			fontSize: attributes.AlertBoxIconSize + 'rem',
			color: attributes.AlertBoxIconColor,
			backgroundColor: attributes.AlertIconBackgroundColor,
			borderRadius: attributes.AlertIconBackgroundBorderRadius,
			padding: '0.2em'
		}

		const AlertTextStyling = {
			display: 'block',
			fontSize: attributes.AlertBoxTextSize + 'rem',
			color: attributes.AlertBoxTextColor,
			paddingLeft: attributes.AlertBoxIconSpacing + 'em',
			wordWrap: 'break-word'
		}

		const SubWidgetStyling = {
			width: '100%',
		}

		return <div className={'WidgetContainer'}>
			<div style={SubWidgetStyling}>

				<div style={ParentContainerStyling} className={'container'}>
					<div className={"box"}>
						<i style={AlertIconStyling} className={attributes.AlertBoxIconType}></i>
					</div>

					<RichText.Content
						tagName="div" // The tag here is the element output and editable in the admin
						value={ attributes.AlertBoxText } // Any existing content, either from the database or an attribute default
						className = {'box'}
						style = {AlertTextStyling}
					/>
				</div>
			</div>

		</div>




	},


} );
