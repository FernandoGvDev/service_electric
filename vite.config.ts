import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";   // se usar React
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
