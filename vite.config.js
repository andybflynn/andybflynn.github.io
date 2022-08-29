import { fileURLToPath, URL } from "node:url";
import copy from "rollup-plugin-copy";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    copy({
      hook: "writeBundle",
      targets: [
        {
          src: "./portfolio/**/*",
          dest: "./docs/portfolio",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        site: "./index.html",
        site404: "./404.html",
      },
    },
    outDir: "./docs",
  },
});
