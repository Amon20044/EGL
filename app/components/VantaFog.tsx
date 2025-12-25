"use client";

import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        VANTA: {
            FOG: (config: VantaFogConfig) => VantaEffect;
        };
        THREE: unknown;
    }
}

interface VantaFogConfig {
    el: HTMLElement | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
    zoom?: number;
}

interface VantaEffect {
    destroy: () => void;
}

export default function VantaFog({ children }: { children?: React.ReactNode }) {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        const loadScript = (src: string, id: string) => {
            return new Promise<void>((resolve, reject) => {
                if (document.getElementById(id)) {
                    resolve();
                    return;
                }
                const script = document.createElement("script");
                script.id = id;
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        const loadScripts = async () => {
            try {
                await loadScript(
                    "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js",
                    "three-js"
                );

                await loadScript(
                    "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js",
                    "vanta-fog-js"
                );
                setScriptsLoaded(true);
            } catch (error) {
                console.error("Error loading Vanta scripts:", error);
            }
        };

        loadScripts();
    }, []);

    useEffect(() => {
        if (scriptsLoaded && window.VANTA && vantaRef.current && !vantaEffect) {
            try {
                const effect = window.VANTA.FOG({
                    el: vantaRef.current,
                    THREE: window.THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    highlightColor: 0x720000,
                    midtoneColor: 0x0,
                    lowlightColor: 0x100000,
                    baseColor: 0x0,
                    blurFactor: 0.59,
                    speed: 5.00,
                    zoom: 0.30
                });
                setVantaEffect(effect);
            } catch (error) {
                console.error("Error initializing Vanta Fog:", error);
            }
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
                setVantaEffect(null);
            }
        };
    }, [scriptsLoaded, vantaEffect]);

    return (
        <div ref={vantaRef} className="fixed inset-0 -z-10">
            {children}
        </div>
    );
}
