import { defineConfig } from 'umi';
import { routes } from './routes';
// import { resolve } from "path";

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  antd: {},
  mfsu: {},
  /*   alias: {
      //菜单配置项
      "@menuConfig": resolve(__dirname, "./menu.config.ts")
    },
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    } */
});

