import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
// import { resolve } from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      watch: {
        // https://rollupjs.org/configuration-options/#watch
      },
      // input: {
      //   main: resolve(__dirname, "index.html"),
      // },
    },
  },
  define: {
    "process.env": {},
  },
});
