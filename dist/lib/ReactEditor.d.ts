/// <reference types="react" />
import "prismjs";
import "prismjs/components";
import "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.css";
export default function EditorsHelper(props?: {
    blockId?: string;
    debug?: boolean;
}): import("react").JSX.Element;
