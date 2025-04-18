import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/safari-template/",
  resolve: {
    alias: {
      // Set @ as an alias for the src folder
      "@": path.resolve(__dirname, "src"),
    },
  },
});
