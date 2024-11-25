import { defineConfig } from "astro/config";

export default defineConfig({
  // ...other configurations
  build: {
    outDir: "dist",
    pages: async () => {
      const { getCollection } = await import("astro:content");
      const pages = await getCollection("pages");
      return pages.map((page) => ({
        params: { slug: page.slug },
        props: { page },
      }));
    },
  },
});
