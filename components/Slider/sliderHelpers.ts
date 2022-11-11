export const numberOfSlides = (maxVisibleSlides: number, windowWidth: number) => {
  if (windowWidth > 1800) return 3;
  if (windowWidth > 1500) return maxVisibleSlides;
  if (windowWidth > 1100) return 3;
  if (windowWidth > 825) return 3;
  if (windowWidth > 600) return 3;
  if (windowWidth > 450) return 3;
  return 3;
};
