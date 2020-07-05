

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
	attributes: {
		AnimatedButtonWidth: {
			type: 'number',
			default: 20
		},
		AnimatedButtonBorderRadius: {
			type: 'number',
			default: 10
		},
		AnimatedButtonBorder: {
			type: 'number',
			default: 10
		},
		AnimatedButtonText: {
			type: 'string',
			default: 'Animated Button'
		},
		AnimatedLetterSpacing: {
			type: 'number',
			default: 0
		}
	},




	edit( { attributes, setAttributes } ) {

		const AnimatedButtonStyling = {
			width: attributes.AnimatedButtonWidth + 'rem',
			borderRadius: attributes.AnimatedButtonBorderRadius + 'rem',
			border: attributes.AnimatedButtonBorder + 'rem',
			letterSpacing: attributes.AnimatedLetterSpacing + 'rem'

		}

		function onChangeAnimatedButtonWidth(NewWidth) {
			setAttributes({
				AnimatedButtonWidth: NewWidth
			})
		}
		function onChangeAnimatedButtonBorderRadius(NewBorderRadius) {
			setAttributes({
				AnimatedButtonBorderRadius: NewBorderRadius
			})
		}
		function onChangeAnimatedButtonBorder(NewBorder) {
			setAttributes({
				AnimatedButtonBorder: NewBorder
			})
		}




		function onChangeButtonAnimatedText(NewText) {
			setAttributes({
				AnimatedButtonText: NewText
			})
		}

		function onChangeButtonLetterSpacing(NewLetterSpacing) {
			setAttributes({
				AnimatedLetterSpacing: NewLetterSpacing
			})
		}

		return [
			<InspectorControls>
				<PanelBody title={'Button width'}>
					<RangeControl
						label={<strong> Button Width </strong>}
						value={ attributes.AnimatedButtonWidth }
						onChange={ onChangeAnimatedButtonWidth }
						min={ 0 }
						max={ 100 }
						step ={1}
					/>
					<RangeControl
						label={<strong> Button Border Radius </strong>}
						value={ attributes.AnimatedButtonBorderRadius }
						onChange={ onChangeAnimatedButtonBorderRadius }
						min={ 0 }
						max={ 100 }
						step ={.5}
					/>
					<RangeControl
						label={<strong> Button Border </strong>}
						value={ attributes.AnimatedButtonBorder }
						onChange={ onChangeAnimatedButtonBorder}
						min={ 0 }
						max={ 100 }
						step ={.5}
					/>

					<TextControl
						onChange={onChangeButtonAnimatedText }
						value={ attributes.AnimatedButtonText}
					/>
					<RangeControl
						label={<strong> Letter Spacing </strong>}
						value={ attributes.AnimatedLetterSpacing }
						onChange={ onChangeButtonLetterSpacing}
						min={ 0 }
						max={ 10 }
						step ={.1}
					/>

				</PanelBody>
			</InspectorControls>
			,



			<button style={AnimatedButtonStyling} className="gradient-button gradient-button-1">
						<i className="fa fa-envelope"></i>
						{
							attributes.AnimatedButtonText
						}
					</button>
			]
	},

	save( { attributes } ) {
		return <h1>
			Here's the button showing on frontend
		</h1>
	}
});
