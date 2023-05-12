/// <reference types="react" />
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import { BlockEditProps } from "wordpress__blocks";
/**
 * Create the Edit Mode rendering of the Reactable Synthethics Chatbox Custom BLock Type
 * @param props - saved as hard-coded string like attributes used for both editing and rendering.
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 *
 */
export declare function Edit(props: BlockEditProps<{
    title?: string;
    blockId?: string;
}>): import("react").JSX.Element;
