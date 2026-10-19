import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Relative base so assets resolve both at the domain root (Netlify) and under a
  // subpath (GitHub Pages). Safe because routing uses HashRouter.
  base: "./",
  plugins: [react(), tailwindcss()],
});
