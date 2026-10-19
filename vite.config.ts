import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
// GitHub Pages serves the site from /eman-portfolio/; Netlify and local dev serve from the root.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/eman-portfolio/" : "/",
  plugins: [react(), tailwindcss()],
});
