/**
 * BLOCK: progressbar
 *
 * Registering a basic Progress_Bar_Block with Gutenberg.
 * Simple Progress_Bar_Block, renders and saves the same content without any interactivity.
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
	ColorPalette,
	AlignmentToolbar,
	BlockControls
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	TextControl,
	RangeControl,
	ColorPicker,


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
registerBlockType( 'cgb/alert-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Alert Block' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'magik-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Alert blocks' ),
		__( 'Magik Blocks' ),
	],
	attributes: {
		Content: {
			type: 'string',
			default: 'Shahrukh is working really hard :) on Magik blocks and they will for sure become the most popular blocks for gutenberg'
		},
		AlertBoxColor: {
			type: 'string',
			default: 'white'
		},
		AlertBoxBorderColor: {
			type: 'string',
			default: 'red'
		},
		AlertBoxTextColor: {
			type: 'string',
			default: 'Green'
		},
		AlertBoxTextallignment:{
			type: 'string',
			default: 'none'
		},
		AlertBoxheight: {
			type: 'number',
			default: 1
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

		const {Content} = attributes

		const ToolBarColors = [
			{
				color: 'red'
			},
			{
				color: 'green'
			},
			{
				color: 'blue'
			},
			{
				color: 'orange'
			},
			{
				color: 'yellow'
			}
		];

		const AlertBoxStyling = {
			backgroundColor: attributes.AlertBoxColor,
			borderColor: attributes.AlertBoxBorderColor,
			color: attributes.AlertBoxTextColor,
			textAlign: attributes.AlertBoxTextallignment,
			padding: attributes.AlertBoxheight + 'em'
		}

		function onAlertBoxTextChange(NewText){
			setAttributes({
				Content: NewText
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

		function onChangeAlertBoxTextAllignment(NewAllignment) {
			setAttributes({
				AlertBoxTextallignment: NewAllignment
			})
		}

		function onChangeAlertBoxHeight(NewHeight) {
			setAttributes({
				AlertBoxheight: NewHeight
			})
		}
		return (
				[

					<InspectorControls>

						<BlockControls>
							<AlignmentToolbar
								value={attributes.AlertBoxTextallignment}
								onChange={onChangeAlertBoxTextAllignment}
								/>
						</BlockControls>

						<PanelBody title={'Colors'}>
							<p><strong>Box Color</strong></p>
							<ColorPalette
								value = {attributes.AlertBoxColor}
								onChange = {onChangeAlertBoxColor}
								colors = {ToolBarColors}
								/>
							<p><strong>Border Color</strong></p>
							<ColorPalette
								value={attributes.AlertBoxBorderColor}
								onChange={onChangeAlertBoxBorderColor}
								colors = {ToolBarColors}
								/>
							<p><strong>Text Color</strong></p>
							<ColorPalette
								value={attributes.AlertBoxTextColor}
								onChange={OnChangeAlertBoxTextColor}
								colors = {ToolBarColors}
								/>
						</PanelBody>

						<PanelBody title={'Others'}>
							<RangeControl
								label={<strong>Height</strong>}
								value={ attributes.AlertBoxheight }
								onChange={ onChangeAlertBoxHeight }
								min={ 0.2 }
								max={ 5 }
								step ={0.1}
							/>
						</PanelBody>
					</InspectorControls>,


						<RichText
							tagName="p" // The tag here is the element output and editable in the admin
							value={ attributes.Content } // Any existing content, either from the database or an attribute default
							className = {'alert'}
							style = {AlertBoxStyling}
							formattingControls={ [ 'bold', 'italic', 'link'] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ onAlertBoxTextChange } // Store updated content as a block attribute
							placeholder={ __( 'Type Your Text Here' ) } // Display this text before any content has been added by the user
						/>
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
		const AlertBoxStyling = {
			backgroundColor: attributes.AlertBoxColor,
			borderColor: attributes.AlertBoxBorderColor,
			color: attributes.AlertBoxTextColor,
			textAlign: attributes.AlertBoxTextallignment,
			padding: attributes.AlertBoxheight + 'em'
		}

		return  <RichText.Content
			tagName="p" // The tag here is the element output and editable in the admin
			value={ attributes.Content } // Any existing content, either from the database or an attribute default
			className = {'alert'}
			style = {AlertBoxStyling}
		/>

	},


} );
