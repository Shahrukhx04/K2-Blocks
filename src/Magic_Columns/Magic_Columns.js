import './style.scss';
import './editor.scss';
import {GLOBAL_FONTS} from '../Global_Fonts';
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

const magicColumnsBlockIcon =  (
    <svg viewBox="0 0 512 512" width={512} height={512} {...props}>
      <path
        d="M222.844 485.088H17.067C7.641 485.088 0 477.447 0 468.021V43.979c0-9.425 7.641-17.067 17.067-17.067h205.777c9.425 0 17.067 7.641 17.067 17.067V468.02c0 9.427-7.64 17.068-17.067 17.068z"
        data-original="#FFE365"
        data-old_color="#FFE365"
        fill="#43cea2"
      />
      <path
        d="M151.48 153.898H88.43c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h63.05c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zM151.48 233.343H88.43c-9.425 0-17.067-7.641-17.067-17.067 0-9.425 7.641-17.067 17.067-17.067h63.05c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zM151.48 312.79H88.43c-9.425 0-17.067-7.641-17.067-17.067 0-9.425 7.641-17.067 17.067-17.067h63.05c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zM151.48 392.235H88.43c-9.425 0-17.067-7.641-17.067-17.067 0-9.425 7.641-17.067 17.067-17.067h63.05c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067z"
        data-original="#FFC733"
        className="prefix__active-path"
        data-old_color="#FFC733"
        fill="#2ea882"
      />
      <path
        d="M222.844 26.912H119.955v458.175h102.889c9.425 0 17.067-7.641 17.067-17.067V43.979c0-9.426-7.64-17.067-17.067-17.067z"
        data-original="#FFC733"
        className="prefix__active-path"
        data-old_color="#FFC733"
        fill="#2ea882"
      />
      <g>
        <path
          d="M151.48 119.765h-31.524v34.133h31.524c9.425 0 17.067-7.641 17.067-17.067s-7.641-17.066-17.067-17.066zM151.48 199.21h-31.524v34.133h31.524c9.425 0 17.067-7.641 17.067-17.067 0-9.425-7.641-17.066-17.067-17.066zM151.48 278.657h-31.524v34.133h31.524c9.425 0 17.067-7.641 17.067-17.067 0-9.425-7.641-17.066-17.067-17.066zM151.48 358.102h-31.524v34.133h31.524c9.425 0 17.067-7.641 17.067-17.067 0-9.425-7.641-17.066-17.067-17.066z"
          data-original="#FFAF00"
          data-old_color="#FFAF00"
          fill="#470dd0"
        />
      </g>
      <path
        d="M494.933 485.088H289.156c-9.425 0-17.067-7.641-17.067-17.067V43.979c0-9.425 7.641-17.067 17.067-17.067h205.777c9.425 0 17.067 7.641 17.067 17.067V468.02c0 9.427-7.641 17.068-17.067 17.068z"
        data-original="#FFE365"
        data-old_color="#FFE365"
        fill="#43cea2"
      />
      <g>
        <path
          d="M423.569 153.898h-63.05c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h63.05c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zM423.569 233.343h-63.05c-9.425 0-17.067-7.641-17.067-17.067 0-9.425 7.641-17.067 17.067-17.067h63.05c9.425 0 17.067 7.641 17.067 17.067-.001 9.426-7.641 17.067-17.067 17.067zM423.569 312.79h-63.05c-9.425 0-17.067-7.641-17.067-17.067 0-9.425 7.641-17.067 17.067-17.067h63.05c9.425 0 17.067 7.641 17.067 17.067-.001 9.426-7.641 17.067-17.067 17.067zM423.569 392.235h-63.05c-9.425 0-17.067-7.641-17.067-17.067 0-9.425 7.641-17.067 17.067-17.067h63.05c9.425 0 17.067 7.641 17.067 17.067-.001 9.426-7.641 17.067-17.067 17.067z"
          data-original="#FFC733"
          className="prefix__active-path"
          data-old_color="#FFC733"
          fill="#2ea882"
        />
        <path
          d="M494.933 26.912H392.044v458.175h102.889c9.425 0 17.067-7.641 17.067-17.067V43.979c0-9.426-7.641-17.067-17.067-17.067z"
          data-original="#FFC733"
          className="prefix__active-path"
          data-old_color="#FFC733"
          fill="#2ea882"
        />
      </g>
      <g>
        <path
          d="M423.569 119.765h-31.524v34.133h31.524c9.425 0 17.067-7.641 17.067-17.067s-7.641-17.066-17.067-17.066zM423.569 199.21h-31.524v34.133h31.524c9.425 0 17.067-7.641 17.067-17.067-.001-9.425-7.641-17.066-17.067-17.066zM423.569 278.657h-31.524v34.133h31.524c9.425 0 17.067-7.641 17.067-17.067-.001-9.425-7.641-17.066-17.067-17.066zM423.569 358.102h-31.524v34.133h31.524c9.425 0 17.067-7.641 17.067-17.067-.001-9.425-7.641-17.066-17.067-17.066z"
          data-original="#FFAF00"
          data-old_color="#FFAF00"
          fill="#470dd0"
        />
      </g>
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

registerBlockType( 'k2/magic-columns-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Magic Columns',
	icon: {
		src: magicColumnsBlockIcon,
	},
	category: 'magik-blocks',
	attributes: {
		
	},

	edit: function(props) {

		
		
			
		return ([
			<InspectorControls>
				
			</InspectorControls>
			
			,
			<div className={'magic-columns-container'}>
				
			</div>
		])
	}
	,
	save: function(props) {
		
		return (
		<div className={'magic-columns-container'}>
				
		</div>
	  );
	},
})
