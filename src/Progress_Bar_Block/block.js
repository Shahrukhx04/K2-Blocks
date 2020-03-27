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
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

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
		content: {type: 'string'},
		color: {type: 'string'},
		PercentageOfProgressBar: {type: 'string'},
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
	edit: ( props ) => {
		// Creates a <p class='wp-Progress_Bar_Block-cgb-Progress_Bar_Block-progressbar'></p>.

			{props.attributes.content= "Loading"}
			{props.attributes.PercentageOfProgressBar="100%"}




			function IncreaseProgressBar(){
				for (const i of [1,2,3,4]) {
					document.getElementById('Bar').style.cssText = "width:" + i*25+"%"
					//
					// props.attributes.PercentageOfProgressBar=i*25 + "%"
				}
			}


			return <div className="progress-bar">

				<div id = "Bar" className="IncreaseBar" style={{width:props.attributes.PercentageOfProgressBar} }>
					Loading
				</div>
			</div>


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
	save: ( props ) => {


		return <div className="progress-bar">

			<div className="IncreaseBar" style={{width:props.attributes.PercentageOfProgressBar}}>
				Loading
			</div>
		</div>
	},


} );
