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
	ColorPalette
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	TextControl,
	RangeControl,
	ColorPicker

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
registerBlockType( 'cgb/progressbar-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Progress Bar' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'magik-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'progressbar — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-Progress_Bar_Block' ),
	],
	attributes: {

		progressBarColor: {
			type: 'string',
			default: 'yellow'
		},
		progressBorderColor: {
			type: 'string',
			default: 'red'
		},
		progressBarHeight: {
			type: 'number',
			default: 1.5
		},
		title: {
			type: 'string',
			default: 'Progressing'
		},
		titleColor: {
			type: 'string',
			default: 'Green'
		},
		progressBarPercentage:{
			type: 'number',
			default: 20
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

		const {titleColor,title,borderColor,progressBarColor} = attributes

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
		const AnimatedBarStyling = {
			backgroundColor: progressBarColor,
			animation: 'AnimateProgressBar 5s ease-in-out'
		}


		const BarOutlineStyling = {
			borderColor: attributes.progressBorderColor,
			height: attributes.progressBarHeight + 'em'
		}

		function onTitleColorChange(NewColor) {

			setAttributes(
				{
					titleColor: NewColor
				}
			)
		}

		function onTitleChange(NewText) {
			setAttributes({
				title: NewText
			})
		}

		function onBorderColorChange(NewColor) {
			setAttributes({
				progressBorderColor: NewColor
			})
		}

		function onBarColorChange(NewColor) {

			setAttributes({
				progressBarColor: NewColor
			})
		}

		function onBarHeightChange(NewHeight) {
			setAttributes({
				progressBarHeight: NewHeight
			})
		}

		function OnBarPercentageChange(NewPercentage) {
			setAttributes({
				progressBarPercentage: NewPercentage
			})
		}

		return ([

				<InspectorControls>
					<PanelBody title={"Colors"}>

						<p><strong>Title Color</strong></p>
							<ColorPalette
								value = { titleColor }
								onChange={onTitleColorChange}
								colors = {ToolBarColors}
							/>
							<p><strong>Progress Bar Color</strong></p>
							<ColorPalette
								value = {progressBarColor}
								onChange = {onBarColorChange}
								colors = {ToolBarColors} />

							<p><strong>Border Color</strong></p>
							<ColorPalette
								value={attributes.progressBorderColor}
								onChange={onBorderColorChange}
								colors = {ToolBarColors} />

					</PanelBody>

					<PanelBody title={'Text'}>
							<TextControl
								label={<strong>Title</strong>}
								onChange={onTitleChange}
								value = {attributes.title}
							/>



					</PanelBody>

					<PanelBody title={'Other'}>

							<RangeControl
								label={<strong> Progress Bar Height </strong>}
								value={ attributes.progressBarHeight }
								onChange={ onBarHeightChange }
								min={ 1 }
								max={ 6 }
								step ={0.1}
							/>


							<RangeControl
								label={<strong>Progress</strong>}
								value={ attributes.progressBarPercentage }
								onChange={ OnBarPercentageChange }
								min={ 0 }
								max={ 100 }
							/>
					</PanelBody>

				</InspectorControls>,


				<p style={{color: titleColor, align: 'right'}}>
					{attributes.title}  {attributes.progressBarPercentage}%
				</p>,
				<div className="meter" style={BarOutlineStyling}>
					<span style={ { width: attributes.progressBarPercentage + "%"} }><span className="progress" style={AnimatedBarStyling}></span></span>
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

		const AnimatedBarStyling = {
			backgroundColor: attributes.progressBarColor,
			animation: 'AnimateProgressBar 5s ease-in-out'
		}


		const BarOutlineStyling = {
			borderColor: attributes.progressBorderColor,
			height: attributes.progressBarHeight + 'em'
		}


		return <div>
			<p style={{color: 'Green'}}>
				{attributes.title} {attributes.progressBarPercentage}%
			</p>
			<div className="meter" style={BarOutlineStyling}>
				<span style={ { width: attributes.progressBarPercentage + '%'} }><span className="progress" style={AnimatedBarStyling}></span></span>
			</div>
		</div>


	},


} );
