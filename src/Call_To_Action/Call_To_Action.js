/**
 * BLOCK: Call to Action
 *
 * Registering a basic Call_To_Action with Gutenberg.
 * Simple Call_To_Action , renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import { GLOBAL_FONTS } from '../Global_Fonts';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType,
	// For attribute sources
} = wp.blocks;

const {
	RichText,
	InspectorControls,
	MediaUpload
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	TextControl,
	RangeControl,
	ToggleControl,
	SelectControl,
	Button,
	ColorPicker,
	ColorPalette,
	FontSizePicker,
	CheckboxControl
} = wp.components;


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new Call_To_Action  provided a unique name and an object defining its
 * behavior. Once registered, Call_To_Action  is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          Call_To_Action , if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'k2/call-to-action-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Call To Action' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'magik-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {
		LayoutDesign: {
			type: 'string',
			default: 'Classic'
		},
		CTA_Image: {
			type: 'string',
			default: 'http://localhost/wordpress/wp-content/uploads/2020/04/Culture-and-Diversity-e1575982916249.jpg'
		},
		CTAHeadingText: {
			type: 'string',
			default: 'Classic Call To Action'
		},
		CTAParagraphText: {
			type: 'string',
			default: 'Hello, I’m a classic Call to Action block with a heading, paragraph, button, and an image. You can edit all these elements in any way you want to.'
		},
		CTAButtonText: {
			type: 'string',
			default: 'Read More'
		},
		CTAOverlayColorRed: {
			type: 'number',
			default: 68
		},
		CTAOverlayColorGreen: {
			type: 'number',
			default: 68
		},
		CTAOverlayColorBlue: {
			type: 'number',
			default: 68
		},
		CTAOverlayColorAlpha: {
			type: 'number',
			default: 0.0
		},
		CTAOverlayEnableDisable: {
			type: 'boolean',
			default: false
		},
		CTAClassicPosition: {
			type: 'string',
			default: 'row'
		},
		CTACoverContainerHeight: {
			type: 'number',
			default: 70
		},
		CTAClassicBoxHeight: {
			type: 'number',
			default: 70
		},
		CTAAlignment: {
			type: 'string',
			default: 'flex-start'
		},
		CTABoxWidth: {
			type: 'number',
			default: 80
		},
		InspectorControlClassicOptionDisplay:{
			type: 'string',
			default: 'Left'
		},
		CTAisHeadingEnabled: {
			type: 'boolean',
			default: true
		},
		CTAisParagraphyEnabled: {
			type: 'boolean',
			default: true
		},
		CTAisButtonEnabled: {
			type: 'boolean',
			default: true
		},
		CTAInnerContainerPlacement: {
			type: 'string',
			default: 'center'
		},
		CTAHeadingColor: {
			type: 'string',
			default: '#002147'
		},
		CTAParagraphColor: {
			type: 'string',
			default: '#002147'
		},
		CTAHeadingFontSize: {
			type: 'number',
			default: 2
		},
		CTAParagraphyFontSize: {
			type: 'number',
			default: 0.5
		},
		CTAButtonFontSize: {
			type: 'number',
			default: 1.4
		},
		CTAHeadingFontFamily: {
			type: 'string',
			default: 'Lucida Console'
		},
		CTAParagraphFontFamily: {
			type: 'string',
			default: 'Lucida Console'
		},
		CTAButtonFontFamily: {
			type: 'string',
			default: 'Lucida Console'
		},
		CTAButtonFontWeight: {
			type: 'string',
			default: 'normal'
		},
		CTAButtonTextStyle: {
			type: 'number',
			default: 'normal'
		},
		CTAButtonTextDecoration: {
			type: 'string',
			default: 'None'
		},

		CTAHeadingFontWeight: {
			type: 'string',
			default: 'normal'
		},
		CTAHeadingTextStyle: {
			type: 'number',
			default: 'normal'
		},
		CTAHeadingTextDecoration: {
			type: 'string',
			default: 'None'
		},


		CTAParagraphFontWeight: {
			type: 'string',
			default: 'normal'
		},
		CTAParagraphTextStyle: {
			type: 'number',
			default: 'normal'
		},
		CTAParagraphTextDecoration: {
			type: 'string',
			default: 'None'
		},

		CTAButtonBorderStyle: {
			type: 'string',
			default: 'None'
		},
		CTAButtonBorderWidth: {
			type: 'number',
			default: 2
		},
		CTAButtonBorderRadius: {
			type: 'number',
			default: 0
		},
		CTAButtonBorderColor: {
			type: 'string',
			default: 'blue'
		},
		CTAButtonColor: {
			type: 'string',
			default: 'blue'
		},
		CTAButtonTextColor: {
			type: 'string',
			default: 'white'
		},
		CTAButtonlink: {
			type: 'string',
			default: ''
		},
		CTAButtonLinkOpenNewTab: {
			type: 'boolean',
			default: false
		}
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

		const CTAIMAGE = {
			backgroundImage: 'url("' +attributes.CTA_Image + '")'
		}
		const FontWeightAvaibles= [
			{ label: 'normal'},
			{ label: '100'},
			{ label: '200'},
			{ label: '300'},
			{ label: '400'},
			{ label: '500'},
			{ label: '600'},
		]
		const colors = [
			{ name: 'red', color: '#f00' },
			{ name: 'white', color: '#fff' },
			{ name: 'blue', color: '#00f' },
		];
		const ToolBarColors = [
			{ color: '#32897A' },
			{  color: '#1995AD' },
			{  color: '#011A27' },
			{  color: '#F69454' },
		];

		const BoxedContainerStyling = {
			justifyContent: attributes.CTAAlignment
		}

		const ClassicParentContainer = {
			flexDirection: attributes.CTAClassicPosition,
			minHeight: attributes.CTAClassicBoxHeight + 'vh',
			width: attributes.CTABoxWidth + 'rem'
		}

		const ClassicImageContainerStyling = {
			flexBasis: attributes.CTAClassicImageContainerWidth + '%',
			boxShadow: 'inset 0 0 0 100vh rgba(' + attributes.CTAOverlayColorRed + ',' + attributes.CTAOverlayColorGreen + ',' + attributes.CTAOverlayColorBlue + ',' + attributes.CTAOverlayColorAlpha + ')',
			backgroundImage: 'url("' +attributes.CTA_Image + '")',
			minHeight: attributes.CTACoverContainerHeight + 'vh'
		}

		const CoverParentStyling = {
			boxShadow: 'inset 0 0 0 100vh rgba(' + attributes.CTAOverlayColorRed + ',' + attributes.CTAOverlayColorGreen + ',' + attributes.CTAOverlayColorBlue + ',' + attributes.CTAOverlayColorAlpha + ')',
			backgroundImage: 'url("' +attributes.CTA_Image + '")',
			minHeight: attributes.CTACoverContainerHeight + 'vh',
			width: attributes.CTABoxWidth + 'rem'

		}

		const CTATextAlignment = {
			textAlign: attributes.CTAInnerContainerPlacement
		}

		const CTAHeadingStyling = {
			color: attributes.CTAHeadingColor,
			fontSize: attributes.CTAHeadingFontSize + 'em',
			fontFamily: attributes.CTAHeadingFontFamily,
			fontWeight: attributes.CTAHeadingFontWeight,
			fontStyle: attributes.CTAHeadingTextStyle,
			textDecoration: attributes.CTAHeadingTextDecoration
		}

		const CTAParagraphStyling = {
			color: attributes.CTAParagraphColor,
			fontSize: attributes.CTAParagraphyFontSize + 'em',
			fontFamily: attributes.CTAParagraphFontFamily,
			fontWeight: attributes.CTAParagraphFontWeight,
			fontStyle: attributes.CTAParagraphTextStyle,
			textDecoration: attributes.CTAParagraphTextDecoration
		}

		const CTAButtonStyling = {
			fontSize: attributes.CTAButtonFontSize + 'em',
			fontFamily: attributes.CTAButtonFontFamily,
			fontWeight: attributes.CTAButtonFontWeight,
			fontStyle: attributes.CTAButtonTextStyle,
			textDecoration: attributes.CTAButtonTextDecoration,
			borderColor: attributes.CTAButtonBorderColor,
			borderRadius: attributes.CTAButtonBorderRadius,
			borderStyle: attributes.CTAButtonBorderStyle,
			borderWidth: attributes.CTAButtonBorderWidth,
			backgroundColor: attributes.CTAButtonColor,
			color: attributes.CTAButtonTextColor
		}

		function onChangeCTAButtonColor(Newcolor) {
			setAttributes({
				CTAButtonColor: Newcolor
			})
		}

		function onChangeCTAButtonTextColor(NewColor) {
			setAttributes({
				CTAButtonTextColor: NewColor
			})
		}

		function onChangeCTAInnerContainerPlacement(NewPlacement) {
			setAttributes({
				CTAInnerContainerPlacement: NewPlacement
			})
		}
		function onChangeCTAParagraph(NewText) {
			setAttributes({
				CTAParagraphText: NewText
			})
		}
		function onChangeCTAHeading(NewHeadingText) {
			setAttributes({
				CTAHeadingText: NewHeadingText
			})
		}

		function onChangeLayoutSelection(NewLayout) {
			setAttributes({
				LayoutDesign: NewLayout
			})
			console.log(attributes.LayoutDesign)
		}

		function onChangeCTAImageSelection(NewImage) {
			setAttributes({
				CTA_Image: NewImage.url
			})
		}

		function onChangeCTAButtonText(NewText) {
			setAttributes({
				CTAButtonText: NewText
			})
		}

		function onChangeCTAOverlayColor(NewColor) {
			setAttributes({
				CTAOverlayColorRed: NewColor['rgb'].r,

				CTAOverlayColorGreen: NewColor['rgb'].g,

				CTAOverlayColorBlue: NewColor['rgb'].b,

				CTAOverlayColorAlpha: NewColor['rgb'].a
			})

		}

		function onChangeCTAOverlayEnableDisable(NewSetting) {
			setAttributes({
				CTAOverlayEnableDisable: NewSetting
			})
			if(NewSetting === true){
				setAttributes({
					CTAOverlayColorAlpha: 0.3
				})
			} else if(NewSetting === false) {
				setAttributes({
					CTAOverlayColorAlpha: 0.0
				})
			}
		}

		function onChangeCTAClassicPosition(NewPosition) {
			console.log(NewPosition)
			if (NewPosition === 'Right'){
				setAttributes({
					CTAClassicPosition: 'row-reverse',
				})
			} else 	if (NewPosition === 'Left'){
				setAttributes({
					CTAClassicPosition: 'row',
				})
			}

			setAttributes({

				InspectorControlClassicOptionDisplay: NewPosition,
				CTAClassicImageContainerWidth: 50
			})

		}



		function onChangeCTACoverContainerHeight(NewHeight) {
			setAttributes({
				CTACoverContainerHeight: NewHeight
			})
		}

		function onChnageCTAClassicBoxHeight(Newheight) {
			setAttributes({
				CTAClassicBoxHeight: Newheight
			})
		}

		function onChangeCTAAllignment(NewAlignment) {
			setAttributes({
				CTAAlignment: NewAlignment
			})
		}

		function onChangeCTABoxWidth(NewWidth) {
			setAttributes({
				CTABoxWidth: NewWidth
			})
		}

		function onChangeCTAisHeadingEnabled(NewValue) {
			setAttributes({
				CTAisHeadingEnabled: NewValue
			})
		}
		function onChangeCTAisParagraphyEnabled(NewValue) {
			setAttributes({
				CTAisParagraphyEnabled: NewValue
			})
		}
		function onChangeCTAisButtonEnabled(Newoption) {
			setAttributes({
				CTAisButtonEnabled: Newoption
			})
		}

		function onChangeCTAHeadingColor(NewColor) {
			setAttributes({
				CTAHeadingColor: NewColor
			})
		}
		function onChangeCTAParagraphColor(NewColor) {
			setAttributes({
				CTAParagraphColor: NewColor
			})
		}

		function onChageCTAHeadingFontSize(NewFontSize) {
			setAttributes({
				CTAHeadingFontSize: NewFontSize
			})
		}

		function onChangeCTAParagraphyFontSize(NewFontSize) {
			setAttributes({
				CTAParagraphyFontSize: NewFontSize
			})
		}

		function onChangeCTAButtonFontSize(NewfontSize) {
			setAttributes({
				CTAButtonFontSize: NewfontSize
			})
		}

		function onChangeCTAHeadingFontWeight(NewWeight) {
			setAttributes({
				CTAHeadingFontWeight: NewWeight
			})
		}

		function onChangeCTAHeadingFontStyle(NewStyle) {
			setAttributes({
				CTAHeadingTextStyle: NewStyle
			})
		}

		function onChangeCTAHeadingFontDecoration(NewDecoration) {
			setAttributes({
				CTAHeadingTextDecoration: NewDecoration
			})
		}


		function onChangeCTAParagraphFontWeight(NewWeight) {
			setAttributes({
				CTAParagraphFontWeight: NewWeight
			})
		}

		function onChangeCTAParagraphFontStyle(NewStyle) {
			setAttributes({
				CTAParagraphTextStyle: NewStyle
			})
		}

		function onChangeCTAParagraphFontDecoration(NewDecoration) {
			setAttributes({
				CTAParagraphTextDecoration: NewDecoration
			})
		}


		function onChangeCTAButtonFontWeight(NewWeight) {
			setAttributes({
				CTAButtonFontWeight: NewWeight
			})
		}

		function onChangeCTAButtonFontStyle(NewStyle) {
			setAttributes({
				CTAButtonTextStyle: NewStyle
			})
		}

		function onChangeCTAButtonFontDecoration(NewDecoration) {
			setAttributes({
				CTAButtonTextDecoration: NewDecoration
			})
		}

		function onChangeCTAHeadingFontFamily(NewFont) {
			setAttributes({
				CTAHeadingFontFamily: NewFont
			})
		}


		function onChangeCTAParagraphyontFamily(NewFont) {
			setAttributes({
				CTAParagraphFontFamily: NewFont
			})
		}


		function onChangeCTAButtonFontFamily(NewFont) {
			setAttributes({
				CTAButtonFontFamily: NewFont
			})
		}

		function onChangeCTABorderColor(NewColor) {
			setAttributes({
				CTAButtonBorderColor: NewColor
			})
		}


		function onChangeCTABorderWidth(NewWidth) {
			setAttributes({
				CTAButtonBorderWidth: NewWidth
			})
		}

		function onChangeCTABorderRadius(NewRadius) {
			setAttributes({
				CTAButtonBorderRadius: NewRadius
			})
		}

		function onChangeCTABorderStyle(NewStyle) {
			setAttributes({
				CTAButtonBorderStyle: NewStyle
			})
		}

		function onChangeCTAButtonLink(NewLink) {
			setAttributes({
				CTAButtonlink: NewLink
			})
		}

		function onChangeCTAButtonLinkNewTab(NewTab) {
			setAttributes({
				CTAButtonLinkOpenNewTab: NewTab
			})
		}

		return ( [
			<InspectorControls>
				<PanelBody title={'Layout Settings'}>


					<SelectControl
						label="Skin"
						value={ attributes.LayoutDesign }
						options={
							[
								{ label: 'Classic', value: 'Classic' },
								{ label: 'Cover', value: 'Cover' }
							]
						}
						onChange={ onChangeLayoutSelection}
					/>


						{
							(attributes.LayoutDesign == 'Classic')
								?
										<SelectControl
											label="Text Position"
											value={ attributes.InspectorControlClassicOptionDisplay }
											options={
												[
													{ label: 'Left', value: 'Left' },
													{ label: 'Right', value: 'Right' }
												]
											}
											onChange={ onChangeCTAClassicPosition}
										/>
								:
								null
						}

					<PanelRow>

						<div style={{paddingBottom: '2%'}}>
							<label><strong>Position</strong></label>
						</div>
						<div className={'InspectorControlAlertBoxAlignment'}>

							<div className={'InspectorControlAlertBoxAlignmentEach'}  onClick={() => onChangeCTAAllignment('flex-start')}>
								<i className="fas fa-align-left" ></i>
							</div>
							<div className={'InspectorControlAlertBoxAlignmentEach'} onClick={() => onChangeCTAAllignment('center')}>
								<i className="fas fa-align-center"></i>
							</div>
							<div className={'InspectorControlAlertBoxAlignmentEach'} onClick={() => onChangeCTAAllignment('flex-end')}>
								<i className="fas fa-align-right"></i>
							</div>
						</div>

					</PanelRow>

					<PanelRow>

						<div style={{paddingBottom: '2%'}}>
							<label><strong>Text Alignment</strong></label>
						</div>
						<div className={'InspectorControlAlertBoxAlignment'}>

							<div className={'InspectorControlAlertBoxAlignmentEach'}  onClick={() => onChangeCTAInnerContainerPlacement('left')}>
								<i className="fas fa-align-left" ></i>
							</div>
							<div className={'InspectorControlAlertBoxAlignmentEach'} onClick={() => onChangeCTAInnerContainerPlacement('center')}>
								<i className="fas fa-align-center"></i>
							</div>
							<div className={'InspectorControlAlertBoxAlignmentEach'} onClick={() => onChangeCTAInnerContainerPlacement('right')}>
								<i className="fas fa-align-right"></i>
							</div>
						</div>

					</PanelRow>

				</PanelBody>

				<PanelBody title={'Box'}>
					{
						(attributes.LayoutDesign == 'Classic')?
							<div>


								<RangeControl
									label={<strong> Box Height </strong>}
									value={ attributes.CTAClassicBoxHeight }
									onChange={ onChnageCTAClassicBoxHeight }
									min={ 0 }
									max={ 100 }
									step ={1}
								/>
								<RangeControl
									label={<strong> Image Height </strong>}
									value={ attributes.CTACoverContainerHeight }
									onChange={ onChangeCTACoverContainerHeight }
									min={ 0 }
									max={ 100 }
									step ={1}
								/>
							</div>

							:
							<RangeControl
								label={<strong> Box Height </strong>}
								value={ attributes.CTACoverContainerHeight }
								onChange={ onChangeCTACoverContainerHeight }
								min={ 0 }
								max={ 100 }
								step ={1}
							/>

					}

					<RangeControl
						label={<strong> Box Width </strong>}
						value={ attributes.CTABoxWidth }
						onChange={ onChangeCTABoxWidth }
						min={ 10 }
						max={ 100 }
						step ={1}
					/>
				</PanelBody>


				<PanelBody title={'Background Image'}>
					<MediaUpload
						onSelect = {onChangeCTAImageSelection}
						type = {'images'}
						value = {attributes.CTA_Image}
						render={ ({open}) => {
							return <div style={CTAIMAGE} className={'ImageSelectControl'}>
									<i className="fa fa-plus-circle" onClick={open}></i>
							</div>;
						}}
						 >
					</MediaUpload>


				</PanelBody>

				<PanelBody title={'Overlay'}>
					<PanelRow>
						<p>
							Overlay
						</p>
						<ToggleControl
							checked = {attributes.CTAOverlayEnableDisable}
							onChange = {onChangeCTAOverlayEnableDisable}
						/>

					</PanelRow>

					{
						(attributes.CTAOverlayEnableDisable === true)?<div>
							<label > Fill Color </label>
							<ColorPicker
								color={ colors }
								value = {attributes.CTAOverlayColor}
								onChangeComplete={ onChangeCTAOverlayColor }
							/>
							</div>
							:null
					}


				</PanelBody>

				<PanelBody title={'Heading'}>
					<PanelRow>
						<p>
							Heading
						</p>

						<ToggleControl
							checked = {attributes.CTAisHeadingEnabled}
							onChange = {onChangeCTAisHeadingEnabled}
						/>

					</PanelRow>

					{
						(attributes.CTAisHeadingEnabled === true)?<div>
							<ColorPalette
								value = {attributes.CTAHeadingColor}
								onChange = {onChangeCTAHeadingColor}
								colors = {colors} />

							<RangeControl
								label={<strong> Font Size </strong>}
								value={ attributes.CTAHeadingFontSize }
								onChange={ onChageCTAHeadingFontSize }
								min={ 0 }
								max={ 15 }
								step ={0.1}
							/>

							<PanelRow>
								<SelectControl
									label="Font Family"
									value={ attributes.CTAHeadingFontFamily }
									options={ GLOBAL_FONTS }
									onChange={ onChangeCTAHeadingFontFamily}
								/>

							</PanelRow>

							<PanelRow>
								<SelectControl
									label="Weight"
									value={ attributes.CTAHeadingFontWeight }
									options={ FontWeightAvaibles }
									onChange={ onChangeCTAHeadingFontWeight}
								/>
							</PanelRow>

							<SelectControl
								label="Style"
								value={ attributes.CTAHeadingTextStyle }
								options={
									[
										{ label: 'Normal', value: 'Normal' },
										{ label: 'oblique', value: 'oblique' },
										{ label: 'italic', value: 'italic' },
									]
								}
								onChange={ onChangeCTAHeadingFontStyle}
							/>

							<SelectControl
								label="Decoration"
								value={ attributes.CTAHeadingTextDecoration }
								options={
									[
										{ label: 'None', value: 'None' },
										{ label: 'underline', value: 'underline' },
										{ label: 'overline', value: 'overline' },
										{ label: 'line-through', value: 'line-through' },
									]
								}
								onChange={ onChangeCTAHeadingFontDecoration}
							/>

						</div>:null
					}

				</PanelBody>

				<PanelBody title={'Paragraph'}>
					<PanelRow>
						<p>
							Paragraph
						</p>
						<ToggleControl
							checked = {attributes.CTAisParagraphyEnabled}
							onChange = {onChangeCTAisParagraphyEnabled}
						/>

					</PanelRow>

					{
						(attributes.CTAisParagraphyEnabled === true)?<div>

							<ColorPalette
								value = {attributes.CTAParagraphColor}
								onChange = {onChangeCTAParagraphColor}
								colors = {colors} />

							<RangeControl
								label={<strong> Font Size </strong>}
								value={ attributes.CTAParagraphyFontSize }
								onChange={ onChangeCTAParagraphyFontSize }
								min={ 0 }
								max={ 15 }
								step ={0.1}
							/>

							<PanelRow>
								<SelectControl
									label="Font Family"
									value={ attributes.CTAParagraphFontFamily }
									options={ GLOBAL_FONTS }
									onChange={ onChangeCTAParagraphyontFamily}
								/>

							</PanelRow>

							<PanelRow>
								<SelectControl
									label="Weight"
									value={ attributes.CTAParagraphFontWeight }
									options={ FontWeightAvaibles }
									onChange={ onChangeCTAParagraphFontWeight}
								/>
							</PanelRow>

							<SelectControl
								label="Style"
								value={ attributes.CTAParagraphTextStyle }
								options={
									[
										{ label: 'Normal', value: 'Normal' },
										{ label: 'oblique', value: 'oblique' },
										{ label: 'italic', value: 'italic' },
									]
								}
								onChange={ onChangeCTAParagraphFontStyle}
							/>

							<SelectControl
								label="Decoration"
								value={ attributes.CTAParagraphTextDecoration }
								options={
									[
										{ label: 'None', value: 'None' },
										{ label: 'underline', value: 'underline' },
										{ label: 'overline', value: 'overline' },
										{ label: 'line-through', value: 'line-through' },
									]
								}
								onChange={ onChangeCTAParagraphFontDecoration}
							/>


						</div>:null
					}

				</PanelBody>


				<PanelBody title={'Button'}>

					<PanelRow>
						<p>
							Button
						</p>
						<ToggleControl
							checked = {attributes.CTAisButtonEnabled}
							onChange = {onChangeCTAisButtonEnabled}
						/>

					</PanelRow>

					{
						(attributes.CTAisButtonEnabled === true)?<div>
							<TextControl
								label="Button Text"
								value={ attributes.CTAButtonText }
								onChange={ onChangeCTAButtonText}
							/>

							<TextControl
								label="Url"
								help="link Format: https://www.google.com/"
								value={ attributes.CTAButtonlink }
								onChange={ onChangeCTAButtonLink}
							/>
							<CheckboxControl
								label="Open in New Tab"
								checked={ attributes.CTAButtonLinkOpenNewTab}
								onChange={ onChangeCTAButtonLinkNewTab }
							/>


							<ColorPalette
							value = {attributes.CTAButtonTextColor}
							onChange = {onChangeCTAButtonTextColor}
							colors = {colors} />


							<ColorPalette
								value = {attributes.CTAButtonColor}
								onChange = {onChangeCTAButtonColor}
								colors = {colors} />


							<RangeControl
								label={<strong> Font Size </strong>}
								value={ attributes.CTAButtonFontSize }
								onChange={ onChangeCTAButtonFontSize }
								min={ 0 }
								max={ 15 }
								step ={0.1}
							/>

							<PanelRow>
								<SelectControl
									label="Font Family"
									value={ attributes.CTAButtonFontFamily }
									options={ GLOBAL_FONTS }
									onChange={ onChangeCTAButtonFontFamily}
								/>

							</PanelRow>

							<PanelRow>
								<SelectControl
									label="Weight"
									value={ attributes.CTAButtonFontWeight }
									options={ FontWeightAvaibles }
									onChange={ onChangeCTAButtonFontWeight}
								/>
							</PanelRow>

							<SelectControl
								label="Style"
								value={ attributes.CTAButtonTextStyle }
								options={
									[
										{ label: 'Normal', value: 'Normal' },
										{ label: 'oblique', value: 'oblique' },
										{ label: 'italic', value: 'italic' },
									]
								}
								onChange={ onChangeCTAButtonFontStyle}
							/>

							<SelectControl
								label="Decoration"
								value={ attributes.CTAButtonTextDecoration }
								options={
									[
										{ label: 'None', value: 'None' },
										{ label: 'underline', value: 'underline' },
										{ label: 'overline', value: 'overline' },
										{ label: 'line-through', value: 'line-through' },
									]
								}
								onChange={ onChangeCTAButtonFontDecoration}
							/>
								<SelectControl
									label="Border Type"
									value={ attributes.CTAButtonBorderStyle }
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
									onChange={ onChangeCTABorderStyle}
								/>

								{
									(attributes.CTAButtonBorderStyle === 'None')?null:
										<div>

											<p><strong>Border Color</strong></p>
											<ColorPalette
												value={attributes.CTAButtonBorderColor}
												onChange={onChangeCTABorderColor}
												colors = {ToolBarColors}
											/>


											<RangeControl
												label={<strong>Border Width</strong>}
												value={ attributes.CTAButtonBorderWidth }
												onChange={ onChangeCTABorderWidth }
												min={ 0 }
												max={ 50 }
												step ={1}
											/>


											<RangeControl
												label={<strong>Border Radius</strong>}
												value={ attributes.CTAButtonBorderRadius }
												onChange={ onChangeCTABorderRadius }
												min={ 0 }
												max={ 50 }
												step ={1}
											/>
										</div>
								}

							</div>


							:null
					}

				</PanelBody>

			</InspectorControls>,
			<div>
				{
					(attributes.LayoutDesign == 'Classic')?
						<div  style={BoxedContainerStyling} className={'BoxedContainer'}>

							<div style={ClassicParentContainer} className={'ClassicParentContainer'}>
								<div style={CTATextAlignment} className={'ClassicTextContainer'}>
									{
										(attributes.CTAisHeadingEnabled === true)?
										<RichText
										tagName="h1" // The tag here is the element output and editable in the admin
										value={ attributes.CTAHeadingText } // Any existing content, either from the database or an attribute default
										style={CTAHeadingStyling}
										className = {'ClassicHeadingStyle'}
										formattingControls={ [ 'bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
										onChange={ onChangeCTAHeading } // Store updated content as a block attribute
										placeholder={ __( 'K2 Call To Action' ) } // Display this text before any content has been added by the user
										/>
										: null
									}

									{
										( attributes.CTAisParagraphyEnabled === true ) ?
											<RichText
												tagName="p" // The tag here is the element output and editable in the admin
												value={ attributes.CTAParagraphText } // Any existing content, either from the database or an attribute default
												style={CTAParagraphStyling}
												className={ 'ClassicParagraphHeading' }
												formattingControls={ ['bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
												onChange={ onChangeCTAParagraph } // Store updated content as a block attribute
												placeholder={ __( 'Having years of experience running summer courses, we have observed young students beginning the programme with much trepidation and anxiety, but leaving Oxford having had one of the most enriching and memorable experiences of their lives.' ) } // Display this text before any content has been added by the user
											/>
											: null
									}

									{
										( attributes.CTAisButtonEnabled === true ) ?

											<button style={CTAButtonStyling} className={ 'ClassicButtonStyling' }>
												{ attributes.CTAButtonText }
											</button>
											: null
									}
								</div>
								<div style={ClassicImageContainerStyling} className={'ClassicImageContainer'}>

								</div>
							</div>
						</div>

						: <div  style={BoxedContainerStyling} className={'BoxedContainer'}>

							<div style={CoverParentStyling} className={'CoverParentContainer'}>

								<div style={CTATextAlignment} className={'CoverTextContainer'}>
									{
										( attributes.CTAisHeadingEnabled === true ) ?
											<RichText
												tagName="h1" // The tag here is the element output and editable in the admin
												value={ attributes.CTAHeadingText } // Any existing content, either from the database or an attribute default
												style={CTAHeadingStyling}
												className={ 'CoverHeadingStyle' }
												formattingControls={ ['bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
												onChange={ onChangeCTAHeading } // Store updated content as a block attribute
												placeholder={ __( 'K2 Call To Action' ) } // Display this text before any content has been added by the user
											/>
											: null
									}

									{
										( attributes.CTAisParagraphyEnabled === true ) ?
									<RichText
										tagName="p" // The tag here is the element output and editable in the admin
										value={ attributes.CTAParagraphText } // Any existing content, either from the database or an attribute default
										style={CTAParagraphStyling}
										className = {'CoverParagraphHeading'}
										formattingControls={ [ 'bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
										onChange={ onChangeCTAParagraph } // Store updated content as a block attribute
										placeholder={ __( 'Having years of experience running summer courses, we have observed young students beginning the programme with much trepidation and anxiety, but leaving Oxford having had one of the most enriching and memorable experiences of their lives.' ) } // Display this text before any content has been added by the user
									/>
										: null
									}


									{
										( attributes.CTAisButtonEnabled === true ) ?
											<button style={CTAButtonStyling} className={ 'CoverButtonStyling' }>
												{ attributes.CTAButtonText }
											</button>
											: null
									}
								</div>
							</div>

						</div>
				}
			</div>
		] )
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
	save ({attributes, setAttributes}) {

		const CTAIMAGE = {
			backgroundImage: 'url("' +attributes.CTA_Image + '")'
		}
		const FontWeightAvaibles= [
			{ label: 'normal'},
			{ label: '100'},
			{ label: '200'},
			{ label: '300'},
			{ label: '400'},
			{ label: '500'},
			{ label: '600'},
		]
		const colors = [
			{ name: 'red', color: '#f00' },
			{ name: 'white', color: '#fff' },
			{ name: 'blue', color: '#00f' },
		];
		const ToolBarColors = [
			{ color: '#32897A' },
			{  color: '#1995AD' },
			{  color: '#011A27' },
			{  color: '#F69454' },
		];

		const BoxedContainerStyling = {
			justifyContent: attributes.CTAAlignment
		}

		const ClassicParentContainer = {
			flexDirection: attributes.CTAClassicPosition,
			minHeight: attributes.CTAClassicBoxHeight + 'vh',
			width: attributes.CTABoxWidth + 'rem'
		}

		const ClassicImageContainerStyling = {
			flexBasis: attributes.CTAClassicImageContainerWidth + '%',
			boxShadow: 'inset 0 0 0 100vh rgba(' + attributes.CTAOverlayColorRed + ',' + attributes.CTAOverlayColorGreen + ',' + attributes.CTAOverlayColorBlue + ',' + attributes.CTAOverlayColorAlpha + ')',
			backgroundImage: 'url("' +attributes.CTA_Image + '")',
			minHeight: attributes.CTACoverContainerHeight + 'vh'
		}

		const CoverParentStyling = {
			boxShadow: 'inset 0 0 0 100vh rgba(' + attributes.CTAOverlayColorRed + ',' + attributes.CTAOverlayColorGreen + ',' + attributes.CTAOverlayColorBlue + ',' + attributes.CTAOverlayColorAlpha + ')',
			backgroundImage: 'url("' +attributes.CTA_Image + '")',
			minHeight: attributes.CTACoverContainerHeight + 'vh',
			width: attributes.CTABoxWidth + 'rem'

		}

		const CTATextAlignment = {
			textAlign: attributes.CTAInnerContainerPlacement
		}

		const CTAHeadingStyling = {
			color: attributes.CTAHeadingColor,
			fontSize: attributes.CTAHeadingFontSize + 'em',
			fontFamily: attributes.CTAHeadingFontFamily,
			fontWeight: attributes.CTAHeadingFontWeight,
			fontStyle: attributes.CTAHeadingTextStyle,
			textDecoration: attributes.CTAHeadingTextDecoration
		}

		const CTAParagraphStyling = {
			color: attributes.CTAParagraphColor,
			fontSize: attributes.CTAParagraphyFontSize + 'em',
			fontFamily: attributes.CTAParagraphFontFamily,
			fontWeight: attributes.CTAParagraphFontWeight,
			fontStyle: attributes.CTAParagraphTextStyle,
			textDecoration: attributes.CTAParagraphTextDecoration
		}

		const CTAButtonStyling = {
			fontSize: attributes.CTAButtonFontSize + 'em',
			fontFamily: attributes.CTAButtonFontFamily,
			fontWeight: attributes.CTAButtonFontWeight,
			fontStyle: attributes.CTAButtonTextStyle,
			textDecoration: attributes.CTAButtonTextDecoration,
			borderColor: attributes.CTAButtonBorderColor,
			borderRadius: attributes.CTAButtonBorderRadius,
			borderStyle: attributes.CTAButtonBorderStyle,
			borderWidth: attributes.CTAButtonBorderWidth,
			backgroundColor: attributes.CTAButtonColor,
			color: attributes.CTAButtonTextColor
		}


		return <div>
			{
				(attributes.LayoutDesign == 'Classic')?
					<div  style={BoxedContainerStyling} className={'BoxedContainer'}>

						<div style={ClassicParentContainer} className={'ClassicParentContainer'}>
							<div style={CTATextAlignment} className={'ClassicTextContainer'}>
								{
									(attributes.CTAisHeadingEnabled === true)?
										<RichText.Content
											tagName="h1" // The tag here is the element output and editable in the admin
											value={ attributes.CTAHeadingText } // Any existing content, either from the database or an attribute default
											style={CTAHeadingStyling}
											className = {'ClassicHeadingStyle'}
										/>
										: null
								}

								{
									( attributes.CTAisParagraphyEnabled === true ) ?
										<RichText.Content
											tagName="p" // The tag here is the element output and editable in the admin
											value={ attributes.CTAParagraphText } // Any existing content, either from the database or an attribute default
											style={CTAParagraphStyling}
											className={ 'ClassicParagraphHeading' }
										/>
										: null
								}

								{
									( attributes.CTAisButtonEnabled === true ) ?
										(attributes.CTAButtonLinkOpenNewTab === false)?
										<button onclick={'window.location.href = "' + attributes.CTAButtonlink + '"'} style={CTAButtonStyling} className={ 'ClassicButtonStyling' }>
											{ attributes.CTAButtonText }
										</button>:
										<button
											onclick={"window.open('"+ attributes.CTAButtonlink + "','_blank')"}
											style={ CTAButtonStyling } className={ 'ClassicButtonStyling' }>
											{ attributes.CTAButtonText }
										</button>
										: null
								}
							</div>
							<div style={ClassicImageContainerStyling} className={'ClassicImageContainer'}>

							</div>
						</div>
					</div>

					: <div  style={BoxedContainerStyling} className={'BoxedContainer'}>

						<div style={CoverParentStyling} className={'CoverParentContainer'}>

							<div style={CTATextAlignment} className={'CoverTextContainer'}>
								{
									( attributes.CTAisHeadingEnabled === true ) ?
										<RichText.Content
											tagName="h1" // The tag here is the element output and editable in the admin
											value={ attributes.CTAHeadingText } // Any existing content, either from the database or an attribute default
											style={CTAHeadingStyling}
											className={ 'CoverHeadingStyle' }
										/>
										: null
								}

								{
									( attributes.CTAisParagraphyEnabled === true ) ?
										<RichText.Content
											tagName="p" // The tag here is the element output and editable in the admin
											value={ attributes.CTAParagraphText } // Any existing content, either from the database or an attribute default
											style={CTAParagraphStyling}
											className = {'CoverParagraphHeading'}
										/>
										: null
								}


								{
									( attributes.CTAisButtonEnabled === true ) ?
										(attributes.CTAButtonLinkOpenNewTab === false)?
											<button onclick={'window.location.href = "' + attributes.CTAButtonlink + '"'} style={CTAButtonStyling} className={ 'ClassicButtonStyling' }>
												{ attributes.CTAButtonText }
											</button>:
											<button
												onclick={"window.open(' + " + attributes.CTAButtonlink + "',_blank')"}
												style={ CTAButtonStyling } className={ 'ClassicButtonStyling' }>
												{ attributes.CTAButtonText }
											</button>
										: null
								}
							</div>
						</div>

					</div>
			}
		</div>



	},


} );
