// Consistent spacing constants for the application
export const SPACING = {
  // Section spacing
  SECTION_PADDING_Y: "py-20",
  SECTION_PADDING_Y_SMALL: "py-12", 
  SECTION_PADDING_Y_MEDIUM: "py-16",
  SECTION_PADDING_Y_LARGE: "py-24",
  SECTION_PADDING_Y_XL: "py-32",
  
  // Container spacing
  CONTAINER_MAX_WIDTH: "max-w-7xl",
  CONTAINER_MAX_WIDTH_WIDE: "max-w-8xl",
  CONTAINER_PADDING_X: "px-8",
  CONTAINER_PADDING_X_SMALL: "px-4",
  CONTAINER_PADDING_X_RESPONSIVE: "px-4 sm:px-8",
  
  // Element spacing
  ELEMENT_MARGIN_BOTTOM: "mb-8",
  ELEMENT_MARGIN_BOTTOM_SMALL: "mb-4",
  ELEMENT_MARGIN_BOTTOM_MEDIUM: "mb-6",
  ELEMENT_MARGIN_BOTTOM_LARGE: "mb-12",
  ELEMENT_MARGIN_BOTTOM_XL: "mb-16",
  ELEMENT_MARGIN_BOTTOM_2XL: "mb-20",
  
  // Padding utilities
  ELEMENT_PADDING_BOTTOM: "pb-8",
  ELEMENT_PADDING_BOTTOM_SMALL: "pb-4",
  ELEMENT_PADDING_BOTTOM_MEDIUM: "pb-6",
  ELEMENT_PADDING_BOTTOM_LARGE: "pb-12",
  ELEMENT_PADDING_TOP: "pt-8",
  ELEMENT_PADDING_TOP_SMALL: "pt-4",
  ELEMENT_PADDING_TOP_MEDIUM: "pt-6",
  ELEMENT_PADDING_TOP_LARGE: "pt-12",
  
  // Grid gaps
  GRID_GAP: "gap-8",
  GRID_GAP_SMALL: "gap-4",
  GRID_GAP_MEDIUM: "gap-6",
  GRID_GAP_LARGE: "gap-12",
  GRID_GAP_XL: "gap-16",
  
  // Responsive grid gaps
  GRID_GAP_RESPONSIVE: "gap-4 md:gap-8 lg:gap-12",
  GRID_GAP_RESPONSIVE_LARGE: "gap-8 lg:gap-16",
  
  // Space between elements
  SPACE_Y_SMALL: "space-y-4",
  SPACE_Y: "space-y-8",
  SPACE_Y_LARGE: "space-y-12",
  SPACE_Y_XL: "space-y-16",
  
  // Animation delays
  STAGGER_DELAY: 0.2,
  BASE_DELAY: 0.4,
} as const;

// Typography constants
export const TYPOGRAPHY = {
  // Font families
  HEADING_FONT: "Staatliches",
  BODY_FONT: '"Helvetica Neue", Arial, sans-serif',
  
  // Font sizes (using clamp for responsive sizing)
  HEADING_XL: "clamp(58px, 8vw, 96px)",
  HEADING_LARGE: "clamp(58px, 8vw, 76px)",
  HEADING_MEDIUM: "clamp(58px, 12vw, 76px)",
  BODY_LARGE: "clamp(21px, 1.2vw, 34px)",
  BODY_MEDIUM: "clamp(21px, 1.2vw, 30px)",
  
  // Common text styles
  HEADING_CLASSES: "text-4xl lg:text-6xl text-center",
  SECTION_HEADING_STYLE: {
    fontFamily: "Staatliches",
    fontSize: "clamp(58px, 8vw, 76px)",
  },
} as const;
