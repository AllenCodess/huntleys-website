import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "frontend/public",
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
    watch: {
      usePolling: true,
    },
  },
});
