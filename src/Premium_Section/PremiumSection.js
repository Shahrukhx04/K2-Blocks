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
		selectedPost: {
			type: 'number',
			default: 0,
		},
		AllPosts: {
			type: 'string',
			default: 'Shahrukh'
		},
		AllPostOptions: {
			type: 'array',
			default: [ { value: 0, label: __( 'Select a Post' ) } ]
		},
		SelectedPostContent: {
			type: 'string'
		}
	},




	// edit ({attributes, setAttributes}) {
	//
	//
	// 	function FetchPosts() {
	// 		apiFetch( { path: "/wp/v2/posts" } ).then( posts => {
	// 			setAttributes({
	// 				AllPosts: posts
	// 			})
	//
	// 			for (var i = 0; i<posts.length ;i++){
	// 				attributes.AllPostOptions.push({value:posts[i].id, label:posts[i].title.rendered})
	// 			}
	// 			console.log(attributes.AllPostOptions)
	// 		} )
	// 	}
	//
	// 	function GenerateOptions() {
	// 		for (var i = 0; i<attributes.AllPosts.length ;i++){
	// 			Options.push({value:attributes.AllPosts[i].id, label:attributes.AllPosts[i].title.rendered});
	// 			attributes.AllPostOptions.push({value:attributes.AllPosts[i].id, label:attributes.AllPosts[i].title.rendered})
	// 		}
	// 	}
	//
	//
	// 	function onChangeSelectedPost(NewSelectedPost) {
	// 		console.log(NewSelectedPost)
	// 		setAttributes({
	// 			SelectedPost: NewSelectedPost
	// 		})
	// 		for (var i=0; i<attributes.AllPosts.length; i++){
	// 			if (attributes.AllPosts[i].id === parseInt(NewSelectedPost)){
	// 				console.log("Matched" + attributes.AllPosts[i].id)
	// 				setAttributes({
	// 					SelectedPostContent: attributes.AllPosts[i].content.rendered
	// 				})
	// 			}
	// 		}
	// 	}
	//
	// 	return (
	// 		[
	// 			<InspectorControls>
	// 				<PanelBody title={'Trigger Settings'}>
	// 					<SelectControl
	// 						label="Select the Template Post"
	// 						value={ attributes.SelectedPost }
	// 						options= {attributes.AllPostOptions}
	// 						onChange={ onChangeSelectedPost}
	// 					/>
	// 				</PanelBody>
	//
	// 				<PanelBody title={'Trigger Styles'}>
	//
	// 				</PanelBody>
	// 			</InspectorControls>,
	// 			<div className={ 'ButtonStyle' }>
	// 				<span style={ { fontSize: '45px', cursor: 'pointer', textAlign: 'right' } } >&#9776;</span>
	// 			</div>
	// 		]
	// 		)
	//
	//
	//
	// }

		edit: class extends Component {
			constructor(props) {
				super(props);
				this.props = props;

				this.onChangeSelectedPost = this.onChangeSelectedPost.bind(this)
				this.props.setAttributes({
					AllPosts: null,
					AllPostOptions: [ { value: 0, label: __( 'Select a Post' ) } ]
				})
			}

			componentDidMount() {



				console.log(this.props.attributes.AllPosts)

				console.log(this.props.attributes.AllPostOptions)
				apiFetch( { path: "/wp/v2/posts" } ).then( posts => {
					this.props.setAttributes({
						AllPosts: posts
					})

					for (var i = 0; i<posts.length ;i++){
						this.props.attributes.AllPostOptions.push({value:posts[i].id, label:posts[i].title.rendered})
					}
					console.log(this.props.attributes.AllPostOptions)

				} )

			}


			componentWillUnmount() {
				console.log("Block Deleted")
				this.props.setAttributes({
					AllPosts: null,
					AllPostOptions: null,
					SelectedPostContent: null

				})
			}

			onChangeSelectedPost(NewSelectedPost) {
				console.log(NewSelectedPost)

				// this.props.setAttributes({
				// 	SelectedPost: NewSelectedPost
				// })

					console.log(this.props.attributes.AllPosts)
				for (var i=0; i<this.props.attributes.AllPosts.length; i++){
					if (this.props.attributes.AllPosts[i].id === parseInt(NewSelectedPost)){
						console.log("Matched" + this.props.attributes.AllPosts[i].id)
						this.props.setAttributes({
							SelectedPostContent: this.props.attributes.AllPosts[i].content.rendered
						})
						}
					}
			}


			render() {
				const { className } = this.props;

				return (
					[
						<InspectorControls>
							<PanelBody title={'Trigger Settings'}>
								<SelectControl
									label="Select the Template Post"
									value={ this.props.attributes.SelectedPost }
									options= {this.props.attributes.AllPostOptions}
									onChange={ this.onChangeSelectedPost}
								/>
							</PanelBody>

							<PanelBody title={'Trigger Styles'}>

							</PanelBody>
						</InspectorControls>,
						<div className={ 'ButtonStyle' }>

							<span style={ { fontSize: '45px', cursor: 'pointer', textAlign: 'right' } } >&#9776;</span>
						</div>

					]

				);
			}
		}
	,

	save ({attributes}){

		return <div>
			<div id="mySidenav" className="sidenav">
				<div id={'CrossButton'} className="closebtn">&times;</div>
				<div className={'InnerBlockContainer'}>
					<p dangerouslySetInnerHTML={ { __html: attributes.SelectedPostContent } }></p>
				</div>
			</div>
			<div className={'ButtonStyle'}>
				<span id={'PremiumSectionButton'} style={{fontSize:'45px' , cursor:'pointer', textAlign: 'center'}} >&#9776; </span>
			</div>
		</div>

	}
})
