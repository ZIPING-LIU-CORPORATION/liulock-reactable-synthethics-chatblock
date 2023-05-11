<?php
/**
 * Plugin Name: LiuLock Synthethics™ Reactable Wordpress Custom Chatbox Block Plugin
 * Plugin Version: 0.9.0
 * Plugin Author: ZipingL
 */
if (!function_exists("liu_synthethics_reactable_plugin_block")) {
    function liu_synthethics_reactable_plugin_block()
    {
        register_block_type(dirname(__FILE__) . "/build/block.json");
    }
}
add_action("init", "liu_synthethics_reactable_plugin_block");
?>
