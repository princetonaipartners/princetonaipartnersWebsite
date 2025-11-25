"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
    children?: React.ReactNode;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

function MagnetizeButton({
    className,
    particleCount = 14,
    attractRadius = 60,
    children,
    ...props
}: MagnetizeButtonProps) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 300 - 150,
            y: Math.random() * 200 - 100,
        }));
        setParticles(newParticles);
    }, [particleCount]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        await particlesControl.start((i) => ({
            x: particles[i]?.x ?? 0,
            y: particles[i]?.y ?? 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    return (
        <Button
            className={cn(
                "min-w-48 h-14 relative touch-none text-lg font-semibold",
                "bg-gradient-to-r from-blue-500 to-sky-500",
                "hover:from-blue-400 hover:to-sky-400",
                "text-white",
                "border border-blue-400/50",
                "shadow-[0_0_30px_rgba(59,130,246,0.4)]",
                "hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]",
                "hover:scale-105",
                "transition-all duration-300",
                "rounded-xl",
                className
            )}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            {...props}
        >
            {particles.map((particle, index) => (
                <motion.div
                    key={particle.id}
                    custom={index}
                    initial={{ x: particle.x, y: particle.y }}
                    animate={particlesControl}
                    className={cn(
                        "absolute w-2 h-2 rounded-full",
                        "bg-sky-300",
                        "transition-opacity duration-300",
                        "shadow-[0_0_6px_rgba(125,211,252,0.8)]",
                        isAttracting ? "opacity-100" : "opacity-50"
                    )}
                />
            ))}
            <span className="relative w-full flex items-center justify-center gap-2 z-10">
                {children}
            </span>
        </Button>
    );
}

export { MagnetizeButton }
