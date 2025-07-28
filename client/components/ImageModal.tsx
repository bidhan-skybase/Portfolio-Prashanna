import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export const ImageModal = ({ isOpen, onClose, src, alt }: ImageModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div onClick={onClose}>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            >
              {/* Modal Content */}
              <motion.div
                className="relative max-w-4xl max-h-[95vh] w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-0 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
                >
                  <X size={24} />
                </button>

                {/* Image */}
                <img
                  src={src}
                  alt={alt}
                  onClick={onClose}
                  className="w-full h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export const useImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

  const openModal = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentImage({ src: "", alt: "" });
    }, 300);
  };

  return {
    isOpen,
    currentImage,
    openModal,
    closeModal,
  };
};
