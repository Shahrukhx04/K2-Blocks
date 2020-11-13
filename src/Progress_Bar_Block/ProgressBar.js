/**
 * BLOCK: progressbar
 *
 * Registering a basic Progress_Bar_Block with Gutenberg.
 * Simple Progress_Bar_Block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import {GLOBAL_FONTS} from '../Global_Fonts';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType,
	// For attribute sources
} = wp.blocks;
const {
	InspectorControls,
	ColorPalette
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	TextControl,
	RangeControl,
	ToggleControl,
	SelectControl,
	ColorPicker,

} = wp.components;

const progressbarIcon =(
    <svg width={800} height={800} viewBox="0 0 800 800">
      <image
        width={800}
        height={800}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAC4jAAAuIwF4pT92AAAYJElEQVR42u3dT8umV33A8d/UOCLUlZaqcVVC6aI7o1Hoi0io EboVuyiNSC0a4gsQMfSPGCml4qrdGDWxfQtCjVUE1+mioKRQXemmY8PdxUyqpLO4kjzP95rznM8H hsAkA+cmP+4z3+ec675vXS6XAQAAKPzW2QsAAAD2IUAAAICMAAEAADICBAAAyAgQAAAgI0AAAICM AAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAg I0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAA yAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEA ADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AA AICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQ AAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADIC BAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICM AAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAg I0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAA yAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEA ADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AA AICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQ AAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADIC BAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICM AAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAg I0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAA yAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEA ADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AA AICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQ AAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADIC BAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICM AAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAg I0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAA yAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEA ADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AA AICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAICMAAEAADICBAAAyAgQ AAAgI0AAAICMAAEAADICBAAAyAgQAAAgI0AAAIDMQ2cvoPTuZ79+OXsND7qff/YTt85eAwAAN5cT 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 1wIAwDZenplnfvaZT37z7IWcYesAmZl5z1997fbMPDkzT8zMB2fm4Zl5+9nrAgDgxvjV3H3Q/Icz 88LMPP+zv/zkNl88+HrbBwgAANDZ7iF0AADgPAIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAA ACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIE AADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwA AQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAj QAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADI CBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAA MgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAA gIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAA ACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIE AADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwA AQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAj QAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADI CBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAA MgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAA gIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAA ACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIE AADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwA AQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAj QAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADI CBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAA MgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAA gIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAA ACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIE AADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwA AQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAj QAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADI CBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAA MgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAA gIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAA ACAjQAAAgIwAAQAAMgIEAADICBAAACAjQAAAgIwAAQAAMgIEAADICBAAACDzv39aza9/vcocAAAA JXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA1LTE2VDE4OjU0OjA5KzAzOjAw3ryd8QAAACV0RVh0ZGF0 ZTptb2RpZnkAMjAyMC0wNS0xNlQxODo1NDowOSswMzowMK/hJU0AAAAASUVORK5CYII="
      />
    </svg>
  );

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
registerBlockType( 'k2/progressbar-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: __( 'Progress Bar' ), // Block title.
	icon: {src:progressbarIcon}, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'k2-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {

		progressBarColor: {
			type: 'string',
			default: '#1995AD'
		},
		progressBarHeight: {
			type: 'number',
			default: 1.5
		},
		title: {
			type: 'string',
			default: 'Progress'
		},
		titleColor: {
			type: 'string',
			default: '#1995AD'
		},
		progressBarPercentage:{
			type: 'number',
			default: 54
		},
		ShowPercentage: {
			type: 'boolean',
			default: true
		},
		TextFontSize: {
			type: 'number',
			default: 14
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
			default: 'Arial'
		},
		TextFontWeight: {
			type: 'string',
			default: '600'
		},
		ProgressBarBorderRadius: {
			type: 'number',
			default: 36
		},
		ProgressBarOpacity: {
			type: 'number',
			default: 0.4
		},
		ProgressBarStripedOrSolid: {
			type: 'boolean',
			default: true
		},
		ProgressBarWidth: {
			type: 'number',
			default: 54
		},
		ProgressBarTextStyle: {
			type: 'number',
			default: 'normal'
		},
		ProgressBarTextDecoration: {
			type: 'string',
			default: 'None'
		},
		ProgressBarTextDisplay: {
			type: 'boolean',
			default: true
		},
		ProgressBarAllignment: {
			type: 'string',
			default: 'center'
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
			{ color: '#32897A' },
			{  color: '#1995AD' },
			{  color: '#011A27' },
			{  color: '#F69454' },
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

		const ProgressBarParentContainer = {
			justifyContent: attributes.ProgressBarAllignment
		}

		const ProgressBarSubParentContainerStyling = {
			width: attributes.ProgressBarWidth + 'rem'
		}
		const ProgressBarOutsideContainerStyling = {
			backgroundColor: attributes.ProgressBarBackGroundColor,
			height: attributes.progressBarHeight + "em",
			borderRadius: attributes.ProgressBarBorderRadius + 'px',

		}

		const ProgressBarInsideAnimationStyling = {
			width: attributes.progressBarPercentage + "%",
			backgroundColor: attributes.progressBarColor,
			borderRadius: attributes.ProgressBarBorderRadius + 'px',

		}

		const ProgressBarInsideAnimationSpanStyling = {
			animationPlayState: attributes.AnimationState,
			opacity: attributes.ProgressBarOpacity
		}

		const BarOutlineStyling = {
			borderColor: attributes.progressBorderColor,
			height: attributes.progressBarHeight + 'em'
		}

		const TextStyling = {
			fontSize: attributes.TextFontSize + 'px',
			color: attributes.titleColor,
			align: 'left',
			fontFamily: attributes.TextFontFamily,
			fontWeight: attributes.TextFontWeight,
			fontStyle: attributes.ProgressBarTextStyle,
			textDecoration: attributes.ProgressBarTextDecoration,
			wordWrap: 'break-word'
		}
		function onTitleColorChange(NewColor) {

			setAttributes(
				{
					titleColor: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'

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
				progressBorderColor: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'

			})
		}

		function onBarColorChange(NewColor) {

			setAttributes({
				progressBarColor: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'


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
				ProgressBarGradientColor1: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'

			})
		}

		function onGradient2ColorChange(NewColor) {
			setAttributes({
				ProgressBargradientColor2: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'

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
				ProgressBarBackGroundColor: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'

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

		function onChangeProgressBarOpacity(NewValue) {
			setAttributes({
				ProgressBarOpacity: NewValue
			})
		}

		function onChangeProgressBarStripedOrSolid(NewOption) {
			setAttributes({
				ProgressBarStripedOrSolid: NewOption
			})
			if (NewOption === true){
				setAttributes({
					ProgressBarOpacity: 0.5
				})
			} else {
				setAttributes({
					ProgressBarOpacity: 0.0
				})
			}
		}

		function onChangeProgressBarWidth(NewWidth) {
			setAttributes({
				ProgressBarWidth: NewWidth
			})
		}
		function onChangeProgressBarTextStyle(Newstyle) {
			setAttributes({
				ProgressBarTextStyle: Newstyle
			})
		}

		function onChangeProgressBarTextDecoration(NewDecoration) {
			setAttributes({
				ProgressBarTextDecoration: NewDecoration
			})
		}

		function onChangeProgressBarTextDisplay(NewOption) {
			setAttributes({
				ProgressBarTextDisplay:NewOption
			})
		}

		function onChangeProgressBarAllignment(NewAllignment) {
			setAttributes({
				ProgressBarAllignment: NewAllignment
			})
		}

		function onChangeAlignmentIconChange(value) {

			if (value.target.tagName === 'SPAN'){
				var MainDiv = document.getElementById("k2-pb-Alignment-Icons-Id");
				var Spans = MainDiv.getElementsByTagName('div');
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].getElementsByTagName('span')[0].className.includes('k2-pb-active')){
						Spans[i].getElementsByTagName('span')[0].className = Spans[i].getElementsByTagName('span')[0].className.replace('k2-pb-active','')
					}
				}
				console.log(value.target.tagName)
				value.target.className = value.target.className + ' k2-pb-active'

			}

		}



		function myFunction(value) {

			var oferts = document.querySelectorAll(".k2-pg-popup-text .components-color-picker__inputs-wrapper");
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
		return ([

				<InspectorControls>
					<PanelBody>

						<RangeControl
							label={<strong> Progress Bar Width </strong>}
							value={ attributes.ProgressBarWidth }
							onChange={ onChangeProgressBarWidth }
							min={ 5 }
							max={ 100 }
							step ={1}
						/>

						<RangeControl
							label={<strong> Progress Bar Height </strong>}
							value={ attributes.progressBarHeight }
							onChange={ onBarHeightChange }
							min={ 0 }
							max={ 10 }
							step ={0.1}
						/>


						<RangeControl
							label={<strong>Progress</strong>}
							value={ attributes.progressBarPercentage }
							onChange={ OnBarPercentageChange }
							min={ 0 }
							max={ 100 }
						/>

						<PanelRow>

							<div style={{paddingBottom: '2%'}}>
								<label><strong>Alignment</strong></label>
							</div>
							<div id = 'k2-pb-Alignment-Icons-Id' className={'k2-pb-inspector-alignment'} onClick={onChangeAlignmentIconChange}>

								<div className={'k2-pb-inspector-alignment-single'}  onClick={() => onChangeProgressBarAllignment('flex-start')}>
									<span className="fa fa-align-left k2-pb-alignment-icon" ></span>
								</div>
								<div className={'k2-pb-inspector-alignment-single'} onClick={() => onChangeProgressBarAllignment('center')}>
									<span className="fa fa-align-center k2-pb-alignment-icon active"></span>
								</div>
								<div className={'k2-pb-inspector-alignment-single'} onClick={() => onChangeProgressBarAllignment('flex-end')}>
									<span className="fa fa-align-right k2-pb-alignment-icon"></span>
								</div>
							</div>

						</PanelRow>

					</PanelBody>





					<PanelBody title={"Colors"}>

						<PanelRow>
							<p><strong>Title color</strong></p>
							<div className="k2-pg-popup">
								<span style={{backgroundColor: attributes.titleColor}} className={ 'k2-pb-dot' } onClick={ myFunction }>
								</span>
								<span className="k2-pg-popup-text" hidden={ true }>

												<div>
													<ColorPicker
														color={ attributes.titleColor }
														onChangeComplete={ onTitleColorChange }
														disableAlpha
													/>
													<TextControl
														onChange={ ( value ) => {
															setAttributes( { titleColor: value } )
														} }
														value={ attributes.titleColor}
													/>
												</div>

								</span>
							</div>
						</PanelRow>

						<PanelRow>
							<p><strong>Progress Bar color</strong></p>
							<div className="k2-pg-popup">
								<span style={{backgroundColor: attributes.progressBarColor}} className={ 'k2-pb-dot' } onClick={ myFunction }>
								</span>
								<span className="k2-pg-popup-text" hidden={ true }>

												<div>
													<ColorPicker
														color={ attributes.progressBarColor }
														onChangeComplete={ onBarColorChange }
													/>
													<TextControl
														onChange={ ( value ) => {
															setAttributes( { progressBarColor: value } )
														} }
														value={ attributes.progressBarColor}
													/>
												</div>

								</span>
							</div>
						</PanelRow>




					</PanelBody>

					<PanelBody title={'Text'}>

						<PanelRow>
							<p>
								Show Text
							</p>
							<ToggleControl
								checked = {attributes.ProgressBarTextDisplay}
								onChange = {onChangeProgressBarTextDisplay}
							/>
						</PanelRow>


						{
							(attributes.ProgressBarTextDisplay === false)?null:
								<div>
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
										min={ 0 }
										max={ 50 }
										step ={1}
									/>

									<PanelRow>
										<SelectControl
											label="Font Family"
											value={ attributes.TextFontFamily }
											options={ GLOBAL_FONTS }
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

									<SelectControl
										label="Style"
										value={ attributes.ProgressBarTextStyle }
										options={
											[
												{ label: 'Normal', value: 'Normal' },
												{ label: 'oblique', value: 'oblique' },
												{ label: 'italic', value: 'italic' },
											]
										}
										onChange={ onChangeProgressBarTextStyle}
									/>

									<SelectControl
										label="Decoration"
										value={ attributes.ProgressBarTextDecoration }
										options={
											[
												{ label: 'None', value: 'None' },
												{ label: 'underline', value: 'underline' },
												{ label: 'overline', value: 'overline' },
												{ label: 'line-through', value: 'line-through' },
											]
										}
										onChange={ onChangeProgressBarTextDecoration}
									/>
								</div>
						}



					</PanelBody>

					<PanelBody title={'Bar'}>

						<PanelRow>
							<p>
								Striped
							</p>
							<ToggleControl
								checked = {attributes.ProgressBarStripedOrSolid}
								onChange = {onChangeProgressBarStripedOrSolid}
							/>

						</PanelRow>

						{
							(attributes.ProgressBarStripedOrSolid === true)?<div>
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
									label={<p> <strong> Opacity </strong> </p>}
									value={ attributes.ProgressBarOpacity }
									onChange={ onChangeProgressBarOpacity }
									min={ 0.1 }
									max={ 1 }
									step ={0.1}
								/>
							</div>:null
						}





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
							<p><strong>Background color</strong></p>
							<div className="k2-pg-popup">
								<span style={{backgroundColor: attributes.ProgressBarBackGroundColor}} className={ 'k2-pb-dot' } onClick={ myFunction }>
								</span>
								<span className="k2-pg-popup-text" hidden={ true }>

												<div>
													<ColorPicker
														color={ attributes.ProgressBarBackGroundColor }
														onChangeComplete={ onChangeProgressBarBackgound }
													/>
													<TextControl
														onChange={ ( value ) => {
															setAttributes( { ProgressBarBackGroundColor: value } )
														} }
														value={ attributes.ProgressBarBackGroundColor}
													/>
												</div>

								</span>
							</div>
						</PanelRow>

					</PanelBody>



				</InspectorControls>,

				<div style={ProgressBarParentContainer} className={'k2-pb-parent-container'}>
					<div style={ProgressBarSubParentContainerStyling} className={'k2-pb-sub-parent-container '}>

						{
							(attributes.ProgressBarTextDisplay === false)?null:
								<div>
									<span style={ TextStyling}>
										{attributes.title}
										{
											(attributes.ShowPercentage == false) ?
												''
												: <span style={{float: 'right'}}> {attributes.progressBarPercentage} % </span>
										}

									</span>
								</div>
						}



						<div style={ProgressBarOutsideContainerStyling} className="k2-pb-outside-container ">
							<div className="k2-pb-inside-container " style={ProgressBarInsideAnimationStyling}>
								<span style={ProgressBarInsideAnimationSpanStyling}></span>
							</div>
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

		const ProgressBarParentContainer = {
			justifyContent: attributes.ProgressBarAllignment
		}

		const ProgressBarSubParentContainerStyling = {
			width: attributes.ProgressBarWidth + 'rem'
		}
		const ProgressBarOutsideContainerStyling = {
			backgroundColor: attributes.ProgressBarBackGroundColor,
			height: attributes.progressBarHeight + "em",
			borderRadius: attributes.ProgressBarBorderRadius + 'px',

		}

		const ProgressBarInsideAnimationStyling = {
			width: attributes.progressBarPercentage + "%",
			backgroundColor: attributes.progressBarColor,
			borderRadius: attributes.ProgressBarBorderRadius + 'px',

		}

		const ProgressBarInsideAnimationSpanStyling = {
			animationPlayState: attributes.AnimationState,
			opacity: attributes.ProgressBarOpacity
		}

		const BarOutlineStyling = {
			borderColor: attributes.progressBorderColor,
			height: attributes.progressBarHeight + 'em'
		}

		const TextStyling = {
			fontSize: attributes.TextFontSize + 'px',
			color: attributes.titleColor,
			align: 'left',
			fontFamily: attributes.TextFontFamily,
			fontWeight: attributes.TextFontWeight,
			fontStyle: attributes.ProgressBarTextStyle,
			textDecoration: attributes.ProgressBarTextDecoration,
			wordWrap: 'break-word'
		}
		return 	<div style={ProgressBarParentContainer} className={'k2-pb-parent-container'}>
			<div style={ProgressBarSubParentContainerStyling} className={'k2-pb-sub-parent-container '}>

				{
					(attributes.ProgressBarTextDisplay === false)?null:
						<div>
									<span style={ TextStyling}>
										{attributes.title}
										{
											(attributes.ShowPercentage == false) ?
												''
												: <span style={{float: 'right'}}> {attributes.progressBarPercentage} % </span>
										}

									</span>
						</div>
				}


				<div style={ProgressBarOutsideContainerStyling} className="k2-pb-outside-container ">
					<div className="k2-pb-inside-container " style={ProgressBarInsideAnimationStyling}>
						<span style={ProgressBarInsideAnimationSpanStyling}></span>
					</div>
				</div>

			</div>
		</div>



	},


} );
