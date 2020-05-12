import './style.scss';
import './editor.scss';
import {FONTS} from './Fonts.js';
import { InnerBlocks } from '@wordpress/block-editor';


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	InspectorControls,
} = wp.editor;

const {
	PanelBody,
	SelectControl,
	ColorPicker,
	TextControl,
	RangeControl

} = wp.components;

const modalBlockIcon =  (
    <svg viewBox="0 0 512 512" width={512} height={512}>
      <path
        data-original="#A7DCFC"
        fill="#a7dcfc"
        d="M474.5 496h30V176l-50-60z"
      />
      <path
        data-original="#EAF7FF"
        className="prefix__active-path"
        data-old_color="#EAF7FF"
        fill="#d0f6ea"
        d="M7.5 176v320h467V116z"
      />
      <path
        data-original="#F85B3F"
        data-old_color="#F85B3F"
        fill="#43cea2"
        d="M474.5 86l-20 45 20 45h30V86z"
      />
      <path
        data-original="#FF7F67"
        data-old_color="#FF7F67"
        fill="#43cea2"
        d="M414.5 86l-20 45 20 45h60V86z"
      />
      <path
        data-original="#B6B8B5"
        data-old_color="#B6B8B5"
        fill="#43cea2"
        d="M7.5 86h407v90H7.5z"
      />
      <path data-original="#FFFFFF" fill="#fff" d="M37.5 116h347v30h-347z" />
      <path
        data-original="#A7DCFC"
        fill="#a7dcfc"
        d="M384.5 271h30V76l-50-30z"
      />
      <path
        data-original="#EAF7FF"
        className="prefix__active-path"
        data-old_color="#EAF7FF"
        fill="#d0f6ea"
        d="M97.5 76v195h287V46z"
      />
      <path
        data-original="#F85B3F"
        data-old_color="#F85B3F"
        fill="#43cea2"
        d="M384.5 16l-20 35 20 35h30V16z"
      />
      <path
        data-original="#FF7F67"
        data-old_color="#FF7F67"
        fill="#43cea2"
        d="M344.5 16l-20 35 20 35h40V16z"
      />
      <path
        data-original="#B6B8B5"
        data-old_color="#B6B8B5"
        fill="#43cea2"
        d="M97.5 16h247v70h-247z"
      />
      <path
        d="M314.5 58.5h-187c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h187c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"
        data-original="#FFFFFF"
        fill="#fff"
      />
      <path
        d="M504.5 78.5H422V16a7.5 7.5 0 00-7.5-7.5h-317A7.5 7.5 0 0090 16v62.5H7.5A7.5 7.5 0 000 86v410a7.5 7.5 0 007.5 7.5h497a7.5 7.5 0 007.5-7.5V86a7.5 7.5 0 00-7.5-7.5zm-7.5 15v75h-75v-75h75zm-90-15h-55v-55h55v55zm-302-55h232v55H157.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5H407v170H105v-87.49V93.5h22.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5H105v-55zm-15 115H45v-15h45v15zm0-45v15H37.5A7.5 7.5 0 0030 116v30a7.5 7.5 0 007.5 7.5H90v15H15v-75h75zm-75 395v-305h75V271a7.5 7.5 0 007.5 7.5h317a7.5 7.5 0 007.5-7.5v-87.5h75v305H15z"
        data-original="#000000"
        data-old_color="#000000"
        fill="#470dd0"
      />
    </svg>
  );
//   const MY_TEMPLATE = [
// 	[ 'core/heading', { placeholder: 'This is a Modal popup' } ],
//     [ 'core/paragraph', { placeholder: 'Add your blocks here' } ],
// ];
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType( 'k2/modal-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Modal box',
	icon: {
		src: modalBlockIcon,
	},
	category: 'magik-blocks',
	attributes: {
		type : {
			type: 'string',
			default: 'button'
		},
		popupDelay: {
			type: 'number',
			default: 3
		},
		buttonColor: {
			type: 'string',
			default: '#43cea2'
		},
		buttonText: {
			type: 'string',
			default: 'Open Sesame'
		},
		ButtonTextSize: {
			type: 'string',
			default: 1	
		},
		buttonWidth: {
			type: 'number',
			default: 2
		},
		buttonHeight: {
			type: 'number',
			default: 1
		},

	},

	edit: function(props) {

			var controls = (
				<PanelBody title={"Button styling"}>
					<TextControl
						label={<strong>Text</strong>}
						onChange={(value)=>{props.setAttributes({buttonText:value})}}
						value = {props.attributes.buttonText}
					/>
					<ColorPicker
						color={props.attributes.buttonColor}
						onChangeComplete={(value)=>{props.setAttributes({buttonColor:'rgba('+value.rgb.r+','+value.rgb.g+','+value.rgb.b+','+value.rgb.a+')'})}}
					/>
					<RangeControl
						label= "Button width"
						value={ props.attributes.buttonWidth }
						onChange={ (value)=>{props.setAttributes({buttonWidth:value})} }
						min={ 0.1 }
						max={ 10 }
						step ={0.1}
					/>
					<RangeControl
						label= "Button Height"
						value={ props.attributes.buttonHeight }
						onChange={ (value)=>{props.setAttributes({buttonHeight:value})} }
						min={ 0.1 }
						max={ 10 }
						step ={0.1}
					/>
					<RangeControl
						label= "Font size"
						value={ props.attributes.ButtonTextSize }
						onChange={ (value)=>{props.setAttributes({ButtonTextSize:value})} }
						min={ 0.1 }
						max={ 10 }
						step ={0.1}
					/>
				</PanelBody>
			);
			if(props.attributes.type == 'time'){
				controls = (
					<RangeControl
						label= "Popup delay (secs)"
						value={ props.attributes.popupDelay }
						onChange={ (value)=>{props.setAttributes({popupDelay:value})} }
						min={ 1 }
						max={ 10 }
						step ={1}
					/>   
				);
			}

			var buttonStyle = {
				backgroundColor: props.attributes.buttonColor,
				padding : props.attributes.buttonHeight+"em "+props.attributes.buttonWidth+"em",
				fontSize: props.attributes.ButtonTextSize+"em",
			}
			return ([
				<InspectorControls>
					<SelectControl
						label="Type"
						value={props.attributes.type}
						options={[
							{ label: 'Button', value: 'button' },
							{ label: 'Timed', value: 'time'}
						]}
						onChange={(value)=>{props.setAttributes({type:value})}}
					/>
					{controls}
				</InspectorControls>
				,
				<div className={'modal-container'}>
					{(props.attributes.type == 'button') &&
						<button className={'modal-button'} style = {buttonStyle}>{props.attributes.buttonText}</button>
					}
					<div class="modal-backend">
						<div class="modal-content-backend">
							<InnerBlocks renderAppender={ () => (<InnerBlocks.ButtonBlockAppender/>) }/>
						</div>
					</div>
				</div>
			])
		}
	,
	save: function(props) {
		var buttonStyle = {
			backgroundColor: props.attributes.buttonColor,
		}
		return (
		<div className={'modal-container'} data-type={props.attributes.type} data-time={props.attributes.popupDelay*1000}>
			{
				(props.attributes.type == 'button') &&
				<button className={'modal-button'} style = {buttonStyle}>{props.attributes.buttonText}</button>
			}
			<div className="modal fade-in">
				<div className="modal-content">
					<InnerBlocks.Content />
					<div className="modal-footer">
						<span class="close">close</span>
					</div>
				</div>
			</div>
		</div>
	  );
	},
})
