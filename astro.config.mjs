import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import viteStaticCopy from "vite-plugin-static-copy";

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "public/assets/*",
            dest: "assets",
          },
        ],
      }),
    ],
  },
});
