import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";
const base = '/';
const origin = process.env.ORIGIN ?? 'http://localhost:4200';

export default extendConfig(baseConfig, () => {
  return {
    build: {      
      minify: false,
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdapter({
        base: `${base}/build/`,
        origin,
        debug: true
      }),
    ],
  };
});