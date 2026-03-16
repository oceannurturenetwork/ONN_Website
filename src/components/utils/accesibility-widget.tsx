"use client";
import { useState, useEffect, useRef } from "react";
import { Accessibility } from "lucide-react";
import gsap from "gsap";
import useMounted from "@/hooks/useMounted";

const AccessibilityToolbar = () => {
    const mounted = useMounted();
    const [isOpen, setIsOpen] = useState(false);
    const toolbarRef = useRef<HTMLDivElement>(null);
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [isGrayscale, setIsGrayscale] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [isReading, setIsReading] = useState(false);
    const synth = typeof window !== "undefined" ? window.speechSynthesis : null;

    useEffect(() => {
        if (!mounted) return;
        if (isOpen && toolbarRef.current) {
            gsap.fromTo(toolbarRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
        } else if (!isOpen && toolbarRef.current) {
            gsap.to(toolbarRef.current, { x: 100, opacity: 0, duration: 0.5, ease: "power2.in" });
        }
    }, [mounted, isOpen]);

    const toggleHighContrast = () => {
        setIsHighContrast((prev) => !prev);
        document.body.classList.toggle("high-contrast");
      };
    
      // Toggle Grayscale Mode
      const toggleGrayscale = () => {
        setIsGrayscale((prev) => !prev);
        document.documentElement.classList.toggle("grayscale");
      };
    
      // Adjust Font Size using Tailwind Classes
      useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
      }, [fontSize]);
    
      const increaseFontSize = () => setFontSize((prev) => prev + 2);
      const decreaseFontSize = () => setFontSize((prev) => (prev > 12 ? prev - 2 : prev));

    // Read Aloud (Text-to-Speech)
    const readAloud = () => {
        if (synth) {
            if (isReading) {
                synth.cancel();
                setIsReading(false);
            } else {
                const text = document.body.innerText;
                const utterance = new SpeechSynthesisUtterance(text);
                synth.speak(utterance);
                setIsReading(true);
                utterance.onend = () => setIsReading(false);
            }
        }
    };

    return (
        <div className="accessibility-container" style={{ fontSize: "16px" }}>
            <button className="accessibility-icon" onClick={() => setIsOpen(!isOpen)}>
                <Accessibility size={24} />
            </button>
            {isOpen && (
                <div className="accessibility-toolbar" ref={toolbarRef}>
                    <button onClick={toggleHighContrast}>{isHighContrast ? "Disable" : "Enable"} High Contrast</button>
                    <button onClick={toggleGrayscale}>{isGrayscale ? "Disable" : "Enable"} Grayscale</button>
                    <button onClick={increaseFontSize}>Increase Font</button>
                    <button onClick={decreaseFontSize}>Decrease Font</button>
                    <button onClick={readAloud}>{isReading ? "Stop Reading" : "Read Aloud"}</button>
                </div>
            )}
           
        </div>
    );
};

export default AccessibilityToolbar;