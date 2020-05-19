import './style.scss';
import './editor.scss';
import { GLOBAL_ICONS} from '../Global_Icons';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	InspectorControls,
	ColorPalette,
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
	RangeControl,
	ColorPicker
} = wp.components;
const { apiFetch } = wp;
const { Component } = wp.element;

const premiumsectionIcon = (
    <svg width={800} height={800} viewBox="0 0 800 800">
      <image
        width={800}
        height={800}
        xlinkHref="data:image/png;base64,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 RU5ErkJggg=="
      />
    </svg>
  );

registerBlockType( 'k2/premium-section', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Premium Section',
	icon: {src:premiumsectionIcon},
	category: 'k2-blocks',
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
		},
		OverlayTransition: {
			type: 'number',
			default: '1'
		},
		OverlayOpeningWidth: {
			type: 'number',
			default: 100
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
			this.onChangeOverlayTransition = this.onChangeOverlayTransition.bind(this)
			this.onChangeOverlayOpeningWidth = this.onChangeOverlayOpeningWidth.bind(this)
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
				OverlayPosition: 'LeftToRight',
			}

			this.FetchPostsRestApi()
		}


		FetchPostsRestApi(){
				apiFetch( { path: "/wp/v2/posts" } ).then( posts => {
					console.log(posts)
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
				OverlayBackGroundColor: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'
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

		}



		onChangeIconColor(NewColor){
			this.setState(
				{
					IconStyling: {
						color: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'

					}
				}
			);
			this.props.setAttributes({
				IconColor: 'rgba('+NewColor.rgb.r+','+NewColor.rgb.g+','+NewColor.rgb.b+','+NewColor.rgb.a+')'

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


		onChangeAlignmentIconChange(value) {

			if (value.target.tagName === 'SPAN'){
				var MainDiv = document.getElementById("AlignmentIconsParent");
				var Spans = MainDiv.getElementsByTagName('div');
				for (var i = 0; i < Spans.length; i++) {
					if (Spans[i].getElementsByTagName('span')[0].className.includes('active')){
						Spans[i].getElementsByTagName('span')[0].className = Spans[i].getElementsByTagName('span')[0].className.replace('active','')
					}
				}
				console.log(value.target.tagName)
				value.target.className = value.target.className + ' active'

			}

		}

		onChangeOverlayTransition(NewTransition){
			this.props.setAttributes({
				OverlayTransition: NewTransition
			})
		}


		onChangeOverlayOpeningWidth(NewWidth){
			this.props.setAttributes({
				OverlayOpeningWidth: NewWidth
			})
		}

		myFunction(value) {
			var ParentDiv = value.target.parentNode
			var PopupDiv = ParentDiv.getElementsByTagName('span')
			if (PopupDiv[1].hidden  === true){
				PopupDiv[1].hidden  = false
			} else if (PopupDiv[1].hidden  === false){
				PopupDiv[1].hidden  = true
			}
		}



		render() {
			const { className } = this.props;

			return (
				[
					<InspectorControls>
						<PanelBody>



							<SelectControl
								label="Select the Template Post"
								value={ this.state.ReactComponentSelectedPost }
								options= {this.state.ReactComponentAllPostOptions}
								onChange={ this.onChangeSelectedPost}
								help="For smooth functionality, add only k2 blocks or wordpress default widgets in template post"

							/>
						</PanelBody>

						<PanelBody title={'Trigger Settings'}>

							<div className={'IconListWrapper'}>
								<div>
									<label><strong>Select Icon</strong></label>
								</div>
								<div id='IconWrapper' className={'IconListSubWrapper'}  onClickCapture={this.onChangeAlertIconActive}>
									<span className={'fa fa fa-bars active'}></span>
									{GLOBAL_ICONS.map((value, index) => {
        								return <span className={'fa '+value}></span>
      								})}
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


							<RangeControl
								label={<strong>Overlay Speed</strong>}
								value={ this.props.attributes.OverlayTransition }
								onChange={ this.onChangeOverlayTransition }
								min={ 0.1 }
								max={ 10 }
								step ={0.1}
							/>

							<RangeControl
								label={<strong>Overlay Gutter</strong>}
								value={ this.props.attributes.OverlayOpeningWidth }
								onChange={ this.onChangeOverlayOpeningWidth }
								min={ 1 }
								max={ 100 }
								step ={1}
							/>

							<PanelRow>

								<div style={{paddingBottom: '2%'}}>
									<label><strong>Alignment</strong></label>
								</div>
								<div id = 'AlignmentIconsParent' className={'InspectorControlOverlayPosition'} onClick={this.onChangeAlignmentIconChange}>
									<div className={'InspectorControlOverlayPositionEach'}  onClick={() => this.onChangeIconPosition('flex-start')}>
										<span className="fas fa-align-left AlignmentIconsStyle" ></span>
									</div>
									<div className={'InspectorControlOverlayPositionEach'} onClick={() => this.onChangeIconPosition('center')}>
										<span className="fas fa-align-center AlignmentIconsStyle active"></span>
									</div>
									<div className={'InspectorControlOverlayPositionEach'} onClick={() => this.onChangeIconPosition('flex-end')}>
										<span className="fas fa-align-right AlignmentIconsStyle"></span>
									</div>
								</div>

							</PanelRow>


						</PanelBody>

						<PanelBody title={'Trigger Styles'}>

							<PanelRow>
								<p><strong>Icon color</strong></p>
								<div className="popup">
								<span style={{backgroundColor: this.state.IconStyling.color}} className={ 'dot' } onClick={ this.myFunction }>
								</span>
									<span className="popuptext" id="myPopup" hidden={ true }>

												<div>
													<ColorPicker
														color={ this.state.IconStyling.color }
														onChangeComplete={ this.onChangeIconColor }
													/>
													<TextControl
														onChange={ ( value ) => {
															this.props.setAttributes( { titleColor: value } )
															this.setState({IconStyling: {
																	color: value
																}})

														} }
														value={ this.state.IconStyling.color  }
													/>
												</div>

								</span>
								</div>
							</PanelRow>

						</PanelBody>
						<PanelBody title={'Overlay Settings'}>

							<PanelRow>
								<p><strong>Overlay color</strong></p>
								<div className="popup">
								<span style={{backgroundColor: this.props.attributes.OverlayBackGroundColor}} className={ 'dot' } onClick={ this.myFunction }>
								</span>
									<span className="popuptext" id="myPopup" hidden={ true }>

												<div>
													<ColorPicker
														color={ this.props.attributes.OverlayBackGroundColor }
														onChangeComplete={ this.onChangeOverlayBackGroundColor }
													/>
													<TextControl
														onChange={ ( value ) => {
															this.props.setAttributes( { OverlayBackGroundColor: value } )
														} }
														value={ this.props.attributes.OverlayBackGroundColor  }
													/>
												</div>

								</span>
								</div>
							</PanelRow>


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
			backgroundColor: attributes.OverlayBackGroundColor,
			transition: attributes.OverlayTransition + 's'
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
				 data-OverlayWidth = {attributes.OverlayOpeningWidth}
			>
				<span className={'PremiumSectionButton'} style={ { fontSize: '45px', cursor: 'pointer', textAlign: 'right' } } >
							<i style={IconStyling} className={attributes.TriggerButtonIcon}></i>
						</span>
			</div>
		</div>

	}
})
