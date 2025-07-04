import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tanstackRouter from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  base: "/test/",
  plugins: [
    tanstackRouter({ autoCodeSplitting: true, target: "react" }),
    viteReact(),
  ],
});
