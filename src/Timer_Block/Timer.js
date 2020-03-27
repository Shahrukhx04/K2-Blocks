import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

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
registerBlockType( 'cgb/timer-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: 'Timer',
	icon: 'clock',
	category: 'magik-blocks',
	attributes: {
		content: {type: 'string'},
		color: {type: 'string'}
	},

	/* This configures how the content and color fields will work, and sets up the necessary elements */

	edit: function(props) {
		function updateContent(event) {
			props.setAttributes({content: event.target.value})
		}
		function updateColor(value) {
			props.setAttributes({color: value.hex})
		}
		return React.createElement("table", {
			class: "time-widget",
			cellspacing: "0"
		}, React.createElement("tbody", null,
			React.createElement("tr", null,
				React.createElement("td", {
					class: "tw-digit",
					align: "center"
				}, "10"),
				React.createElement("td", {
					class: "tw-digit",
					align: "center"
				}, "10"),
				React.createElement("td", {
					class: "tw-digit",
					align: "center"
				}, "10"),
				React.createElement("td", {
					class: "tw-digit",
					align: "center"
				}, "10")),
			React.createElement("tr", null,
				React.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "days"),
				React.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "hours"),
				React.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "minutes"),
				React.createElement("td", {
					class: "tw-title",
					align: "center"
				}, "seconds"))));
	},
	save: function(props) {
		return wp.element.createElement(
			"h3",
			{style: { border: "3px solid " + props.attributes.color } },
			props.attributes.content
		);
	}
})
