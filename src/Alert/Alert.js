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
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'magik-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Alert blocks' ),
		__( 'Magik Blocks' ),
	],
	attributes: {

		AlertBoxText: {
			type: 'string',
			default: 'Hello Max! This is a warning for you! '
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
								<div className={'InspectorControlAlertBoxAlignment'}>

									<div className={'InspectorControlAlertBoxAlignmentEach'}  onClick={() => onChangeAlertBoxClassicAlignment('flex-start')}>
										<i className="fas fa-align-left" ></i>
									</div>
									<div className={'InspectorControlAlertBoxAlignmentEach'} onClick={() => onChangeAlertBoxClassicAlignment('center')}>
										<i className="fas fa-align-center"></i>
									</div>
									<div className={'InspectorControlAlertBoxAlignmentEach'} onClick={() => onChangeAlertBoxClassicAlignment('flex-end')}>
										<i className="fas fa-align-right"></i>
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
