import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.app.json", insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ui-kit"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
})
