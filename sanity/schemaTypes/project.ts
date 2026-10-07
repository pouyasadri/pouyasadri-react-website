import { defineField, defineType } from "sanity";

const localizedString = [
  defineField({ name: "fr", type: "string", title: "Français", validation: (r) => r.required() }),
  defineField({ name: "en", type: "string", title: "English", validation: (r) => r.required() }),
];

const localizedText = [
  defineField({ name: "fr", type: "text", title: "Français" }),
  defineField({ name: "en", type: "text", title: "English" }),
];

export const project = defineType({
  name: "project",
  title: "Project / Case study",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "string",
      title: "Slug",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      type: "object",
      title: "Title",
      fields: localizedString,
    }),
    defineField({
      name: "summary",
      type: "object",
      title: "Summary",
      fields: localizedText,
    }),
    defineField({ name: "githubUrl", type: "url", title: "GitHub URL" }),
    defineField({ name: "homepage", type: "url", title: "Homepage" }),
    defineField({ name: "language", type: "string", title: "Primary language" }),
    defineField({
      name: "topics",
      type: "array",
      title: "Topics",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "source",
      type: "string",
      title: "Source",
      initialValue: "github-pin",
      readOnly: true,
    }),
    defineField({
      name: "pinOrder",
      type: "number",
      title: "Pin order",
      description: "Order from GitHub profile pins (0-based)",
    }),
    defineField({ name: "problem", type: "object", title: "Problem", fields: localizedText }),
    defineField({ name: "approach", type: "object", title: "Approach", fields: localizedText }),
    defineField({ name: "outcome", type: "object", title: "Outcome", fields: localizedText }),
  ],
  orderings: [
    {
      title: "Pin order",
      name: "pinOrderAsc",
      by: [{ field: "pinOrder", direction: "asc" }],
    },
  ],
});
