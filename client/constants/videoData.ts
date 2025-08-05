import { extractVideoId } from "../utils/videoUtils";
import { VideoData } from "../hooks/useVideoGallery";

// Custom thumbnail mapping based on video content
const thumbnailMap: { [key: string]: string } = {
  "tI--w9k7P0g": "/thumbnails/samsung.jpg",
  "AlRhi6xPrHc": "/thumbnails/yatri.jpg",
  "1zX82HUC3MQ": "/thumbnails/janakpur.jpg",
  "ZmxUV8x5Bt4": "/thumbnails/skoda.jpg",
  "i09C23fcWMWN-m_Z":"/thumbnails/janakpur.jpg",
  "81D9H2Z3Vcw":"/thumbnails/foton.jpg",
  "m8BX-viWnoc":"/thumbnails/aftermovie.jpg"
};

// Commercial videos data
const commercialUrls = [
  "https://youtu.be/tI--w9k7P0g",
  "https://youtu.be/AlRhi6xPrHc",
  "https://youtu.be/uzTDHZ4qpeY",
  "https://www.youtube.com/watch?v=S7DRJNuYrhs",
  "https://youtu.be/1zX82HUC3MQ?si=i09C23fcWMWN-m_Z",
  "https://youtu.be/pjCOsZZPB3c",
  "https://youtu.be/ZmxUV8x5Bt4",
  "https://www.youtube.com/watch?v=81D9H2Z3Vcw",
  "https://www.youtube.com/watch?v=y7BtAkW5LKA",
  "https://www.youtube.com/watch?v=kexCWZSRx7Q",
  "https://www.youtube.com/watch?v=Nylgt4CtsKo",
  "https://www.youtube.com/watch?v=IUigcSW0lfo&list=PLN88_j1xLvkU6PyWd_CD7TZEFeIzJsS8T",
  "https://www.youtube.com/watch?v=D5PdEPD6O14",
  "https://youtu.be/NOqkE2YJtkY?si=DAz3MhArAbVKFZDb",
];

// After movies data
const afterMovieUrls = [
  "https://youtu.be/LXQGcVf3lr8",
  "https://youtu.be/m8BX-viWnoc?si=sktxXaAt5dHX2EJ0",
  // "https://www.youtube.com/watch?v=uE5IU9oPwJQ",
];

// Helper function to convert URLs to VideoData objects
const createVideoData = (urls: string[]): VideoData[] => {
  return urls.map(url => {
    const id = extractVideoId(url) || "";
    return {
      url,
      id,
      platform: "youtube",
      thumbnail: thumbnailMap[id] || ""
    };
  }).filter(video => video.id !== "");
};

const createAfterMovieData = (urls: string[]): VideoData[] => {
  return urls.map(url => {
    const id = extractVideoId(url) || "";
    return {
      url,
      id,
      platform: "youtube",
      thumbnail: thumbnailMap[id] || ""
    };
  }).filter(video => video.id !== "");
};

export const COMMERCIAL_VIDEOS = createVideoData(commercialUrls);
export const AFTER_MOVIE_VIDEOS = createAfterMovieData(afterMovieUrls);
