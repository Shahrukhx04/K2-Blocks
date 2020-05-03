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
			default: null
		},
		CTAHeadingText: {
			type: 'string',
			default: ''
		},
		CTAParagraphText: {
			type: 'string',
			default: ''
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

		const CoverParentAndClassicImageStyling = {
			boxShadow: 'inset 0 0 0 100vh rgba(' + attributes.CTAOverlayColorRed + ',' + attributes.CTAOverlayColorGreen + ',' + attributes.CTAOverlayColorBlue + ',' + attributes.CTAOverlayColorAlpha + ')',
			backgroundImage: 'url("' +attributes.CTA_Image + '")'
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

		return ( [ <InspectorControls>
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
			<div className={'CoverParentContainerSpan'}>
				{
					(attributes.LayoutDesign == 'Classic')? <div className={'ClassicParentContainer'}>
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
							<div style={CoverParentAndClassicImageStyling} className={'ClassicImageContainer'}>

							</div>
						</div>

						: <div>

							<div style={CoverParentAndClassicImageStyling} className={'CoverParentContainer'}>

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
		const CoverParentAndClassicImageStyling = {
			boxShadow: 'inset 0 0 0 100vh rgba(' + attributes.CTAOverlayColorRed + ',' + attributes.CTAOverlayColorGreen + ',' + attributes.CTAOverlayColorBlue + ',' + attributes.CTAOverlayColorAlpha + ')',
			backgroundImage: 'url("' +attributes.CTA_Image + '")'
		}




		return 	<div className={'CoverParentContainerSpan'}>
			{
				(attributes.LayoutDesign == 'Classic')? <div className={'ClassicParentContainer'}>
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
						<div style={CoverParentAndClassicImageStyling}  className={'ClassicImageContainer'}>

						</div>

					</div>

					: <div>

						<div style={CoverParentAndClassicImageStyling} className={'CoverParentContainer'}>

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
