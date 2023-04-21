import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      {
        find: "@assets",
        replacement: resolve(__dirname, "src/assets"),
      },
      {
        find: "@constant",
        replacement: resolve(__dirname, "src/constant"),
      },
      {
        find: "@action",
        replacement: resolve(__dirname, "src/action"),
      },
      {
        find: "@present",
        replacement: resolve(__dirname, "src/present"),
      },
      {
        find: "@common",
        replacement: resolve(__dirname, "src/present/common"),
      },
      {
        find: "@component",
        replacement: resolve(__dirname, "src/present/component"),
      },
      {
        find: "@layout",
        replacement: resolve(__dirname, "src/present/layout"),
      },
      {
        find: "@pages",
        replacement: resolve(__dirname, "src/present/pages"),
      },
      {
        find: "@store",
        replacement: resolve(__dirname, "src/store"),
      },
      {
        find: "@public",
        replacement: resolve(__dirname, "src/public"),
      },
      {
        find: "@types",
        replacement: resolve(__dirname, "src/types"),
      },
    ],
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
});
