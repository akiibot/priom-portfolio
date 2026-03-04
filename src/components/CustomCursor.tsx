"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Use motion values for better performance than React state for raw coordinates
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring configuration for the trailing follower dot
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        setHasWindow(true);
    }, []);

    useEffect(() => {
        // Only run client-side and if window is available
        if (!hasWindow) {
            return;
        }

        // Check if the device has a fine pointer (mouse/trackpad), do not render on touch devices
        if (!window.matchMedia("(pointer: fine)").matches) {
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Track when hovering over clickable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Get the closest interactive element if the target itself isn't interactive but is inside one
            const interactiveEl = target.closest('a, button, input, textarea, select, [role="button"], [class*="cursor-pointer"]');
            if (interactiveEl) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, hasWindow]); // Add hasWindow to dependencies

    // If on a mobile/touch device or SSR, don't render anything
    if (!hasWindow || !window.matchMedia("(pointer: fine)").matches) {
        return null;
    }

    // Define the varied states for the main trailing circle
    const variants = {
        default: {
            width: 32,
            height: 32,
            x: "-50%",
            y: "-50%",
            backgroundColor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            mixBlendMode: "difference" as const,
        },
        hover: {
            width: 64,
            height: 64,
            x: "-50%",
            y: "-50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0)",
            mixBlendMode: "difference" as const,
        },
        click: {
            width: 24,
            height: 24,
            x: "-50%",
            y: "-50%",
            backgroundColor: "transparent",
            border: "2px solid rgba(255, 255, 255, 0.8)",
            mixBlendMode: "difference" as const,
        }
    };

    return (
        <>
            {/* 
        This is the inner sharp dot that exactly tracks the mouse instantly. 
      */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    scale: isHovering ? 0 : isClicking ? 0.5 : 1,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{ duration: 0.15 }}
            />

            {/* 
        This is the outer trailing ring that springs to the mouse and morphs
      */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                variants={variants}
                animate={isClicking ? "click" : isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
            />
        </>
    );
}
