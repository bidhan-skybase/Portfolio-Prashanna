import { useState, useEffect } from "react";
import { fetchYouTubeTitle, getThumbnailsPerPage } from "../utils/videoUtils";

export interface VideoData {
  url: string;
  id: string;
  platform: string;
  title?: string;
  thumbnail?:string;
}

export const useVideoGallery = (videos: VideoData[]) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [hasNextBeenPressed, setHasNextBeenPressed] = useState(false);
  const [thumbnailsPerPage, setThumbnailsPerPage] = useState(
    getThumbnailsPerPage(window.innerWidth)
  );
  const [videoTitles, setVideoTitles] = useState<{ [key: string]: string }>({});

  // Fetch video titles
  useEffect(() => {
    const fetchAllTitles = async () => {
      const titles: { [key: string]: string } = {};
      for (const video of videos) {
        if (video.platform === "youtube") {
          const title = await fetchYouTubeTitle(video.id);
          if (title) {
            titles[video.id] = title;
          }
        }
      }
      setVideoTitles(titles);
    };

    fetchAllTitles();
  }, [videos]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setThumbnailsPerPage(getThumbnailsPerPage(width));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle modal escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleNext = () => {
    setHasNextBeenPressed(true);
    setThumbnailStartIndex((prev) => {
      const nextIndex = prev + thumbnailsPerPage;
      if (nextIndex >= videos.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const handlePrevious = () => {
    setThumbnailStartIndex((prev) => {
      const prevIndex = prev - thumbnailsPerPage;
      if (prevIndex < 0) {
        const lastPageStartIndex =
          Math.floor((videos.length - 1) / thumbnailsPerPage) * thumbnailsPerPage;
        return lastPageStartIndex;
      }
      return prevIndex;
    });
  };

  const openModal = (video: VideoData) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const getDisplayTitle = (video: VideoData) => {
    return videoTitles[video.id] || video.title || "Untitled";
  };

  const getThumbnail = (video: VideoData) => {
    return video.thumbnail || `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;
  }


  return {
    isModalOpen,
    selectedVideo,
    thumbnailStartIndex,
    hasNextBeenPressed,
    thumbnailsPerPage,
    handleNext,
    handlePrevious,
    openModal,
    closeModal,
    getDisplayTitle,
    getThumbnail
  };
};
