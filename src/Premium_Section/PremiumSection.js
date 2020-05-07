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
	CardBody
} = wp.components;

registerBlockType( 'k2/premium-section', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Premium Section',
	icon: 'smiley',
	category: 'magik-blocks',
	attributes: {
	},
	edit(){

		const MY_TEMPLATE = [

		];

		function openNav() {
			document.getElementById("mySidenav").style.width = "100%";
			document.body.style.backgroundColor = "rgb(0,0,128,0.2)"
		}

		function closeNav() {
			document.getElementById("mySidenav").style.width = "0%";
			document.body.style.backgroundColor = "white"

		}




		return (
			[
				<div id="mySidenav" className="sidenav">
					<div id={'CrossButton'} className="closebtn" onClick={closeNav}>&times;</div>
					<div className={'InnerBlockContainer'}>
						<InnerBlocks
							renderAppender={ () => (
								<InnerBlocks.ButtonBlockAppender
								/>
							) }
						/>

					</div>
				</div>,
				<span  style={{fontSize:'30px' , cursor:'pointer', textAlign: 'center'}} onClick={openNav}>&#9776; Click</span>

			]
			)



	},
	save(){

		return <div>
			<div id="mySidenav" className="sidenav">
				<div id={'CrossButton'} className="closebtn">&times;</div>
				<div className={'InnerBlockContainer'}>
					<InnerBlocks.Content
					/>

				</div>
			</div>
			<span id={'PremiumSectionButton'} style={{fontSize:'30px' , cursor:'pointer', textAlign: 'center'}} >&#9776; Click</span>
		</div>

	}
})
