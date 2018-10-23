<?php
defined('ABSPATH') or die('No script kiddies please!');

/**
 * Plugin Name: SD TinyMCE Font Awesome
 * Plugin URI: https://github.com/sedeg/sd-tinymce-font-awesome
 * Description: This wordpress plugin adds a drop-down menu to the TinyMCE editor so that Font Awesome icons can be easily added to the page content.
 * Version: 1.0.0
 * Author: Sebastian Degner
 * Author URI: http://sebastiandegner.de
 */
class SDTinyMCEFontAwesome
{

	const PREFIX = 'sd_fa_icons_';

	public function __construct()
	{
		define('WPFP_PATH_SDTinyMCEFontAwesome', plugin_dir_path(__FILE__));
		add_action('mce_buttons', array($this, 'sd_register_buttons'));
		add_filter('mce_external_plugins', array($this, 'sd_register_tinymce_javascript'));
		add_action('wp_enqueue_scripts', array($this, 'enqueue_stylesandscripts_fe'), 10, 2);
		add_action('admin_enqueue_scripts', array($this, 'enqueue_stylesandscripts_be'), 10, 2);
		add_action('init', array($this, 'add_editor_style'), 10, 2);
	}

	/**
	 * @param $buttons
	 * @return mixed
	 */
	public function sd_register_buttons($buttons)
	{
		array_push($buttons, '', 'sd_tinymce_fontawesome');
		return $buttons;
	}

	/**
	 * @param $plugin_array
	 * @return mixed
	 */
	public function sd_register_tinymce_javascript( $plugin_array ) {
		$plugin_array['sd_tinymce_fontawesome'] = plugins_url('/js/sd_tinymce_fontawesome.js', __FILE__);
		return $plugin_array;
	}

	function add_editor_style( ) {
		add_theme_support( 'editor-style' );
		$stylesheet = plugins_url('/css/sd_tinymce_fa_editor.css',__FILE__);
		if ( ! is_admin() )
			return;

		global $editor_styles;
		$editor_styles = (array) $editor_styles;
		$stylesheet    = (array) $stylesheet;
		if ( is_rtl() ) {
			$rtl_stylesheet = str_replace('.css', '-rtl.css', $stylesheet[0]);
			$stylesheet[] = $rtl_stylesheet;
		}

		$editor_styles = array_merge( $editor_styles, $stylesheet );
	}

	/**
	 * Enqueue Scripts and Styles Frontend
	 */
	function enqueue_stylesandscripts_fe()
	{
		wp_register_style('sd_tinymce-styles-fe', plugins_url('/css/sd_tinymce_fa_be.css', __FILE__));
		wp_enqueue_style('sd_tinymce-styles-fe');

	}

	/**
	 * Enqueue Scripts and Styles Backend
	 */
	public function enqueue_stylesandscripts_be()
	{
		wp_register_style('sd_tinymce-styles-be', plugins_url('/css/sd_tinymce_fa_be.css', __FILE__));
		wp_enqueue_style('sd_tinymce-styles-be');
	}


}

/**
 * Init Plugin
 */
new SDTinyMCEFontAwesome;