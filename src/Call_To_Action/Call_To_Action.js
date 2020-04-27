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
registerBlockType( 'cgb/call-to-action-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Call To Action' ), // Block title.
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'magik-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Call_To_Action  — CGB Block' ),
		__( 'CGB Example' ),
		__( 'Call_To_Action ' ),
	],
	attributes: {

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


		return <div>Call To Action</div>
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

		return <div>Call To Action</div>

	},


} );
