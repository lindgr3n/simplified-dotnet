import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Simplified .NET",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "Introduction", link: "/getting-started/introduction" },
            {
              label: "Getting started",
              link: "/getting-started/overview",
            },
          ],
        },
        {
          label: "Core Concepts",
          autogenerate: { directory: "core-concepts" },
        },
        {
          label: "Building Web Apps",
          autogenerate: { directory: "building-web-apps" },
        },
        {
          label: "Building APIs",
          autogenerate: { directory: "building-apis" },
        },
        {
          label: "Entity Framework Core",
          autogenerate: { directory: "entity-framework-core" },
        },
        {
          label: "Blazor",
          autogenerate: { directory: "blazor" },
        },
        {
          label: "Advanced Topics",
          autogenerate: { directory: "advanved-topics" },
        },
        {
          label: "Docker",
          autogenerate: { directory: "docker" },
        },
        {
          label: "Contribute",
          link: "contribute",
        },
      ],
    }),
  ],
});
