#Dynamic Dock

## Introduction

Dynamic Dock is an innovative React component that transforms your images to mimic the iconic macOS dock style. By integrating this component into your web application, you can elevate the user interface with a visually appealing and intuitive dock-like experience, reminiscent of the macOS operating system. This enhancement not only improves aesthetic appeal but also enhances user interaction by providing a familiar and efficient way to navigate through images and content.

## Example

https://github.com/ridemountainpig/ridemountainpig/assets/92412722/352ca5b0-7232-467c-9720-f1a071d4ed05

## Installation

To get started with dynamic-dock, you need to install it into your project using npm:

```bash
npm i dynamic-dock
```

## Usage

To use the Dynamic Dock component, you need to import it into your React application and use it as a wrapper for the images you want to display in the dock. The following example demonstrates how to use the Dynamic Dock component in a React application:

```tsx
"use client";

import React from "react";
import Image from "next/image";
import DynamicDock from "dynamic-dock";

function Dock() {
    return (
        <DynamicDock gapX={10} imageWidth={100}>
            <Image
                src="https://svgl.app/library/github.svg"
                alt="Github Image"
                width={100}
                height={100}
            />
            <Image
                src="https://svgl.app/library/typescript.svg"
                alt="TypeScript Image"
                width={100}
                height={100}
            />
            <Image
                src="https://svgl.app/library/react.svg"
                alt="React Image"
                width={100}
                height={100}
            />
            <Image
                src="https://svgl.app/library/npm.svg"
                alt="NPM Image"
                width={100}
                height={100}
            />
            <Image
                src="https://svgl.app/library/vitejs.svg"
                alt="ViteJs Image"
                width={100}
                height={100}
            />
        </DynamicDock>
    );
}

export default Dock;
```

## Props

| Name               | Description                       | Type                                                      | Unit |
| ------------------ | --------------------------------- | --------------------------------------------------------- | ---- |
| **gapX**           | Horizontal spacing between images | `Number`                                                  | px   |
| **imageWidth**     | Width of each image               | `Number`                                                  | px   |
| **direction**      | Direction of images               | `row`, `column`                                           | none |
| **justifyContent** | Justify content of images         | `center`, `start`, `end`, `space-between`, `space-around` | none |
| **alignItems**     | Align items of images             | `center`, `start`, `end`, `stretch`                       | none |
