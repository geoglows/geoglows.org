/** Build a CSS background-image value that survives spaces and other special
    characters in the path (e.g. CMS uploads named "post linkedin.jpg"). */
export const bgImage = (src: string) => `background-image:url("${encodeURI(src)}")`;
