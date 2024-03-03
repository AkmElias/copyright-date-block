<?php
/**
 * Three variables are exposed in the render.php, which you can use to customize the block’s output:
 * $attributes (array): The block attributes
 * $content (string): The block default content.
 * $block (WP_Block): The block instance.
 */
$current_year = date( "Y" );

if ( ! empty( $attributes['startingYear'] ) && ! empty( $attributes['showStartingYear'] ) ) {
	$display_date = $attributes['startingYear'] . '–' . $current_year;
} else {
	$display_date = $current_year;
}
?>

<p <?php echo get_block_wrapper_attributes(); ?>>
    © <?php echo esc_html( $display_date ); ?>
</p>