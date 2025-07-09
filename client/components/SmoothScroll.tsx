import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);
};

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();
  return <>{children}</>;
}
