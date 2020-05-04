


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
			default: 0.0
		},
		MagicImageTransition: {
			type: 'number',
			default: 2
		},
		MagicImageHeight: {
			type: 'number',
			default: 50
		},
		MagicImageBackgroundPositionX: {
			type: 'number',
			default: 0
		},
		MagicImageBackgroundPositionY: {
			type: 'number',
			default: 0
		},
		MagicImageBackgroundPositionXHover: {
			type: 'number',
			default: 0
		},
		MagicImageBackgroundPositionYHover: {
			type: 'number',
			default: 100
		},
		MagicImageScrollDirection: {
			type: 'string',
			default: 'Vertical'
		},
		MagicImageScrollingDirectionOrder: {
			type: 'boolean',
			default: false
		},
		MagicImageBGDefaultX: {
			type: 'number',
			default: 0
		},
		MagicImageBGDefaultY: {
			type: 'number',
			default: 100
		},
		MagicImageWidth: {
			type: 'number',
			default: 20
		},
		MagicImageBorderRadius: {
			type: 'number',
			default: 20
		},
		MagicImageOverlayOption: {
			type: 'boolean',
			default: false
		},
		MagicImageBorderStyle: {
			type: 'string',
			default: 'none'
		},
		MagicImageBorderWidth: {
			type: 'number',
			default: 10
		},
		MagicImageBorderColor: {
			type: 'number',
			default: 'blue'
		}

	},

	edit( { attributes, setAttributes } ) {

		const colors = [
			{ name: 'red', color: '#f00' },
			{ name: 'orange', color: '#fff' },
			{ name: 'blue', color: '#00f' },
			{ name: 'green', color: '#32CD32' },
		];

		const InspectorControlUploadImagePlaceholder = {
			backgroundImage: 'url("' +attributes.MagicImage + '")'
		}

		const SubParentStyling = {
			 width: attributes.MagicImageWidth + 'rem'
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
			backgroundPositionX: attributes.MagicImageBackgroundPositionX + '%',
			backgroundPositionY: attributes.MagicImageBackgroundPositionY + '%',
			borderRadius: attributes.MagicImageBorderRadius + 'px',
			borderStyle: attributes.MagicImageBorderStyle,
			borderWidth: attributes.MagicImageBorderWidth + 'px',
			borderColor: attributes.MagicImageBorderColor

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

		function onMagicImageMouseHover() {
			setAttributes({
				MagicImageBGDefaultX: attributes.MagicImageBackgroundPositionX,
				MagicImageBGDefaultY: attributes.MagicImageBackgroundPositionY,
				MagicImageBackgroundPositionX: attributes.MagicImageBackgroundPositionXHover,
				MagicImageBackgroundPositionY: attributes.MagicImageBackgroundPositionYHover
			})
		}

		function onMagicImageMouseLeave() {
			setAttributes({
				MagicImageBackgroundPositionX: attributes.MagicImageBGDefaultX,
				MagicImageBackgroundPositionY: attributes.MagicImageBGDefaultY
			})
		}

		function onChangeMagicImageScrollingDirection(NewDirection) {
			setAttributes({
				MagicImageScrollDirection: NewDirection
			})
			if (NewDirection=== 'Vertical') {
				if (attributes.MagicImageScrollingDirectionOrder === false) {
					setAttributes({
						MagicImageBackgroundPositionX: 0,
						MagicImageBackgroundPositionY: 0,
						MagicImageBackgroundPositionXHover: 0,
						MagicImageBackgroundPositionYHover: 100,
					})
				} else if (attributes.MagicImageScrollingDirectionOrder  ===true) {
					setAttributes({
						MagicImageBackgroundPositionX: 0,
						MagicImageBackgroundPositionY: 100,
						MagicImageBackgroundPositionXHover: 0,
						MagicImageBackgroundPositionYHover: 0,
					})
				}
			} else if (NewDirection === 'Horizontal'){
				if (attributes.MagicImageScrollingDirectionOrder  === false) {
					setAttributes({
						MagicImageBackgroundPositionX: 0,
						MagicImageBackgroundPositionY: 0,
						MagicImageBackgroundPositionXHover: 100,
						MagicImageBackgroundPositionYHover: 0,
					})
				} else if (attributes.MagicImageScrollingDirectionOrder  === true) {
					setAttributes({
						MagicImageBackgroundPositionX: 100,
						MagicImageBackgroundPositionY: 0,
						MagicImageBackgroundPositionXHover: 0,
						MagicImageBackgroundPositionYHover: 0,
					})
				}
			}
		}

		function onChangeMagicImageScrollingDirectionOrder(NewOrder) {


			setAttributes({
				MagicImageScrollingDirectionOrder: NewOrder,
			})

			if (attributes.MagicImageScrollDirection === 'Vertical') {
				if (NewOrder === false) {
					setAttributes({
						MagicImageBackgroundPositionX: 0,
						MagicImageBackgroundPositionY: 0,
						MagicImageBackgroundPositionXHover: 0,
						MagicImageBackgroundPositionYHover: 100,
					})
				} else if (NewOrder ===true) {
					setAttributes({
						MagicImageBackgroundPositionX: 0,
						MagicImageBackgroundPositionY: 100,
						MagicImageBackgroundPositionXHover: 0,
						MagicImageBackgroundPositionYHover: 0,
					})
				}
			} else if (attributes.MagicImageScrollDirection === 'Horizontal'){
				if (NewOrder === false) {
					setAttributes({
						MagicImageBackgroundPositionX: 0,
						MagicImageBackgroundPositionY: 0,
						MagicImageBackgroundPositionXHover: 100,
						MagicImageBackgroundPositionYHover: 0,
					})
				} else if (NewOrder === true) {
					setAttributes({
						MagicImageBackgroundPositionX: 100,
						MagicImageBackgroundPositionY: 0,
						MagicImageBackgroundPositionXHover: 0,
						MagicImageBackgroundPositionYHover: 0,
					})
				}
			}

		}

		function onChangeMagicImageWidth(NewWidth) {
			setAttributes({
				MagicImageWidth: NewWidth
			})
		}

		function onChangeMagicImageBorderRadius(NewRadius) {
			setAttributes({
				MagicImageBorderRadius: NewRadius
			})
		}

		function onChangeMagicImageOverlayOption(NewOption) {
			setAttributes({
				MagicImageOverlayOption: NewOption,
			})
			if (NewOption == false){
				setAttributes({
					MagicImageOverlayColorAlpha: 0.0
				})
			} else {
				setAttributes({
					MagicImageOverlayColorAlpha: 0.3
				})
			}
		}

		function onChangeMagicImageBorderStyle(NewStyle) {
			setAttributes({
				MagicImageBorderStyle: NewStyle
			})
		}
		function onChangeMagicImageBorderWidth(NewWidth) {
			setAttributes({
				MagicImageBorderWidth: NewWidth
			})
		}
		function onChangeMagicImageBorderColor(NewColor) {
			setAttributes({
				MagicImageBorderColor: NewColor
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
							label={<strong> Image Width </strong>}
							value={ attributes.MagicImageWidth}
							onChange={ onChangeMagicImageWidth }
							min={ 1 }
							max={ 100 }
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
								return <div style={InspectorControlUploadImagePlaceholder} className={'ImageSelectControl'} onClick={open}>
									<i className="fa fa-plus" ></i>
								</div>;
							}}
						>
						</MediaUpload>
					</PanelBody>

					<PanelBody title={'Overlay'}>
						<PanelRow>

							<p>
								Overlay
							</p>
							<ToggleControl
								checked = {attributes.MagicImageOverlayOption}
								onChange = {onChangeMagicImageOverlayOption}
							/>

						</PanelRow>

						{
							attributes.MagicImageOverlayOption == false ?
								null :
								<div>
									<label > Fill Color </label>
									<ColorPicker
										value = {"rgb(68,68,68,0.4)"}
										onChangeComplete={ onChangeMagicImageOverlay }
									/>
								</div>

						}


					</PanelBody>

					<PanelBody title={'Style'}>
						<RangeControl
							label={<strong> Border Radius </strong>}
							value={ attributes.MagicImageBorderRadius }
							onChange={ onChangeMagicImageBorderRadius }
							min={ 1 }
							max={ 100 }
							step ={1}
						/>

						<SelectControl
							label="Border Type"
							value={ attributes.MagicImageBorderStyle }
							options={
								[
									{ label: 'None', value: 'None' },
									{ label: 'Solid', value: 'Solid' },
									{ label: 'Double', value: 'Double' },
									{ label: 'Dotted', value: 'Dotted' },
									{ label: 'Dashed', value: 'Dashed' },
									{ label: 'groove', value: 'groove' }
								]
							}
							onChange={ onChangeMagicImageBorderStyle}
						/>

						{
							(attributes.MagicImageBorderStyle === 'None')?null:
								<div>
									<RangeControl
										label={<strong> Border Width </strong>}
										value={ attributes.MagicImageBorderWidth }
										onChange={ onChangeMagicImageBorderWidth }
										min={ 1 }
										max={ 100 }
										step ={1}
									/>
									<p><strong>Progress Bar Color</strong></p>
									<ColorPalette
										value = {attributes.MagicImageBorderColor}
										onChange = {onChangeMagicImageBorderColor}
										colors = {colors} />
								</div>

						}

					</PanelBody>

					<PanelBody title={'Advance Options'}>

						<SelectControl
							label="Direction"
							value={ attributes.MagicImageScrollDirection }
							options={
								[
									{ label: 'Vertical', value: 'Vertical' },
									{ label: 'Horizontal', value: 'Horizontal' }
								]
							}
							onChange={ onChangeMagicImageScrollingDirection}
						/>


						<PanelRow>

							<p>
								Reverse Direction
							</p>
							<ToggleControl
								checked = {attributes.MagicImageScrollingDirectionOrder}
								onChange = {onChangeMagicImageScrollingDirectionOrder}
							/>

						</PanelRow>
					</PanelBody>




				</InspectorControls>

				,
				<div className={'ParentContainer'}>
					<div  style={SubParentStyling} className={'SubParentContainer'}>
						<div  style={MagicImageStyling} className={'ImageParentContainer'} onMouseOver={onMagicImageMouseHover} onMouseLeave={onMagicImageMouseLeave}>

						</div>
					</div>
				</div>
			]
		)

	},

	save( { attributes } ) {

		const SubParentStyling = {
			width: attributes.MagicImageWidth + 'rem'
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
			backgroundPositionX: attributes.MagicImageBackgroundPositionX + '%',
			backgroundPositionY: attributes.MagicImageBackgroundPositionY + '%',
			borderRadius: attributes.MagicImageBorderRadius + 'px'

		}


		return 	<div className={'ParentContainer'}>
			<div  style={SubParentStyling} className={'SubParentContainer'}>
				<div id="ImageScroll" style={MagicImageStyling} className={'ImageParentContainer'}
					 data-PositionX = {attributes.MagicImageBackgroundPositionX }
					 data-PositionY = {attributes.MagicImageBackgroundPositionY }
					 data-PositionHoverX = {attributes.MagicImageBackgroundPositionXHover}
					 data-PositionHoverY = {attributes.MagicImageBackgroundPositionYHover}
				>

				</div>
			</div>
		</div>
	}

} )
