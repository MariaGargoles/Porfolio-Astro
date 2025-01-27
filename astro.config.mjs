// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    server: {
      hmr: {
        host: "localhost",
        protocol: "ws",
        port: 3000,
      },
    },
  },
});
