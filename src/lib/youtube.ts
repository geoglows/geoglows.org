/** YouTube URL helpers, shared by the video, webinar, and featured-media cards. */
export const youtubeThumb = (id: string): string =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const youtubeWatchUrl = (id: string): string =>
  `https://www.youtube.com/watch?v=${id}`;
