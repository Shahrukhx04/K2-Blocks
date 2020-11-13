
//  Import CSS.
import './editor.scss';
import './style.scss';
import { GLOBAL_FONTS } from '../Global_Fonts';



const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType,
	// For attribute sources
} = wp.blocks;
const {
	RichText,
	InspectorControls,
	MediaUpload
} = wp.editor;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	PanelRow,
	ColorPicker,
} = wp.components;

var bannericon = (
	<svg width={800} height={800} viewBox="0 0 800 800" >
      <image
        data-name="Layer 0"
        x={61}
        y={215}
        width={678}
        height={370}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqYAAAFyBAMAAADVEgUIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUUjZr///81xmw1xmwUjZost3j///8AAABkA86TAAAABHRSTlMAAAC9BkOpqwAAAAFiS0dEBxZhiOsAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkBgcUNhNFG+UqAAADUElEQVR42u3aQQ0CQQAEwbOABEACBggBBQQcgH8JKFgelw7HJtUKJvWe5apVnXfDlq23zRrTPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPadzkM2n8zvT007n4axnRlTPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+/7Y9Pn+ZS+mTJkyZcqUKVOmTJkyZcqUKVOmTJkyncZ02pj2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me2byPR/D1JMmTJlypQpU6ZMmTJlypQpU6ZMmTJluq3pNDHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se075vpuONJq1p2w45bb5s1pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtI9pH9M+pn1M+5j2Me1j2se0j2kf0z6mfUz7mPYx7WPax7SPaR/TPqZ9TPuY9jHtY9rHtO8DZkuWgFoIalwAAAAASUVORK5CYII="
      />
    </svg>
)

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
	icon: {
		src: bannericon
	} ,
	category: 'k2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Hero Banner	' ),
		__( 'Magik Blocks' ),
	],
	attributes: {

		// Animated banner section attributes
		AnimatedBannerHeadingText: {
			type: 'string',
			default: 'Animated Banner'
		},
		AnimatedBannerParagraphText: {
			type: 'string',
			default: 'Hover on this banner for animation'
		},
		AnimatedBannerWidth: {
			type: 'number',
			default: '50'
		},
		AnimatedBannerHeight: {
			type: 'number',
			default: '50'
		},
		AnimatedBannerAllignment: {
			type: 'string',
			default: 'center'
		},
		AnimatedBannerBackgroundImage: {
			type: 'string',
			default: "http://k2blocks.com/wp-content/uploads/2020/05/man-driving-a-bike.jpg"
		},


		// Animated Banner Text Attributes
		AnimatedBannerTextHorizontalAlignment: {
			type: 'string',
			default: 'center'
		},
		AnimatedBannerTextVerticalAlignment: {
			type: 'string',
			default: 'center'
		},
		AnimatedBannerHeadingTextFontSize: {
			type: 'string',
			default: '2.5'
		},
		AnimatedBannerHeadingTextFontFamily: {
			type: 'string',
			default: 'Helvatica'
		},
		AnimatedBannerHeadingTextWeight: {
			type: 'number',
			default: 800
		},
		AnimatedBannerParagraphTextFontSize: {
			type: 'number',
			default: '1.7'
		},
		AnimatedBannerParagraphTextFontFamily: {
			type: 'string',
			default: 'Helvatica'
		},
		AnimatedBannerParagraphTextWeight: {
			type: 'number',
			default: 500
		},

		// Animated Banner Animation Attributes

		AnimatedBannerAnimationOverlayColor: {
			type: 'string',
			default: 'inset 0 0 0 100vh rgba(255,0,0,0.0)'
		},
		AnimatedBannerAnimationStyle: {
			type: 'string',
			default: 'Translate'
		},
		AnimatedBannerAnimationOpacity: {
			type: 'number',
			default: 0.8
		},
		InspectorControlAnimatedBannerOverlayColor: {
			type: 'string',
			default: 'rgba(68,68,68,0.4)'
		},

		AnimatedBannerAnimationHeight: {
			type: 'number',
			default: '100'
		}


	}
	,

	edit( { attributes, setAttributes } ) {



		const FontWeightAvaibles = [
			{ label: 'normal'},
			{ label: '100'},
			{ label: '200'},
			{ label: '300'},
			{ label: '400'},
			{ label: '500'},
			{ label: '600'},
		]

		const BoxedContainer = {
			justifyContent: attributes.AnimatedBannerAllignment
		}

		const CoverParentContainer = {
			width: attributes.AnimatedBannerWidth + 'rem',
			height: attributes.AnimatedBannerHeight+ 'vh'
		}

		const CoverTextContainer = {
			boxShadow: attributes.AnimatedBannerAnimationOverlayColor
		}

		const CoverParentImage = {
			backgroundImage: 'url("' +attributes.AnimatedBannerBackgroundImage + '")'
		}

		const HeadingStyle = {
			fontSize: attributes.AnimatedBannerHeadingTextFontSize + "em",
			fontWeight: attributes.AnimatedBannerHeadingTextWeight,
			fontFamily: attributes.AnimatedBannerHeadingTextFontFamily
		}


		const ParagraphStyle = {
			fontSize: attributes.AnimatedBannerParagraphTextFontSize + "em",
			fontWeight: attributes.AnimatedBannerParagraphTextWeight,
			fontFamily: attributes.AnimatedBannerParagraphTextFontFamily
		}


		const AB_BG_IMAGE = {
			backgroundImage: 'url("' +attributes.AnimatedBannerBackgroundImage + '")'
		}


		function onChangeAnimatedBannerWidth(NewWidth)  {
			setAttributes({
				AnimatedBannerWidth: NewWidth
			})
		}

		function onChangeAnimatedBannerHeight(NewHeight)  {
			setAttributes({
				AnimatedBannerHeight: NewHeight
			})
		}


		function onChangeAnimatedBannerAllignment(Newalignemnt)  {
			setAttributes({
				AnimatedBannerAllignment: Newalignemnt
			})
		}


		function onChangeAnimatedBannerBackgroundImage(NewImage)  {
			setAttributes({
				AnimatedBannerBackgroundImage: NewImage.url
			})
		}


		// Animated Banner Text Attributes
		function onChangeAnimatedBannerTextHorizontalAlignment(NewHAllignment)  {
			setAttributes({
				AnimatedBannerTextHorizontalAlignment: NewHAllignment
			})
		}


		function onChangeAnimatedBannerTextVerticalAlignment(NewVAllignment)  {
			setAttributes({
				AnimatedBannerTextVerticalAlignment: NewVAllignment
			})
		}


		function onChangeAnimatedBannerHeadingTextFontSize(NewFontSize)  {
			setAttributes({
				AnimatedBannerHeadingTextFontSize: NewFontSize
			})
		}


		function onChangeAnimatedBannerHeadingTextFontFamily(NewHeadingTextFont)  {
			setAttributes({
				AnimatedBannerHeadingTextFontFamily: NewHeadingTextFont
			})
		}


		function onChangeAnimatedBannerHeadingTextWeight(NewHeadingWeight)  {
			setAttributes({
				AnimatedBannerHeadingTextWeight: NewHeadingWeight
			})
		}


		function onChangeAnimatedBannerParagraphTextFontSize(NewFontSize)  {
			setAttributes({
				AnimatedBannerParagraphTextFontSize: NewFontSize
			})
		}


		function onChangeAnimatedBannerParagraphTextFontFamily(NewFontFamily)  {
			setAttributes({
				AnimatedBannerParagraphTextFontFamily: NewFontFamily
			})
		}


		function onChangeAnimatedBannerParagraphTextWeight(NewWeight)  {
			setAttributes({
				AnimatedBannerParagraphTextWeight: NewWeight
			})
		}


		// Animated Banner Animation Attributes

		function onChangeAnimatedBannerAnimationOverlayColor(NewOverlay)  {
			setAttributes({
				InspectorControlAnimatedBannerOverlayColor: 'rgba('+NewOverlay.rgb.r+','+NewOverlay.rgb.g+','+NewOverlay.rgb.b+','+NewOverlay.rgb.a+')',
				AnimatedBannerAnimationOverlayColor: 'inset 0 0 0 100vh rgba(' +
					NewOverlay['rgb'].r + ',' +
					NewOverlay['rgb'].g + ',' +
					NewOverlay['rgb'].b + ',' +
					NewOverlay['rgb'].a + ')'

			})
		}


		function onChangeAnimatedBannerAnimationStyle(NewStyle) {
			setAttributes({
				AnimatedBannerAnimationStyle: NewStyle
			})

			if (NewStyle === "Translate"){

			} else (NewStyle === "Sliding")
			{

			}
		}


		function onChangeAnimatedBannerAnimationOpacity(NewOpacity) {
			setAttributes({
				AnimatedBannerAnimationOpacity: NewOpacity
			})
		}



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


		function onChangeAlignmentIconChange(value) {

			if (value.target.tagName === 'SPAN'){
				var MainDiv = document.getElementById("k2-AB-inspector-control-classic-position");
				var Spans = MainDiv.getElementsByTagName('div');
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].getElementsByTagName('span')[0].className.includes('k2-AB-active')){
						Spans[i].getElementsByTagName('span')[0].className = Spans[i].getElementsByTagName('span')[0].className.replace('k2-AB-active','')
					}
				}
				console.log(value.target.tagName)
				value.target.className = value.target.className + ' k2-AB-active '

			}

		}


		function myFunction(value) {

			var oferts = document.querySelectorAll(".k2-AB-popup-text .components-color-picker__inputs-wrapper");
			for (var i=0; i<oferts.length; i++){
				oferts[i].style.display = 'none';
			}


			var ParentDiv = value.target.parentNode
			var PopupDiv = ParentDiv.getElementsByTagName('span')
			if (PopupDiv[1].hidden  === true){
				PopupDiv[1].hidden  = false
			} else if (PopupDiv[1].hidden  === false){
				PopupDiv[1].hidden  = true
			}
		}

		return ( [

			<InspectorControls>

				<PanelBody>

					{/*<SelectControl*/}
					{/*	label="Animation Style"*/}
					{/*	value={ attributes.AnimatedBannerAnimationStyle }*/}
					{/*	options={*/}
					{/*		[*/}
					{/*			{ label: 'Translate', value: 'Translate' },*/}
					{/*			{ label: 'Sliding', value: 'Sliding' }*/}
					{/*		]*/}
					{/*	}*/}
					{/*	onChange={ onChangeAnimatedBannerAnimationStyle}*/}
					{/*/>*/}

					<RangeControl
						label={<strong> Banner Width </strong>}
						value={ attributes.AnimatedBannerWidth }
						onChange={ onChangeAnimatedBannerWidth }
						min={ 0 }
						max={ 100 }
						step ={1}
					/>
					<RangeControl
						label={<strong> Banner Height </strong>}
						value={ attributes.AnimatedBannerHeight }
						onChange={ onChangeAnimatedBannerHeight }
						min={ 0 }
						max={ 100 }
						step ={1}
					/>

					<PanelRow>

						<div style={{paddingBottom: '2%'}}>
							<label><strong>Banner Alignment</strong></label>
						</div>
						<div id ="k2-AB-inspector-control-classic-position" className={'k2-AB-inspector-control-classic-position'} onClick={onChangeAlignmentIconChange}>

							<div className={'k2-AB-inspector-control-classic-position-single'}  onClick={() => onChangeAnimatedBannerAllignment('flex-start')}>
								<span className="fa fa-align-left k2-AB-alignment-icon" ></span>
							</div>
							<div className={'k2-AB-inspector-control-classic-position-single'} onClick={() => onChangeAnimatedBannerAllignment('center')}>
								<span className="fa fa-align-center k2-AB-alignment-icon k2-AB-active"></span>
							</div>
							<div className={'k2-AB-inspector-control-classic-position-single'} onClick={() => onChangeAnimatedBannerAllignment('flex-end')}>
								<span className="fa fa-align-right k2-AB-alignment-icon"></span>
							</div>
						</div>

				</PanelRow>

				</PanelBody>

				<PanelBody title={"Animation Overlay"}>

					<PanelRow>
						<p><strong>Fill color</strong></p>
						<div className="k2-AB-popup">
									<span style={{backgroundColor: attributes.InspectorControlAnimatedBannerOverlayColor}} className={ 'k2-AB-dot' } onClick={ myFunction }>
									</span>
							<span className="k2-AB-popup-text" hidden={ true }>
									<div>
										<ColorPicker
											color={ attributes.AnimatedBannerAnimationOverlayColor }
											onChangeComplete={ onChangeAnimatedBannerAnimationOverlayColor }
										/>
									</div>
							</span>
						</div>
					</PanelRow>

					{/*<RangeControl*/}
					{/*	label={<strong> Opacity </strong>}*/}
					{/*	value={ attributes.AnimatedBannerAnimationOpacity }*/}
					{/*	onChange={ onChangeAnimatedBannerAnimationOpacity }*/}
					{/*	min={ 0 }*/}
					{/*	max={ 1 }*/}
					{/*	step ={0.1}*/}
					{/*/>*/}

				</PanelBody>

				<PanelBody title={'Background Image'}>
					<MediaUpload
						onSelect = {onChangeAnimatedBannerBackgroundImage}
						type = {'images'}
						value = {attributes.AnimatedBannerBackgroundImage}
						render={ ({open}) => {
							return <div style={AB_BG_IMAGE} className={'k2-AB-image-select-control'}>
								<i className="fa fa-plus-circle" onClick={open}></i>
							</div>;
						}}
					>
					</MediaUpload>


				</PanelBody>



				<PanelBody title={"Heading Font Styles"}>

					<RangeControl
						label={<strong> Font Size </strong>}
						value={ attributes.AnimatedBannerHeadingTextFontSize }
						onChange={ onChangeAnimatedBannerHeadingTextFontSize }
						min={ 0 }
						max={ 10 }
						step ={0.1}
					/>

					<PanelRow>
						<SelectControl
							label="Font Family"
							value={ attributes.AnimatedBannerHeadingTextFontFamily }
							options={ GLOBAL_FONTS }
							onChange={ onChangeAnimatedBannerHeadingTextFontFamily}
						/>
					</PanelRow>

					<PanelRow>
						<SelectControl
							label="Weight"
							value={ attributes.AnimatedBannerHeadingTextWeight }
							options={ FontWeightAvaibles }
							onChange={ onChangeAnimatedBannerHeadingTextWeight}
						/>
					</PanelRow>
				</PanelBody>



			<PanelBody title={"Paragraph Font Styles"}>

				<RangeControl
					label={<strong> Font Size </strong>}
					value={ attributes.AnimatedBannerParagraphTextFontSize }
					onChange={ onChangeAnimatedBannerParagraphTextFontSize }
					min={ 0 }
					max={ 15 }
					step ={0.1}
				/>

				<PanelRow>
					<SelectControl
						label="Font Family"
						value={ attributes.AnimatedBannerParagraphTextFontFamily }
						options={ GLOBAL_FONTS }
						onChange={ onChangeAnimatedBannerParagraphTextFontFamily}
					/>
				</PanelRow>

				<PanelRow>
					<SelectControl
						label="Weight"
						value={ attributes.AnimatedBannerParagraphTextWeight }
						options={ FontWeightAvaibles }
						onChange={ onChangeAnimatedBannerParagraphTextWeight}
					/>
				</PanelRow>
			</PanelBody>

			</InspectorControls>,

			<div style={BoxedContainer} className={'k2-AB-boxed-container'}>
			<div style = {CoverParentContainer} className={'K2-AB-cover-parent-container-wrapper'}>
				<div style={CoverParentImage} className={'k2-AB-cover-parent-container'}>
					<div style={CoverTextContainer} className={'k2-AB-cover-text-container'}>
						<RichText
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.AnimatedBannerHeadingText } // Any existing content, either from the database or an attribute default
							style = {HeadingStyle}
							className={ 'k2-AB-cover-heading-style' }
							formattingControls={ ['bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ onChangeAnimatedBannerHeading } // Store updated content as a block attribute
							placeholder={ __( 'Animated Banner' ) } // Display this text before any content has been added by the user
						/>

						<RichText
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.AnimatedBannerParagraphText } // Any existing content, either from the database or an attribute default
							style={ParagraphStyle}
							className = {'k2-AB-cover-paragraph-heading'}
							formattingControls={ [ 'bold', 'italic', 'link',] } // Allow the content to be made bold or italic, but do not allow other formatting options
							onChange={ onChangeAnimatedBannerParagraphText } // Store updated content as a block attribute
							placeholder={ __( 'Hover on this banner for animation' ) } // Display this text before any content has been added by the user
						/>
					</div>
				</div>
			</div>

		</div>
	])

	},

	save( { attributes } ) {


		const CoverTextContainer = {
			boxShadow: attributes.AnimatedBannerAnimationOverlayColor
		}

		const BoxedContainer = {
			justifyContent: attributes.AnimatedBannerAllignment
		}

		const CoverParentContainer = {
			width: attributes.AnimatedBannerWidth + 'rem',
			height: attributes.AnimatedBannerHeight+ 'vh'
		}

		const CoverParentImage = {
			backgroundImage: 'url("' +attributes.AnimatedBannerBackgroundImage + '")'
		}

		const HeadingStyle = {
			fontSize: attributes.AnimatedBannerHeadingTextFontSize + "em",
			fontWeight: attributes.AnimatedBannerHeadingTextWeight,
			fontFamily: attributes.AnimatedBannerHeadingTextFontFamily
		}


		const ParagraphStyle = {
			fontSize: attributes.AnimatedBannerParagraphTextFontSize + "em",
			fontWeight: attributes.AnimatedBannerParagraphTextWeight,
			fontFamily: attributes.AnimatedBannerParagraphTextFontFamily
		}
		return 	<div style={BoxedContainer} className={'k2-AB-boxed-container'}>
			<div style = {CoverParentContainer} className={'K2-AB-cover-parent-container-wrapper'}>
				<div style={CoverParentImage} className={'k2-AB-cover-parent-container'}>
					<div style={CoverTextContainer} className={'k2-AB-cover-text-container'}>
						<RichText.Content
							tagName="div" // The tag here is the element output and editable in the admin
							value={ attributes.AnimatedBannerHeadingText } // Any existing content, either from the database or an attribute default
							style = {HeadingStyle}
							className={ 'k2-AB-cover-heading-style' }
						/>

						<RichText.Content
							tagName="div" // The tag here is the element output and editable in the admin
							style={ParagraphStyle}
							value={ attributes.AnimatedBannerParagraphText } // Any existing content, either from the database or an attribute default
							className = {'k2-AB-cover-paragraph-heading'}
						/>
					</div>
				</div>
			</div>

		</div>
	}
});

