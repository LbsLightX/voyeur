import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

export default defineConfig({
  site: "https://lbslightx.github.io",
  base: "/voyeur/",
  integrations: [vue()]
});
