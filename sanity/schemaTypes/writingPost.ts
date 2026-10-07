import { defineField, defineType } from "sanity";

const localizedString = [
  defineField({ name: "fr", type: "string", title: "Français", validation: (r) => r.required() }),
  defineField({ name: "en", type: "string", title: "English", validation: (r) => r.required() }),
];

const localizedText = [
  defineField({ name: "fr", type: "text", title: "Français" }),
  defineField({ name: "en", type: "text", title: "English" }),
];

export const writingPost = defineType({
  name: "writingPost",
  title: "Writing post",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title.en" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", type: "object", title: "Title", fields: localizedString }),
    defineField({ name: "excerpt", type: "object", title: "Excerpt", fields: localizedText }),
    defineField({ name: "publishedAt", type: "datetime", title: "Published at" }),
    defineField({
      name: "body",
      type: "object",
      title: "Body (plain / markdown stub)",
      description: "Upgrade to Portable Text when editorial workflow needs it",
      fields: localizedText,
    }),
  ],
});
