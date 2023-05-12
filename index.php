<?php
/**
 * Plugin Name: LiuLock Synthethics™ Reactable Custom Chatbox Block
 * Version: 1.0.0
 * Plugin URI: https://github.com/ZIPING-LIU-CORPORATION/liulock-reactable-synthethics-chatblock
 * Description: A Wordpress Plugin Demonstrating Usage of same \"rendering\" code with \"Save\" and \"Edit\" callbacks of a Custom Block. Renders a Custom Block that functions as a chat box for awscyber.ai, and also allows additional gutenberg innerblocks if desired
 * Author: LIU LLC
 * Author URI: https://wakatime.com/@aws
 * License: BSD 3-Clause
 * License URI: https://opensource.org/license/bsd-3-clause/
 */
if (!function_exists("liu_synthethics_reactable_plugin_block")) {
    function liu_synthethics_reactable_plugin_block()
    {
        register_block_type(dirname(__FILE__) . "/build/block.json");
    }
}
add_action("init", "liu_synthethics_reactable_plugin_block");
?>
