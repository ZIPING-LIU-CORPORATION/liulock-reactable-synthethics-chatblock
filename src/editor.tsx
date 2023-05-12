/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import { BlockEditProps } from "wordpress__blocks";

import EditorsHelper from "../lib/ReactEditor";
/**
 * Create the Edit Mode rendering of the Reactable Synthethics Chatbox Custom BLock Type
 * @param props - saved as hard-coded string like attributes used for both editing and rendering.
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 *
 */

export function Edit(
  props: BlockEditProps<{
    title?: string;
    blockId?: string;
  }>
) {
  const React = window.React;

  const { attributes, setAttributes } = props;
  if (!attributes.blockId || attributes.blockId !== props.clientId) {
    setAttributes({ blockId: props.clientId });
  }
  const blockProps = useBlockProps({
    className: "wp-block-liulock-synthethics",
  });
  const innerBlockProps = useBlockProps({
    className: "wp-block-liulock-synthethics",
  });
  return (
    <div {...blockProps}>
      <div className="flexbox">
        <div className="chat-box">
          <div className="chat-box-header">
            <RichText
              value={attributes.title || ""}
              placeholder="Enter a title for chatbox"
              tagName="h3"
              onChange={(val: string) => setAttributes({ title: val })}
            />

            <InnerBlocks {...innerBlockProps} />
          </div>
          <div
            className="wp-liusynthethics-reacted-chatbox"
            id={`editor-${attributes.blockId}`}
          >
            <EditorsHelper />
          </div>
          <script></script>
          <script></script>
        </div>
      </div>
    </div>
  );
}
