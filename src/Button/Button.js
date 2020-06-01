

//  Import CSS.
import './editor.scss';
import './style.scss';
import { GLOBAL_FONTS } from '../Global_Fonts';
import { GLOBAL_ICONS} from '../Global_Icons'



const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType,
	AlignmentToolbar
	// For attribute sources
} = wp.blocks;
const {
	RichText,
	InspectorControls,
	ColorPalette,
	PanelColorSettings
} = wp.editor;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	Panel,
	PanelRow,
	ColorPicker,
	TextControl
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
registerBlockType( 'k2/classic-button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Classic Button' ), // Block title.
	icon: 'smiley' ,
	category: 'k2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Classic Button' ),
		__( 'Magik Blocks' ),
	],
	attributes: {},

	edit( { attributes, setAttributes } ) {
		<h1>Here's new Button Block</h1>
	},

	save( { attributes } ) {
		<h1>
			Here's the button showing on frontend
		</h1>
	}
});

