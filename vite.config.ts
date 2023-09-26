import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import pxtorem from "postcss-pxtorem";
import autoprefixer from "autoprefixer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload();
        },
      },
    ]),
    renderer(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/css/mixin.less";',
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#034078",
          "@link-color": "#034078",
        },
      },
    },
    postcss: {
      plugins: [
        autoprefixer(),
        pxtorem({
          rootValue: 192,
          propList: ["*"],
          replace: true,
          // 该项仅在使用 Circle 组件时需要
          // 原因参见 https://github.com/youzan/vant/issues/1948
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@img": fileURLToPath(new URL("./src/assets/img", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
