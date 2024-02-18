import React, { useEffect, useRef } from "react";

interface DynamicDockProps {
    children: React.ReactNode;
    gapX: number;
    imageWidth: number;
    direction?: "row" | "column";
    justifyContent?:
        | "center"
        | "start"
        | "end"
        | "space-between"
        | "space-around";
    alignItems?: "center" | "start" | "end" | "stretch";
}

const DynamicDock: React.FC<DynamicDockProps> = ({
    children,
    gapX,
    imageWidth,
    direction = "row",
    justifyContent = "center",
    alignItems = "center",
}) => {
    const dockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!dockRef.current) return;

        const images = dockRef.current.querySelectorAll("img");

        const setInitialScale = () => {
            images.forEach((img) => {
                img.style.width = `${imageWidth}px`;
                img.style.height = "auto";
            });
        };

        setInitialScale();

        const handleMouseMove = (e: MouseEvent) => {
            images.forEach((img) => {
                const imgRect = img.getBoundingClientRect();
                const imgCenterX = imgRect.left + imgRect.width / 2;
                const imgCenterY = imgRect.top + imgRect.height / 2;
                const distance = Math.sqrt(
                    Math.pow(e.clientX - imgCenterX, 2) +
                        Math.pow(e.clientY - imgCenterY, 2),
                );

                const scale = Math.max(1, Math.min(1.5, 1.5 - distance / 500));
                img.style.width = `${imageWidth * scale}px`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={dockRef}
            style={{
                display: "flex",
                flexDirection: direction,
                justifyContent: justifyContent,
                alignItems: alignItems,
                height: "100%",
                width: "100%",
                gap: `${gapX}px`,
            }}
        >
            {children}
        </div>
    );
};

export default DynamicDock;
