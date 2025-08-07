// Shared utility functions for video handling

export const extractVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
    /(?:youtu\.be\/)([^&\n?#]+)/,
    /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
    /facebook\.com\/.*\/videos\/(\d+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1].split("?")[0];
    }
  }
  return null;
};

export const fetchYouTubeTitle = async (videoId: string): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
    );
    const data = await response.json();
    return data.title;
  } catch (error) {
    console.error("Error fetching video title:", error);
    return null;
  }
};

export const getEmbedUrl = (video: { id: string; platform: string; url: string }): string => {
  if (video.platform === "youtube") {
    return `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`;
  } else if (video.platform === "facebook") {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false&width=560&height=315&autoplay=true`;
  }
  return "";
};

export const getThumbnailsPerPage = (width: number): number => {
  return width < 768 ? 4 : 8;
};

export const getThumbnail = (video) => {
  if (video.platform === "youtube") {
    return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  }
  return video.thumbnail || "";
};
