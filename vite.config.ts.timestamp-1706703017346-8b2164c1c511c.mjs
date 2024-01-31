// vite.config.ts
import path from "path";
import react from "file:///C:/Users/cho/Documents/GitHub/deskai-tauri/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.11/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/cho/Documents/GitHub/deskai-tauri/node_modules/.pnpm/vite@5.0.11_@types+node@20.11.5/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\cho\\Documents\\GitHub\\deskai-tauri";
var vite_config_default = defineConfig({
  // shadcn
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true
  },
  // to access the Tauri environment variables set by the CLI with information about the current target
  envPrefix: [
    "VITE_",
    "TAURI_PLATFORM",
    "TAURI_ARCH",
    "TAURI_FAMILY",
    "TAURI_PLATFORM_VERSION",
    "TAURI_PLATFORM_TYPE",
    "TAURI_DEBUG"
  ],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjaG9cXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxkZXNrYWktdGF1cmlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGNob1xcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXGRlc2thaS10YXVyaVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvY2hvL0RvY3VtZW50cy9HaXRIdWIvZGVza2FpLXRhdXJpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBzaGFkY25cclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gcHJldmVudCB2aXRlIGZyb20gb2JzY3VyaW5nIHJ1c3QgZXJyb3JzXHJcbiAgY2xlYXJTY3JlZW46IGZhbHNlLFxyXG4gIC8vIFRhdXJpIGV4cGVjdHMgYSBmaXhlZCBwb3J0LCBmYWlsIGlmIHRoYXQgcG9ydCBpcyBub3QgYXZhaWxhYmxlXHJcbiAgc2VydmVyOiB7XHJcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxyXG4gIH0sXHJcbiAgLy8gdG8gYWNjZXNzIHRoZSBUYXVyaSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBDTEkgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB0YXJnZXRcclxuICBlbnZQcmVmaXg6IFtcclxuICAgICdWSVRFXycsXHJcbiAgICAnVEFVUklfUExBVEZPUk0nLFxyXG4gICAgJ1RBVVJJX0FSQ0gnLFxyXG4gICAgJ1RBVVJJX0ZBTUlMWScsXHJcbiAgICAnVEFVUklfUExBVEZPUk1fVkVSU0lPTicsXHJcbiAgICAnVEFVUklfUExBVEZPUk1fVFlQRScsXHJcbiAgICAnVEFVUklfREVCVUcnLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIC8vIFRhdXJpIHVzZXMgQ2hyb21pdW0gb24gV2luZG93cyBhbmQgV2ViS2l0IG9uIG1hY09TIGFuZCBMaW51eFxyXG4gICAgdGFyZ2V0OiBwcm9jZXNzLmVudi5UQVVSSV9QTEFURk9STSA9PSAnd2luZG93cycgPyAnY2hyb21lMTA1JyA6ICdzYWZhcmkxMycsXHJcbiAgICAvLyBkb24ndCBtaW5pZnkgZm9yIGRlYnVnIGJ1aWxkc1xyXG4gICAgbWluaWZ5OiAhcHJvY2Vzcy5lbnYuVEFVUklfREVCVUcgPyAnZXNidWlsZCcgOiBmYWxzZSxcclxuICAgIC8vIHByb2R1Y2Ugc291cmNlbWFwcyBmb3IgZGVidWcgYnVpbGRzXHJcbiAgICBzb3VyY2VtYXA6ICEhcHJvY2Vzcy5lbnYuVEFVUklfREVCVUcsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsT0FBTyxVQUFVO0FBQzdVLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUY3QixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRTFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLGFBQWE7QUFBQTtBQUFBLEVBRWIsUUFBUTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQTtBQUFBLEVBRUEsV0FBVztBQUFBLElBQ1Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVEsUUFBUSxJQUFJLGtCQUFrQixZQUFZLGNBQWM7QUFBQTtBQUFBLElBRWhFLFFBQVEsQ0FBQyxRQUFRLElBQUksY0FBYyxZQUFZO0FBQUE7QUFBQSxJQUUvQyxXQUFXLENBQUMsQ0FBQyxRQUFRLElBQUk7QUFBQSxFQUMzQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
