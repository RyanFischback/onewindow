import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true,
    port: 8000, // This is the port which we will use in docker
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./src/main.tsx", // Your entry point
    },
  },
  define: {
    "process.env": {},
  },
});
