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
	ColorPicker,
	ToggleControl,
	SelectControl

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
			default: 'red'
		},
		progressBarPercentage:{
			type: 'number',
			default: 40
		},
		ShowPercentage: {
			type: 'boolean',
			default: true
		},
		TextFontSize: {
			type: 'number',
			default: 1
		},
		ProgressBarBackGroundColor: {
			type: 'string',
			default: 'lightgray'
		},
		AnimateProgressBar: {
			type: 'boolean',
			default: true
		},
		AnimationState: {
			type: 'string',
			default: 'running'
		},
		TextFontFamily: {
			type: 'string',
			default: 'Lucida Console'
		},
		TextFontWeight: {
			type: 'string',
			default: 'normal'
		},
		ProgressBarBorderRadius: {
			type: 'number',
			default: 30
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
			{ color: 'red' },
			{ color: 'green' },
			{ color: 'blue' },
			{ color: 'orange' },
			{ color: 'yellow' }
		];

		const FontsAvalaible = [
			{ label: 'Lucida Console'},
			{ label: 'Courier'},
			{ label: 'monospace'},
			{ label: 'Arial'}
		]

		const FontWeightAvaibles= [
			{ label: 'normal'},
			{ label: '100'},
			{ label: '200'},
			{ label: '300'},
			{ label: '400'},
			{ label: '500'},
			{ label: '600'},
		]

		const ProgressBarOutsideContainerStyling = {
			backgroundColor: attributes.ProgressBarBackGroundColor,
			height: attributes.progressBarHeight + "em",
			borderRadius: attributes.ProgressBarBorderRadius + 'px'
		}

		const ProgressBarInsideAnimationStyling = {
			width: attributes.progressBarPercentage + "%",
			height: attributes.progressBarHeight + "em",
			backgroundColor: attributes.progressBarColor,
			borderRadius: attributes.ProgressBarBorderRadius + 'px'

		}

		const ProgressBarInsideAnimationSpanStyling = {
			animationPlayState: attributes.AnimationState
		}

		const BarOutlineStyling = {
			borderColor: attributes.progressBorderColor,
			height: attributes.progressBarHeight + 'em'
		}

		const TextStyling = {
			fontSize: attributes.TextFontSize + 'em',
			color: attributes.titleColor,
			align: 'left',
			fontFamily: attributes.TextFontFamily,
			fontWeight: attributes.TextFontWeight
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

		function onGradient1ColorChange(Newcolor) {
			setAttributes({
				ProgressBarGradientColor1: Newcolor
			})
		}

		function onGradient2ColorChange(NewColor) {
			setAttributes({
				ProgressBargradientColor2: NewColor
			})
		}

		function onShowPercentageToggleChange(NewValue) {
			setAttributes({
				ShowPercentage: NewValue
			})
		}

		function onTextFontSizeChange(NewFont) {
			setAttributes({
				TextFontSize: NewFont
			})
		}

		function onAnimateProgressBar(Animate) {
			setAttributes({
				AnimateProgressBar: Animate,
			})

			if (attributes.AnimationState == 'paused'){
				setAttributes({
					AnimationState: 'running'
				})
			} else {
				setAttributes({
					AnimationState: 'paused'
				})
			}

		}

		function onChangeProgressBarBackgound(NewColor) {
			setAttributes({
				ProgressBarBackGroundColor: NewColor
			})
		}

		function onTextFontChange(NewFont) {
			setAttributes({
				TextFontFamily:  NewFont
			})
		}

		function onFontWeightChange(NewWeight) {
			setAttributes({
				TextFontWeight: NewWeight
			})
		}

		function onChangeProgressBarBorderRadius(NewBorders) {
			setAttributes({
				ProgressBarBorderRadius: NewBorders
			})
		}
		return ([

				<InspectorControls>
					<PanelBody>

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


					<PanelBody title={"Colors"}>

						<p><strong>Title Color</strong></p>
						<ColorPalette
							value = { titleColor }
							onChange={onTitleColorChange}
							colors = {ToolBarColors}
						/>
						<p><strong>Progress Bar Color</strong></p>
						<ColorPalette
							value = {attributes.progressBarColor}
							onChange = {onBarColorChange}
							colors = {ToolBarColors} />


					</PanelBody>

					<PanelBody title={'Text'}>
						<TextControl
							label={<strong>Title</strong>}
							onChange={onTitleChange}
							value = {attributes.title}
						/>

						<PanelRow>

							<p>
								Show Percentage
							</p>
							<ToggleControl
								checked = {attributes.ShowPercentage}
								onChange = {onShowPercentageToggleChange}
							/>

						</PanelRow>

						<RangeControl
							label={<p> <strong> Font Size </strong> </p>}
							value={ attributes.TextFontSize }
							onChange={ onTextFontSizeChange }
							min={ 1 }
							max={ 10 }
							step ={0.1}
						/>

						<PanelRow>
							<SelectControl
								label="Font Family"
								value={ attributes.TextFontFamily }
								options={ FontsAvalaible }
								onChange={ onTextFontChange}
							/>

						</PanelRow>

						<PanelRow>
							<SelectControl
								label="Weight"
								value={ attributes.TextFontWeight }
								options={ FontWeightAvaibles }
								onChange={ onFontWeightChange}
							/>

						</PanelRow>


					</PanelBody>

					<PanelBody title={'Bar'}>

						<PanelRow>
							<p>
								Animation
							</p>
							<ToggleControl
								checked = {attributes.AnimateProgressBar}
								onChange = {onAnimateProgressBar}
							/>

						</PanelRow>

						<RangeControl
							label={<p> <strong> Border Raduis </strong> </p>}
							value={ attributes.ProgressBarBorderRadius }
							onChange={ onChangeProgressBarBorderRadius }
							min={ 1 }
							max={ 50 }
							step ={1}
						/>

					</PanelBody>

					<PanelBody title={'Background'}>

						<PanelRow>
							<p><strong>Title Color</strong></p>
							<ColorPalette
								value = { attributes.ProgressBarBackGroundColor }
								onChange={onChangeProgressBarBackgound}
								colors = {ToolBarColors}
							/>

						</PanelRow>

					</PanelBody>



				</InspectorControls>,

				<div>
					<p style={ TextStyling}>
						{attributes.title}
						{
							(attributes.ShowPercentage == false) ?
								''
								: <span style={{float: 'right'}}> {attributes.progressBarPercentage} % </span>
						}

					</p>

					<div style={ProgressBarOutsideContainerStyling} className="ProgressBarOutsideContainer">
						<div className="ProgressBarInsideAnimation" style={ProgressBarInsideAnimationStyling}>
							<span style={ProgressBarInsideAnimationSpanStyling}></span>
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


		const ProgressBarOutsideContainerStyling = {
			backgroundColor: attributes.ProgressBarBackGroundColor,
			height: attributes.progressBarHeight + "em",
		}

		const ProgressBarInsideAnimationStyling = {
			width: attributes.progressBarPercentage + "%",
			height: attributes.progressBarHeight + "em",
			backgroundColor: attributes.progressBarColor,

		}

		const ProgressBarInsideAnimationSpanStyling = {
			animationPlayState: attributes.AnimationState
		}

		const BarOutlineStyling = {
			borderColor: attributes.progressBorderColor,
			height: attributes.progressBarHeight + 'em'
		}

		const TextStyling = {
			fontSize: attributes.TextFontSize + 'em',
			color: attributes.titleColor,
			align: 'left',
			fontFamily: attributes.TextFontFamily,
			fontWeight: attributes.TextFontWeight
		}
		return <div>
			<p style={ TextStyling}>
				{attributes.title}
				{
					(attributes.ShowPercentage == false) ?
						''
						: <span style={{float: 'right'}}> {attributes.progressBarPercentage} % </span>
				}

			</p>

			<div style={ProgressBarOutsideContainerStyling} className="ProgressBarOutsideContainer">
				<div className="ProgressBarInsideAnimation" style={ProgressBarInsideAnimationStyling}>
					<span style={ProgressBarInsideAnimationSpanStyling}></span>
				</div>
			</div>
		</div>



	},


} );
