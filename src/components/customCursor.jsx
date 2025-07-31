import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const location = useLocation();
  const activeHoverEl = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Deteksi mobile
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    // Jika mobile, sembunyikan kursor custom setelah tap/click
    function handleMobileHide() {
      if (isMobile && cursor) {
        cursor.style.display = "none";
      }
    }

    // Jika mobile, sembunyikan kursor dari awal
    if (isMobile && cursor) {
      cursor.style.display = "none";
    }

    function moveCursor(e) {
      if (isMobile) return;
      if (activeHoverEl.current) {
        const rect = activeHoverEl.current.getBoundingClientRect();
        const x = Math.max(rect.left, Math.min(e.clientX, rect.right));
        const y = Math.max(rect.top, Math.min(e.clientY, rect.bottom));
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      } else {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    }

    function handleEnter(e) {
      if (isMobile) return;
      const target = e.target;
      activeHoverEl.current = target;
      const rect = target.getBoundingClientRect();
      cursor.style.width = rect.width + "px";
      cursor.style.height = rect.height + "px";
      cursor.style.borderRadius = window.getComputedStyle(target).borderRadius;
      cursor.style.transform = `translate(-50%, -50%) scale(1.1)`;
      cursor.style.background = "rgba(255,255,255,0.1)";
    }

    function handleLeave() {
      if (isMobile) return;
      activeHoverEl.current = null;
      cursor.style.width = "15px";
      cursor.style.height = "15px";
      cursor.style.borderRadius = "50%";
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      cursor.style.background = "rgba(255,255,255,0.2)";
    }

    document.addEventListener("mousemove", moveCursor);

    // Sembunyikan kursor custom setelah tap/click di mobile
    document.addEventListener("touchstart", handleMobileHide);
    document.addEventListener("click", handleMobileHide);

    const hoverables = document.querySelectorAll("button, a, .pc-card, .pc-contact-btn, .select");
    hoverables.forEach(el => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("touchstart", handleMobileHide);
      document.removeEventListener("click", handleMobileHide);
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [location]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 15,
        height: 15,
        borderRadius: "50%",
        pointerEvents: "none",
        background: "rgba(255,255,255,0.2)",
        border: "1.5px solid #fff",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition:
          "width 0.25s cubic-bezier(.4,2,.6,1), height 0.25s cubic-bezier(.4,2,.6,1), border-radius 0.25s cubic-bezier(.4,2,.6,1), background 0.18s, transform 0.25s cubic-bezier(.4,2,.6,1)",
        mixBlendMode: "difference",
        boxShadow: "0 0 12px 2px rgba(255,255,255,0.25), 0 0 0 2px rgba(255,255,255,0.08)",
        pointerEvents: "none",
      }}
    />
  );
}