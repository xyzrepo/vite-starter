import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Layouts from 'vite-plugin-vue-layouts';
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["src/components",/*'src/layouts'*/]
    }),
    Pages({
      nuxtStyle: true,
      dirs: ["src/pages"]
    }),
    Layouts({
      layoutsDir: 'src/layouts',
      defaultLayout: 'default'
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "src")
    },
  },
  server: {
    open: true,
  },
  // build: {
  //   outDir: 'dist' //default
  // }
});
