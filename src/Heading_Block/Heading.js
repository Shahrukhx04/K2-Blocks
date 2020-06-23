import './style.scss';
import './editor.scss';
import {GLOBAL_FONTS} from '../Global_Fonts';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	InspectorControls,
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	DateTimePicker,
	ColorPicker,
	CheckboxControl,
	TextControl,
	RangeControl,
	PanelRow

} = wp.components;

const headingBlockIcon = (
	<svg></svg>
);
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

registerBlockType( 'k2/heading-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Heading',
	icon: {
		src: headingBlockIcon,
	},
	category: 'k2-blocks',
	attributes: {

	},

	edit: function(props) {

			return ([
				<InspectorControls>
					<PanelBody title={''}>
							
					</PanelBody>

					
				</InspectorControls>
				,
				<div className={'k2-hb-parent-container'}>

				</div>
			])
		}
	,
	save: function(props) {

		return (
			<div className={'k2-hb-parent-container'}>

			</div>
	  );
	},
})
