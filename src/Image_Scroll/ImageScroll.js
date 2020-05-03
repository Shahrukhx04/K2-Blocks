


import './editor.scss'
import './style.scss'


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
	PanelRow,
	TextControl,
	RangeControl,
	ToggleControl,
	SelectControl,
	Button,
	ColorPicker,
	ColorPalette

} = wp.components;

registerBlockType( 'k2/imagescroll-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-Progress_Bar_Block.
	title: 'Magic Image',
	icon: 'smiley',
	category: 'magik-blocks',
	attributes: {
		MagicImage: {
			type: 'string',
			default: 'http://localhost/wordpress/wp-content/uploads/2020/05/ice-cream-caramel.jpg'
		},
		MagicImageOverlayColorRed: {
			type: 'number',
			default: 68
		},
		MagicImageOverlayColorGreen: {
			type: 'number',
			default: 68
		},
		MagicImageOverlayColorBlue: {
			type: 'number',
			default: 68
		},
		MagicImageOverlayColorAlpha: {
			type: 'number',
			default: 0.3
		},
		MagicImageTransition: {
			type: 'number',
			default: 2
		},
		MagicImageHeight: {
			type: 'number',
			default: 50
		}
	},

	edit( { attributes, setAttributes } ) {

		const colors = [
			{ name: 'red', color: '#f00' },
			{ name: 'white', color: '#fff' },
			{ name: 'blue', color: '#00f' },
		];

		const InspectorControlUploadImagePlaceholder = {
			backgroundImage: 'url("' +attributes.MagicImage + '")'
		}

		const MagicImageStyling = {
			backgroundImage: 'url("' +attributes.MagicImage + '")',
			boxShadow: 'inset 0 0 0 100vh rgba(' +
				attributes.MagicImageOverlayColorRed + ',' +
				attributes.MagicImageOverlayColorGreen + ',' +
				attributes.MagicImageOverlayColorBlue + ',' +
				attributes.MagicImageOverlayColorAlpha + ')',

			transition: 'background-position ' + attributes.MagicImageTransition + 's ease-in-out',
			height: attributes.MagicImageHeight + 'vh',
		}

		function onChangeMagicImageTransition(NewTransition) {
			setAttributes({
				MagicImageTransition: NewTransition
			})
		}

		function onChangeMagicImageOverlay(NewOverlay) {
			setAttributes({
				MagicImageOverlayColorRed: NewOverlay['rgb'].r,

				MagicImageOverlayColorGreen: NewOverlay['rgb'].g,

				MagicImageOverlayColorBlue: NewOverlay['rgb'].b,

				MagicImageOverlayColorAlpha: NewOverlay['rgb'].a
			})
		}
		function onMagicImageChange(NewImage){
			setAttributes({
				MagicImage: NewImage.url
			})
		}

		function onChangeMagicImageHeight(Newheight) {
			setAttributes({
				MagicImageHeight: Newheight
			})
		}
		return (
			[
				<InspectorControls>

					<PanelBody>
						<RangeControl
							label={<strong> Transition Speed </strong>}
							value={ attributes.MagicImageTransition }
							onChange={ onChangeMagicImageTransition }
							min={ 1 }
							max={ 10 }
							step ={1}
						/>
						<RangeControl
							label={<strong> Image Height </strong>}
							value={ attributes.MagicImageHeight }
							onChange={ onChangeMagicImageHeight }
							min={ 1 }
							max={ 100 }
							step ={1}
						/>


					</PanelBody>


					<PanelBody title={'Image'}>
						<MediaUpload
							onSelect = {onMagicImageChange}
							type = {'images'}
							value = {attributes.MagicImage}
							render={ ({open}) => {
								return <div style={InspectorControlUploadImagePlaceholder} className={'ImageSelectControl'}>
									<i className="fa fa-plus-circle" onClick={open}></i>
								</div>;
							}}
						>
						</MediaUpload>
					</PanelBody>

					<PanelBody title={'Overlay'}>
						<label > Fill Color </label>
						<ColorPicker
							value = {"rgb(68,68,68,0.4)"}
							onChangeComplete={ onChangeMagicImageOverlay }
						/>
					</PanelBody>

					<PanelBody title={'Advance Options'}>

						{/*<SelectControl*/}
						{/*	label="Font Family"*/}
						{/*	value={ attributes.TextFontFamily }*/}
						{/*	options={ FontsAvalaible }*/}
						{/*	onChange={ onTextFontChange}*/}
						{/*/>*/}


						{/*<PanelRow>*/}

						{/*	<p>*/}
						{/*		Show Percentage*/}
						{/*	</p>*/}
						{/*	<ToggleControl*/}
						{/*		checked = {attributes.ShowPercentage}*/}
						{/*		onChange = {onShowPercentageToggleChange}*/}
						{/*	/>*/}

						{/*</PanelRow>*/}
					</PanelBody>




				</InspectorControls>

				,
				<div className={'ParentContainer'}>
					<div className={'SubParentContainer'}>
						<div  style={MagicImageStyling} className={'ImageParentContainer'}>

						</div>
					</div>
				</div>
			]
		)

	},

	save( { attributes } ) {
		const MagicImageStyling = {
			backgroundImage: 'url("' +attributes.MagicImage + '")',
			boxShadow: 'inset 0 0 0 100vh rgba(' +
				attributes.MagicImageOverlayColorRed + ',' +
				attributes.MagicImageOverlayColorGreen + ',' +
				attributes.MagicImageOverlayColorBlue + ',' +
				attributes.MagicImageOverlayColorAlpha + ')',

			transition: 'background-position ' + attributes.MagicImageTransition + 's ease-in-out',
			height: attributes.MagicImageHeight + 'vh',
		}

		return 		<div className={'ParentContainer'}>
			<div className={'SubParentContainer'}>
				<div  style={MagicImageStyling} className={'ImageParentContainer'}>

				</div>
			</div>
		</div>
	}

} )
