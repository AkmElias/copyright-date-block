<?php
/**
 * Three variables are exposed in the render.php, which you can use to customize the block’s output:
 * $attributes (array): The block attributes
 * $content (string): The block default content.
 * $block (WP_Block): The block instance.
 */
$current_year = date( "Y" );
// Determine which content to display.
if ( isset( $attributes['fallbackCurrentYear'] ) && $attributes['fallbackCurrentYear'] === $current_year ) {

    // The current year is the same as the fallback, so use the block content saved in the database (by the save.js function).
    $block_content = $content;
} else {
    // The current year is different from the fallback, so render the updated block content.
    if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
        $display_date = $attributes['startingYear'] . '–' . $current_year;
    } else {
        $display_date = $current_year;
    }

    $block_content = '<p ' . get_block_wrapper_attributes() . '>© ' . esc_html( $display_date ) . '</p>';
}

echo wp_kses_post( $block_content );