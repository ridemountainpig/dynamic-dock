// Dock.stories.tsx
import React from "react";
import DynamicDock from "./dynamic-dock";

export default {
    title: "DynamicDock",
    component: DynamicDock,
};

export const dockOne = () => (
    <DynamicDock gapX={10} imageWidth={100}>
        <img
            src="https://www.screen.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffinder.bc1310c0.png&w=256&q=75"
            alt="Placeholder"
        />
        <img
            src="https://www.screen.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsafari.18b0c621.png&w=256&q=75"
            alt="Placeholder"
        />
        <img
            src="https://www.screen.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreenstudio.2a8d1494.png&w=256&q=75"
            alt="Placeholder"
        />
        <img
            src="https://www.screen.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmessages.cea183eb.png&w=256&q=75"
            alt="Placeholder"
        />
        <img
            src="https://www.screen.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmail.0d498199.png&w=256&q=75"
            alt="Placeholder"
        />
    </DynamicDock>
);

export const dockTwo = () => (
    <DynamicDock gapX={10} imageWidth={80}>
        <img src="https://svgl.app/library/github.svg" alt="Placeholder" />
        <img src="https://svgl.app/library/typescript.svg" alt="Placeholder" />
        <img src="https://svgl.app/library/react.svg" alt="Placeholder" />
        <img src="https://svgl.app/library/npm.svg" alt="Placeholder" />
        <img src="https://svgl.app/library/vitejs.svg" alt="Placeholder" />
    </DynamicDock>
);

export const dockThree = () => (
    <DynamicDock gapX={10} imageWidth={40} direction="column">
        <img
            src="https://cdn-icons-png.flaticon.com/128/831/831276.png"
            alt="Placeholder"
        />
        <img
            src="https://cdn-icons-png.flaticon.com/128/831/831299.png"
            alt="Placeholder"
        />
        <img
            src="https://cdn-icons-png.flaticon.com/128/831/831313.png"
            alt="Placeholder"
        />
        <img
            src="https://cdn-icons-png.flaticon.com/128/831/831274.png"
            alt="Placeholder"
        />
        <img
            src="https://cdn-icons-png.flaticon.com/128/831/831266.png"
            alt="Placeholder"
        />
    </DynamicDock>
);
