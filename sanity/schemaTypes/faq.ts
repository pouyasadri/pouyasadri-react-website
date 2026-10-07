import { defineField, defineType } from "sanity";

const localizedString = [
  defineField({ name: "fr", type: "string", title: "Français", validation: (r) => r.required() }),
  defineField({ name: "en", type: "string", title: "English", validation: (r) => r.required() }),
];

const localizedText = [
  defineField({ name: "fr", type: "text", title: "Français", validation: (r) => r.required() }),
  defineField({ name: "en", type: "text", title: "English", validation: (r) => r.required() }),
];

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ item",
  type: "document",
  fields: [
    defineField({ name: "question", type: "object", title: "Question", fields: localizedString }),
    defineField({ name: "answer", type: "object", title: "Answer", fields: localizedText }),
    defineField({ name: "order", type: "number", title: "Order", initialValue: 0 }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
