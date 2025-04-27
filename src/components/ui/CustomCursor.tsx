import React, { useState, useEffect } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const mMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      const isLink =
        hoveredElement?.tagName === "A" ||
        hoveredElement?.tagName === "BUTTON" ||
        hoveredElement?.closest("a") ||
        hoveredElement?.closest("button");

      setLinkHovered(!!isLink);
    };

    const mDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    document.addEventListener("mousemove", mMove);
    document.addEventListener("mousedown", mDown);
    document.addEventListener("mouseleave", mLeave);
    document.addEventListener("mouseenter", mEnter);

    return () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mouseenter", mEnter);
    };
  }, []);

  // Don't render custom cursor on mobile
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor cursor-ring ${clicked ? "scale-75" : ""} ${
          linkHovered ? "scale-150" : ""
        } ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor cursor-dot ${clicked ? "opacity-0" : ""} ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};
