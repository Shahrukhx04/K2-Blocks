import './style.scss';
import './editor.scss';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
//stuff
const {
	RichText,
	InspectorControls,
	ColorPalette
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker

} = wp.components;


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

registerBlockType( 'cgb/counter-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Counter',
	icon: 'arrow-up-alt2',
	category: 'magik-blocks',
	attributes: {
		backgroundColor: {
			type: 'string',
			default: '#ddd'
		},
		fontColor: {
			type: 'string',
			default: 'black'
		},
		counterShape: {
			type: 'string',
			default: ''
		}
	},

	edit: function(props) {

			function onShapeChange(value){
				props.setAttributes({
					counterShape:value
				})
			}

			function onBackgroundColorChange(value){
				props.setAttributes({
					backgroundColor: value
				})
			}

			function onFontColorChange(value){
				props.setAttributes({
					fontColor: value
				})
			}
			
			var styling = {
				color: props.attributes.fontColor,
				backgroundColor: props.attributes.backgroundColor
			}

			var backgroundDefaultColors = [
				{ color: 'gray' },
				{ color: '#ddd' },
				{color: 'white'},
				{color: 'black'}
			];
			var fontDefaultColors = [
				{ color: 'white' },
				{ color: 'black' },
				{color: 'darkred'},
				{color: 'whitesmoke'}
			];

			return ([
				<InspectorControls>
					<PanelBody title={"Content"}>
						
					
					</PanelBody>
					<PanelBody title={"Styling and color"}>
						<SelectControl
									label="Shape"
									value={props.attributes.timerShape}
									options={[
										{ label: 'Square', value: '' },
										{ label: 'Round', value: 'tw-round' },
									]}
									onChange={onShapeChange}
						/>
						<label class="components-base-control__label">Background color</label>
						<ColorPalette
							value = { props.attributes.backgroundColor }
							onChange={onBackgroundColorChange}
							colors = {backgroundDefaultColors}
						/>
						<label class="components-base-control__label">Text color</label>
						<ColorPalette
							value = { props.attributes.fontColor }
							onChange={onFontColorChange}
							colors = {fontDefaultColors}
						/>
					</PanelBody>
				</InspectorControls>
				,
				<div className="cw-holder">
					<div className="counter-widget">
						<p> 0 </p>
						<p> clients </p>
					</div>
				</div>
			])
		}
	,
	save: function(props) {
	var styling = {
		color: props.attributes.fontColor,
		backgroundColor: props.attributes.backgroundColor
	}
	return (
		<div className="cw-holder">
			<div className="counter-widget">

			</div>
		</div>
	  );
	},
})
