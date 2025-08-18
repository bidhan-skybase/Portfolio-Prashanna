'use client';

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorSize = 32;

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".hover-dice")) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".hover-dice")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    let animationFrameId: number;

    const animate = () => {
      pos.current.x += (mousePos.current.x - pos.current.x) * 0.15;
      pos.current.y += (mousePos.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        const baseX = pos.current.x - 26- cursorSize / 2;
        const baseY = pos.current.y - (-20) - cursorSize / 2;

        if (isHovering) {
          cursorRef.current.style.transform = `translate3d(${baseX}px, ${
            baseY - 10
          }px, 0) scale(1.3)`;
          cursorRef.current.style.transition = "transform 0.3s ease";
          cursorRef.current.style.backgroundColor = "#F64583"; // brighter pink when hover
        } else {
          cursorRef.current.style.transform = `translate3d(${baseX}px, ${baseY}px, 0) scale(1)`;
          cursorRef.current.style.transition = "transform 0.15s ease";
          cursorRef.current.style.backgroundColor = "#F64583"; // normal pink
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: cursorSize,
        height: cursorSize,
        borderRadius: "50%",
        backgroundColor: "#ff69b4", // pink
        pointerEvents: "none",
        zIndex: 9999,
        userSelect: "none",
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
