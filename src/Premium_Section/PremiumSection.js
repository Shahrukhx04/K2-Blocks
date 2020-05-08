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
							templateInsertUpdatesSelection={ true }
							renderAppender={ () => (
								<InnerBlocks.ButtonBlockAppender
								/>
							) }
						/>

					</div>
				</div>,
				<div className={'ButtonStyle'}>
					<span  style={{fontSize:'45px' , cursor:'pointer', textAlign: 'right'}} onClick={openNav}>&#9776;</span>
				</div>

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
			<div className={'ButtonStyle'}>
				<span id={'PremiumSectionButton'} style={{fontSize:'45px' , cursor:'pointer', textAlign: 'center'}} >&#9776;</span>

			</div>
		</div>

	}
})
