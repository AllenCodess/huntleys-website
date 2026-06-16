import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "frontend/public",
  build: {
    outDir: "frontend/build",
  },
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
    watch: {
      usePolling: true,
    },
  },
});
