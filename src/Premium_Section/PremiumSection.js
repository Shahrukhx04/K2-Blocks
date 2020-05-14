import './style.scss';
import './editor.scss';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	RichText,
	InspectorControls,
	ColorPalette,
	InnerBlocks
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	SelectControl,
	DateTimePicker,
	NumberControl,
	TextControl,
	RangeControl,
	ColorPicker,
	ColorIndicator,
	Card,
	CardBody,
} = wp.components;
const { apiFetch } = wp;
const { Component } = wp.element;


registerBlockType( 'k2/premium-section', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Premium Section',
	icon: 'smiley',
	category: 'magik-blocks',
	attributes: {

		SelectedPostContent: {
			type: 'string'
		},
		TriggerButtonIcon: {
			type: 'string',
			default:'fa fa fa-bars'
		},
		IconColor: {
			type: 'string',
			default: '#F69454'
		},
		OverlaySlidingAttribute: {
			type: 'string',
			default: 'width'
		},
		OverlayTopDown: {
			type: 'string',
			default: 'top'
		},
		OverlayleftRight: {
			type: 'string',
			default: 'left'
		},
		OverlayWidth: {
			type: 'string',
			default: '0%'
		},
		OverlayHeight: {
			tpye: 'string',
			default: '100%'
		},
		IconPosition: {
			type:'string',
			default: 'center'
		},
		OverlayBackGroundColor: {
			type: 'string',
			default: 'orange'
		}
	},

	edit: class extends Component {

		constructor(props) {
			super(props);
			this.props = props;
			this.onChangeSelectedPost = this.onChangeSelectedPost.bind(this);
			this.FetchPostsRestApi = this.FetchPostsRestApi.bind(this)
			this.onChangeAlertIconActive = this.onChangeAlertIconActive.bind(this)
			this.onChangeIconColor = this.onChangeIconColor.bind(this)
			this.onChangeOverlayPosition = this.onChangeOverlayPosition.bind(this)
			this.onChangeIconPosition = this.onChangeIconPosition.bind(this)
			this.onChangeOverlayBackGroundColor = this.onChangeOverlayBackGroundColor.bind(this)
			this.state = {
				ReactComponentAllPosts: '',
				ReactComponentAllPostOptions: [{ value: 0, label: __( 'Select a Post' ) }],
				ReactComponentSelectedPost: 0,
				ToolBarColors: [
					{ color: '#32897A' },
					{ color: '#1995AD' },
					{ color: '#011A27' },
					{ color: '#F69454' },
				],
				IconStyling: {
					color: this.props.attributes.IconColor
				},
				IconPosition: this.props.attributes.IconPosition,
				OverlayPosition: 'LeftToRight'
			}

			this.FetchPostsRestApi()
		}


		FetchPostsRestApi(){
			apiFetch( { path: "/wp/v2/posts" } ).then( posts => {

				this.setState(
					{
						ReactComponentAllPosts: posts
					}
				);

				for (var i = 0; i<posts.length ;i++){
					this.state.ReactComponentAllPostOptions.push({value:posts[i].id, label:posts[i].title.rendered})
				}
				this.forceUpdate()
			} )
		}

		onChangeOverlayBackGroundColor(NewColor){

			this.props.setAttributes({
				OverlayBackGroundColor: NewColor
			})

		}
		onChangeSelectedPost(NewSelectedPost) {
			this.setState(
				{
					ReactComponentSelectedPost: NewSelectedPost
				}
			)

			for (var i=0; i<this.state.ReactComponentAllPosts.length; i++){
				if (this.state.ReactComponentAllPosts[i].id === parseInt(NewSelectedPost)){
					this.props.setAttributes({
						SelectedPostContent: this.state.ReactComponentAllPosts[i].content.rendered
					})
					}
				}
		}

		onChangeAlertIconActive(value) {

			var MainDiv = document.getElementById("IconWrapper");
			var Spans = MainDiv.getElementsByTagName('span');
			for (var i = 0; i < Spans.length; i++) {
				if (Spans[i].className.includes('active')){
					Spans[i].className = Spans[i].className.replace('active','')
				}
			}
			this.props.setAttributes({
				TriggerButtonIcon: value.target.className
			})
			console.log(value.target.className)
			value.target.className = value.target.className + ' active'

			for (var i = 0; i < Spans.length; i++) {
				if (Spans[i].className.includes('active')){
					Spans[i].className = Spans[i].className.replace('active','')
				}
			}
			this.props.setAttributes({
				TriggerButtonIcon: value.target.className
			})
			console.log(value.target.className)
			value.target.className = value.target.className + ' active'
		}




		onChangeIconColor(NewColor){
			console.log(NewColor)
			this.setState(
				{
					IconStyling: {
						color: NewColor
					}
				}
			);
			this.props.setAttributes({
				IconColor: NewColor
			})
		}

		onChangeIconPosition(NewPosition){
			this.setState({
				IconPosition: NewPosition
			})
			this.props.setAttributes({
				IconPosition: NewPosition
			})
		}

		onChangeOverlayPosition(value){
			this.setState({
				OverlayPosition: value
			})
			if (value === 'RightToLeft'){
				this.props.setAttributes({
					OverlayWidth: '0%',
					OverlayHeight: '100%',
					OverlayleftRight: 'right',
					OverlayTopDown: 'top',
					OverlaySlidingAttribute: 'width'
				})
			} else if (value === 'LeftToRight'){

				this.props.setAttributes({
					OverlayWidth: '0%',
					OverlayHeight: '100%',
					OverlayleftRight: 'left',
					OverlayTopDown: 'top',
					OverlaySlidingAttribute: 'width'
				})

			}else if (value === 'DownToUp'){

				this.props.setAttributes({
					OverlayWidth: '100%',
					OverlayHeight: '0%',
					OverlayleftRight: 'right',
					OverlayTopDown: 'bottom',
					OverlaySlidingAttribute: 'height'
				})
			}else if (value === 'UpToDown'){

				this.props.setAttributes({
					OverlayWidth: '100%',
					OverlayHeight: '0%',
					OverlayleftRight: 'left',
					OverlayTopDown: 'top',
					OverlaySlidingAttribute: 'height'
				})
			}
		}

		render() {
			const { className } = this.props;

			return (
				[
					<InspectorControls>
						<SelectControl
							label="Select the Template Post"
							value={ this.state.ReactComponentSelectedPost }
							options= {this.state.ReactComponentAllPostOptions}
							onChange={ this.onChangeSelectedPost}
						/>

						<PanelBody title={'Trigger Settings'}>

							<div className={'IconListWrapper'}>
								<div>
									<label><strong>Select Icon</strong></label>
								</div>
								<div id='IconWrapper' className={'IconListSubWrapper'}  onClickCapture={this.onChangeAlertIconActive}>
									<span className={'fa fa fa-bars active'}></span>
									<span className={'fa fa fa-rocket'}></span>
									<span className={'fa fa fa-bell'} ></span>
									<span className={'fa fa fa-plane'}></span>
									<span className={'fa fa fa-clock'}></span>
									<span className={'fa fa fa-pen'} ></span>
									<span className={'fa fa-address-book'} ></span>

									<span className={'fa fa fa-ad'}></span>
									<span className={'fa fa fa-align-right'} ></span>
									<span className={'fa fa fa-allergies'}></span>
									<span className={'fa fa fa-ambulance'}></span>
									<span className={'fa fa fa-american-sign-language-interpreting'} ></span>
									<span className={'fa fa-anchor'} ></span>


									<span className={'fa fa fa-angle-double-down'}></span>
									<span className={'fa fa fa-angle-double-left'} ></span>
									<span className={'fa fa fa-angle-double-right'}></span>
									<span className={'fa fa fa-angle-double-up'}></span>
									<span className={'fa fa fa-angle-down'} ></span>
									<span className={'fa fa-angle-left'} ></span>
								</div>
							</div>


							<SelectControl
								label="Overlay Position"
								value={ this.state.OverlayPosition }
								options= {	[
									{ label: 'Left To Right', value: 'LeftToRight' },
									{ label: 'Right To Left', value: 'RightToLeft' },
									{ label: 'Top Down', value: 'UpToDown' },
									{ label: 'Bottom Up', value: 'DownToUp' }
								]}
								onChange={ this.onChangeOverlayPosition}
							/>

							<PanelRow>

								<div style={{paddingBottom: '2%'}}>
									<label><strong>Alignment</strong></label>
								</div>
								<div className={'InspectorControlOverlayPosition'}>

									<div className={'InspectorControlOverlayPositionEach'}  onClick={() => this.onChangeIconPosition('flex-start')}>
										<i className="fas fa-align-left" ></i>
									</div>
									<div className={'InspectorControlOverlayPositionEach'} onClick={() => this.onChangeIconPosition('center')}>
										<i className="fas fa-align-center"></i>
									</div>
									<div className={'InspectorControlOverlayPositionEach'} onClick={() => this.onChangeIconPosition('flex-end')}>
										<i className="fas fa-align-right"></i>
									</div>
								</div>

							</PanelRow>


						</PanelBody>

						<PanelBody title={'Trigger Styles'}>

							<p><strong>Icon Color</strong></p>
							<ColorPalette
								value={this.state.IconStyling.color}
								onChange={this.onChangeIconColor}
								colors = {this.state.ToolBarColors}
							/>
							<TextControl
								value={this.state.IconStyling.color}
								onChange={this.onChangeIconColor}
							/>

						</PanelBody>
						<PanelBody title={'Overlay Settings'}>
							<ColorPalette
								value={this.props.attributes.OverlayBackGroundColor}
								onChange={this.onChangeOverlayBackGroundColor}
								colors = {this.state.ToolBarColors}
							/>
						</PanelBody>
					</InspectorControls>,
					<div style={{justifyContent: this.state.IconPosition}} className={ 'ButtonStyle' }>
						<span style={ { fontSize: '45px', cursor: 'pointer', textAlign: 'right' } } >
							<i style={this.state.IconStyling} className={this.props.attributes.TriggerButtonIcon}></i>
						</span>
					</div>

				]

			);
		}
	}
,

	save ({attributes}){

		const IconStyling = {
			color: attributes.IconColor
		}

		const SideNavStyling = {
			width: attributes.OverlayWidth,
			height: attributes.OverlayHeight,
			backgroundColor: attributes.OverlayBackGroundColor
		}

		return <div>
			<div style={SideNavStyling} id="mySidenav" className="sidenav">
				<div id={'CrossButton'} className="closebtn">&times;</div>
				<div className={'InnerBlockContainer'}>
					<p dangerouslySetInnerHTML={ { __html: attributes.SelectedPostContent } }></p>
				</div>
			</div>
			<div id="TriggerAttributes"  style={{justifyContent: attributes.IconPosition}} className={'ButtonStyle'}
				 data-OverlayLeftRight = {attributes.OverlayleftRight }
				 data-OverlayTopDown = {attributes.OverlayTopDown}
				 data-SilidingOption = {attributes.OverlaySlidingAttribute}
			>
				<span id={'PremiumSectionButton'} style={ { fontSize: '45px', cursor: 'pointer', textAlign: 'right' } } >
							<i style={IconStyling} className={attributes.TriggerButtonIcon}></i>
						</span>
			</div>
		</div>

	}
})
