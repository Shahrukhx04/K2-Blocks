<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package K2Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */

function K2_Blocks_Category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'k2-blocks',
				'title' => __( 'K2 Blocks', 'k2-blocks' ),
			),
		)
	);
}

function k2blocks_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'k2blocks-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'k2blocks-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'k2blocks-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'k2blocks-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);



	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'k2blocks/blocks', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'k2blocks-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'k2blocks-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'k2blocks-block-editor-css',
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'k2blocks_block_assets' );

add_filter( 'block_categories', 'K2_Blocks_Category', 10, 2);

//register custom frontend scripts
function register_custom_scripts(){
	wp_enqueue_script( 'timer_frontend', plugins_url( 'src/Timer_Block/Frontend/TimerFe.js', dirname( __FILE__ ) ), array('jquery'),
			true );
	wp_enqueue_script( 'counter_frontend', plugins_url( 'src/Counter_Block/Frontend/CounterFe.js', dirname( __FILE__ ) ), array('jquery'),
			true );
	wp_enqueue_script( 'modal_frontend', plugins_url( 'src/Modal_Box/Frontend/ModalBoxFe.js', dirname( __FILE__ ) ), array('jquery'),
            true );

    wp_enqueue_script( 'ImageScroll_Frontend', plugins_url( 'src/Image_Scroll/Frontend/ImageScrollFrontEnd.js', dirname( __FILE__ ) ), array('jquery'),
                        true );

    wp_enqueue_script( 'PremiumSection_Frontend', plugins_url( 'src/Premium_Section/Frontend/PremiumSection.js', dirname( __FILE__ ) ), array('jquery'),
                                                true );

     wp_enqueue_script( 'wp-api-fetch' );
}
add_action( 'wp_enqueue_scripts', 'register_custom_scripts' );


//register fontawesome icons
function custom_load_font_awesome() {
	//wp_enqueue_style( 'load-fa', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
	wp_enqueue_style('font-awesome','src/font-awesome/all.min.css');
}

add_action( 'wp_enqueue_scripts', 'custom_load_font_awesome' );
//add_action( 'admin_enqueue_scripts', 'register_custom_backend_scripts' );
