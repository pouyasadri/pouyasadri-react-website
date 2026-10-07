import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

/**
 * Sanity Studio config (schema stubs).
 * Provision a project at https://www.sanity.io/manage then set env vars from .env.example.
 * Run Studio separately once wired (e.g. `npx sanity dev`) — not required for the Next app seed path.
 */
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "pouyasadri",
  title: "Pouya Sadri",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
