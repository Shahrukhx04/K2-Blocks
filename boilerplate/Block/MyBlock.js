import './style.scss';
import './editor.scss';

/*Uncomment to import fonts or icons */
//import {GLOBAL_FONTS} from '../Global_Fonts';
//import {GLOBAL_ICONS} from '../Global_Icons';

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

//icon for block as jsx compatible svg
//convert svg to jsx using https://react-svgr.com/playground/
const myBlockIcon = (
		<svg width={800} height={800} viewBox="0 0 800 800" >
		</svg>
);
/**
 * Register a Gutenberg Block.
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

registerBlockType( 'k2/my-block' /**TODO: Be sure to change this!!! */, { 
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'MyBlock', //TODO: visible name of block
	icon: {
		src: myBlockIcon,
	},
	category: 'k2-blocks',
	attributes: {
		/**Define attributes here */

	},

	edit: function(props) {
			
		/**Functions */
		/*********************************************************** */

		//your functions here

		/**Styles and other variables */
		/********************************************************** */

		//your variables here

		return ([
			<InspectorControls>

			</InspectorControls>
			,
			<div className={'k2-mb-parent-container'}>{/**Note: name classes as k2-<your block initials>-<your class name> */}

			</div>
		])
	}
	,
	save: function(props) {
		/**Functions */
		/*********************************************************** */

		//your functions here

		/**Styles and other variables */
		/********************************************************** */

		//your variables here	

		return (
			<div className={'k2-mb-parent-container'}>

			</div>
	  );
	},
})
