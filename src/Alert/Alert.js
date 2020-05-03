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
} = wp.editor;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	Panel,
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
			default: 'Hello Max! This is a warning for you Hello Max! '
		},
		AlertBoxColor: {
			type: 'string',
			default: '#85fb85'
		},
		AlertBoxBorderColor: {
			type: 'string',
			default: 'green'
		},
		AlertBoxTextColor: {
			type: 'string',
			default: 'green'
		},
		AlertBoxIconSize: {
			type: 'number',
			default: 1
		},
		AlertBoxTextSize: {
			type: 'number',
			default: 1
		},
		AlertBoxIconColor: {
			type: 'string',
			default: 'green'
		},
		AlertBoxIconType:{
			type: 'string',
			default: 'fa fa-rocket'
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

		const IconList = [
			{label: 'Rocket' , value: 'fa fa-rocket'},
			{label: 'Warning' ,value: 'fa fa-warning'},
			{label: 'aeroplane' ,value: 'fa fa-search'},
			{label: 'aeroplane' ,value: 'fa fa-envelope-o'}
		]

		const ParentContainerStyling = {
			backgroundColor: attributes.AlertBoxColor,
			borderColor: attributes.AlertBoxBorderColor,
		}

		const AlertIconStyling = {
			fontSize: attributes.AlertBoxIconSize + 'em',
			color: attributes.AlertBoxIconColor
		}

		const AlertTextStyling = {
			fontSize: attributes.AlertBoxTextSize + 'em',
			color: attributes.AlertBoxTextColor
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

		function onChangeIcon(NewIcon) {
			setAttributes({
				AlertBoxIconType: NewIcon.target.className
			})
		}
		return (
				[

					<InspectorControls>


						<PanelBody>

							<RangeControl
								label={<strong>Icon Size</strong>}
								value={ attributes.AlertBoxIconSize }
								onChange={ onChangeIconSize }
								min={ 0.2 }
								max={ 15 }
								step ={0.1}
							/>

							<RangeControl
								label={<strong>Text Size</strong>}
								value={ attributes.AlertBoxTextSize }
								onChange={ onChangeTextSize }
								min={ 0.2 }
								max={ 5 }
								step ={0.1}
							/>

						</PanelBody>


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
							<p><strong>Icon Color</strong></p>
							<ColorPalette
								value={attributes.AlertBoxIconColor}
								onChange={onChangeIconColor}
								colors = {ToolBarColors}
							/>





						</PanelBody>

					</InspectorControls>,

							<div>

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
		}

		const AlertIconStyling = {
			fontSize: attributes.AlertBoxIconSize + 'em',
			color: attributes.AlertBoxIconColor
		}

		const AlertTextStyling = {
			fontSize: attributes.AlertBoxTextSize + 'em',
			color: attributes.AlertBoxTextColor
		}

		return  <div>
			<div style={ParentContainerStyling} className={'container'}>
				<div className={"box"}>
					<i style={AlertIconStyling} className={'fa fa-rocket  '}></i>
				</div>

				<RichText.Content
					tagName="div" // The tag here is the element output and editable in the admin
					value={ attributes.AlertBoxText } // Any existing content, either from the database or an attribute default
					className = {'box'}
					style = {AlertTextStyling}
				/>
			</div>
		</div>

	},


} );
