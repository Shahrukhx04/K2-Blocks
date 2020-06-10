
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
registerBlockType( 'k2/hero-banner', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Hero Banner' ), // Block title.
	icon: 'smiley' ,
	category: 'k2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Hero Banner	' ),
		__( 'Magik Blocks' ),
	],
	attributes: {
		AnimatedBannerHeadingText: {
			type: 'string',
			default: 'Animated Banner'
		},
		AnimatedBannerParagraphText: {
			type: 'string',
			default: 'Hover on this banner for animation'
		}
	},

	edit( { attributes, setAttributes } ) {


		function onChangeAnimatedBannerHeading(NewText) {
			setAttributes({
				AnimatedBannerHeadingText: NewText
			})
		}

		function onChangeAnimatedBannerParagraphText(NewText) {
			setAttributes({
				AnimatedBannerParagraphText: NewText
			})
		}

		return <div className={'k2-AB-boxed-container'}>
			<div className={'K2-AB-cover-parent-container-wrapper'}>
				<div className={'k2-AB-cover-parent-container'}>
					<div className={'k2-AB-cover-text-container'}>
						<RichText
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.AnimatedBannerHeadingText } // Any existing content, either from the database or an attribute default
							className={ 'k2-AB-cover-heading-style' }
							formattingControls={ ['bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ onChangeAnimatedBannerHeading } // Store updated content as a block attribute
							placeholder={ __( 'Animated Banner' ) } // Display this text before any content has been added by the user
						/>

						<RichText
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.AnimatedBannerParagraphText } // Any existing content, either from the database or an attribute default
							className = {'k2-AB-cover-paragraph-heading'}
							formattingControls={ [ 'bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ onChangeAnimatedBannerParagraphText } // Store updated content as a block attribute
							placeholder={ __( 'Hover on this banner for animation' ) } // Display this text before any content has been added by the user
						/>
					</div>
				</div>
			</div>

		</div>


	},

	save( { attributes } ) {
		return <h1>
			Here's the Banner showing on frontend
		</h1>
	}
});

