import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  if (mode == "watch") {
    return {
      plugins: [react(), svgr()],
      build: {
        watch: {},
      },
    };
  }
  return {
    plugins: [react(), svgr()],
  };
});
