import { defineConfig } from "tsup";

export default defineConfig({
    minify: true,
    target: "es2018",
    entryPoints: ["src/dynamic-dock.tsx"],
    external: ["react"],
    sourcemap: true,
    dts: true,
    format: ["esm", "cjs"],
    injectStyle: true,
    esbuildOptions(options) {
        options.banner = {
            js: '"use client"',
        };
    },
});
