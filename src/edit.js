/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * PanelBody: This is a component that creates a collapsible panel. It's often used in the sidebar of the block editor for block settings.
 * TextControl: This is a form input component that allows users to enter text. It's often used for settings that require a text input.
 * TextToggleControl: This is a form input component that allows users to toggle a setting on or off. It's often used for settings that are binary or boolean in nature.
 */
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const currentYear = new Date().getFullYear().toString();
	const { showStartingYear, startingYear } = attributes;

	// Set the display date
	let displayDate;

    if ( showStartingYear && startingYear ) {
            displayDate = startingYear + '–' + currentYear;
    } else {
        displayDate = currentYear;
    }

	// Return the output in the editor
	return (
		<>
            <InspectorControls>
				<PanelBody title={ __( 'Settings', 'copyright-date-block' ) }>
					<ToggleControl
                        checked={ !! showStartingYear }
                        label={ __(
                            'Show starting year',
                            'copyright-date-block'
                        ) }
                        onChange={ () =>
                            setAttributes( {
                                showStartingYear: ! showStartingYear,
                            } )
                        }
                    />
                    { showStartingYear && (
                        <TextControl
                            label={ __(
                                'Starting year',
                                'copyright-date-block'
                            ) }
                            value={ startingYear || '' }
                            onChange={ ( value ) =>
                                setAttributes( { startingYear: value } )
                            }
                        />
                    ) }
                </PanelBody>
            </InspectorControls>
            <p { ...useBlockProps() }>© { displayDate }</p>
        </>
	);
}
