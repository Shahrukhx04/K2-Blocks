/**
 * BLOCK: Call to Action
 *
 * Registering a basic Call_To_Action with Gutenberg.
 * Simple Call_To_Action , renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

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
	ColorPalette

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
			default: 'http://localhost/wordpress/wp-content/uploads/2020/04/OXFORD-EXPLORE-1-e1581881277914.jpg'
		},
		CTAHeadingText: {
			type: 'string',
			default: 'K2 Call To Action'
		},
		CTAParagraphText: {
			type: 'string',
			default: 'K2 blocks are added to the Gutenberg editor as soon as you install the plugin. You can start using it as any other Gutenberg block.'
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
			default: 0.3
		},
		CTAOverlayEnableDisable: {
			type: 'boolean',
			default: true
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

		const colors = [
			{ name: 'red', color: '#f00' },
			{ name: 'white', color: '#fff' },
			{ name: 'blue', color: '#00f' },
		];

		const ClassicParentContainer = {
			flexDirection: attributes.CTAClassicPosition,
			minHeight: attributes.CTAClassicBoxHeight + 'vh'
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
			minHeight: attributes.CTACoverContainerHeight + 'vh'
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
		}

		function onChangeCTAClassicPosition(NewPosition) {
			setAttributes({
				CTAClassicPosition: NewPosition,
				CTAClassicImageContainerWidth: 50
			})
			console.log(NewPosition)
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
		return ( [
			<InspectorControls>
				<PanelBody title={'Layout Select'}>
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
										<div className={'InspectorControlClassicPosition'}>
											<p> Position </p>
											<div className={'InspectorControlClassicPositionEachElement'}  onClick={() => onChangeCTAClassicPosition('row')}>
												<i className="fas fa-align-left" ></i>
											</div>
											<div className={'InspectorControlClassicPositionEachElement'} onClick={() => onChangeCTAClassicPosition('row-reverse')}>
												<i className="fas fa-align-right"></i>
											</div>
										</div>


								:
								null
						}


				</PanelBody>

				<PanelBody title={'Box'}>
					{
						(attributes.LayoutDesign == 'Classic')?
							<div>
								<RangeControl
									label={<strong> Box Height </strong>}
									value={ attributes.CTAClassicBoxHeight }
									onChange={ onChnageCTAClassicBoxHeight }
									min={ 10 }
									max={ 100 }
									step ={1}
								/>
								<RangeControl
									label={<strong> Image Height </strong>}
									value={ attributes.CTACoverContainerHeight }
									onChange={ onChangeCTACoverContainerHeight }
									min={ 10 }
									max={ 100 }
									step ={1}
								/>
							</div>

							:
							<RangeControl
								label={<strong> Box Height </strong>}
								value={ attributes.CTACoverContainerHeight }
								onChange={ onChangeCTACoverContainerHeight }
								min={ 10 }
								max={ 100 }
								step ={1}
							/>

					}
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

					<label > Fill Color </label>
					<ColorPicker
						color={ colors }
						value = {attributes.CTAOverlayColor}
						onChangeComplete={ onChangeCTAOverlayColor }
					/>
				</PanelBody>
				<PanelBody title={'Button'}>
					<TextControl
						label="Button Text"
						value={ attributes.CTAButtonText }
						onChange={ onChangeCTAButtonText}
					/>

				</PanelBody>

			</InspectorControls>,
			<div>
				{
					(attributes.LayoutDesign == 'Classic')?
						<div  className={'BoxedContainer'}>

							<div style={ClassicParentContainer} className={'ClassicParentContainer'}>
								<div className={'ClassicTextContainer'}>

									<RichText
										tagName="h1" // The tag here is the element output and editable in the admin
										value={ attributes.CTAHeadingText } // Any existing content, either from the database or an attribute default
										className = {'ClassicHeadingStyle'}
										formattingControls={ [ 'bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
										onChange={ onChangeCTAHeading } // Store updated content as a block attribute
										placeholder={ __( 'K2 Call To Action' ) } // Display this text before any content has been added by the user
									/>
									<RichText
										tagName="h1" // The tag here is the element output and editable in the admin
										value={ attributes.CTAParagraphText } // Any existing content, either from the database or an attribute default
										className = {'ClassicParagraphHeading'}
										formattingControls={ [ 'bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
										onChange={ onChangeCTAParagraph } // Store updated content as a block attribute
										placeholder={ __( 'Having years of experience running summer courses, we have observed young students beginning the programme with much trepidation and anxiety, but leaving Oxford having had one of the most enriching and memorable experiences of their lives.' ) } // Display this text before any content has been added by the user
									/>

									<button className={'ClassicButtonStyling'}>
										{attributes.CTAButtonText}
									</button>
								</div>
								<div style={ClassicImageContainerStyling} className={'ClassicImageContainer'}>

								</div>
							</div>
						</div>

						: <div  className={'BoxedContainer'}>

							<div style={CoverParentStyling} className={'CoverParentContainer'}>

								<div className={'CoverTextContainer'}>

									<RichText
										tagName="h1" // The tag here is the element output and editable in the admin
										value={ attributes.CTAHeadingText } // Any existing content, either from the database or an attribute default
										className = {'CoverHeadingStyle'}
										formattingControls={ [ 'bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
										onChange={ onChangeCTAHeading } // Store updated content as a block attribute
										placeholder={ __( 'K2 Call To Action' ) } // Display this text before any content has been added by the user
									/>
									<RichText
										tagName="p" // The tag here is the element output and editable in the admin
										value={ attributes.CTAParagraphText } // Any existing content, either from the database or an attribute default
										className = {'CoverParagraphHeading'}
										formattingControls={ [ 'bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
										onChange={ onChangeCTAParagraph } // Store updated content as a block attribute
										placeholder={ __( 'Having years of experience running summer courses, we have observed young students beginning the programme with much trepidation and anxiety, but leaving Oxford having had one of the most enriching and memorable experiences of their lives.' ) } // Display this text before any content has been added by the user
									/>


									<button className={'CoverButtonStyling'}>
										{attributes.CTAButtonText}
									</button>
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

		const ClassicParentContainer = {
			flexDirection: attributes.CTAClassicPosition
		}

		const ClassicImageContainerStyling = {
			flexBasis: attributes.CTAClassicImageContainerWidth + '%',
			boxShadow: 'inset 0 0 0 100vh rgba(' + attributes.CTAOverlayColorRed + ',' + attributes.CTAOverlayColorGreen + ',' + attributes.CTAOverlayColorBlue + ',' + attributes.CTAOverlayColorAlpha + ')',
			backgroundImage: 'url("' +attributes.CTA_Image + '")'

		}

		const CoverParentStyling = {
			boxShadow: 'inset 0 0 0 100vh rgba(' + attributes.CTAOverlayColorRed + ',' + attributes.CTAOverlayColorGreen + ',' + attributes.CTAOverlayColorBlue + ',' + attributes.CTAOverlayColorAlpha + ')',
			backgroundImage: 'url("' +attributes.CTA_Image + '")',
			minHeight: attributes.CTACoverContainerHeight + 'vh'
		}




		return 	<div>
			{
				(attributes.LayoutDesign == 'Classic')?
					<div className={'BoxedContainer'}>
						<div style={ClassicParentContainer} className={'ClassicParentContainer'}>
							<div className={'ClassicTextContainer'}>
								<RichText.Content
									tagName="h1" // The tag here is the element output and editable in the admin
									value={ attributes.CTAHeadingText } // Any existing content, either from the database or an attribute default
									className = {'ClassicHeadingStyle'}
								/>
								<RichText.Content
									tagName="p" // The tag here is the element output and editable in the admin
									value={ attributes.CTAParagraphText } // Any existing content, either from the database or an attribute default
									className = {'ClassicParagraphHeading'}
								/>

								<button className={'ClassicButtonStyling'}>
									{attributes.CTAButtonText}
								</button>
							</div>
							<div style={ClassicImageContainerStyling}  className={'ClassicImageContainer'}>

							</div>

						</div>
					</div>

					: <div className={'BoxedContainer'}>

						<div style={CoverParentStyling} className={'CoverParentContainer'}>

							<div className={'CoverTextContainer'}>
								<RichText.Content
									tagName="h1" // The tag here is the element output and editable in the admin
									value={ attributes.CTAHeadingText } // Any existing content, either from the database or an attribute default
									className = {'CoverHeadingStyle'}
								/>
								<RichText.Content
									tagName="p" // The tag here is the element output and editable in the admin
									value={ attributes.CTAParagraphText } // Any existing content, either from the database or an attribute default
									className = {'CoverParagraphHeading'}
								/>

								<button className={'CoverButtonStyling'}>
									{attributes.CTAButtonText}
								</button>
							</div>
						</div>
					</div>
			}
		</div>
	},


} );
