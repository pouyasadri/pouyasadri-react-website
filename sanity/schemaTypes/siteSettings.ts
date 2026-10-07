import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      initialValue: "info@pouyasadri.com",
    }),
    defineField({
      name: "phoneDisplay",
      type: "string",
      title: "Phone (display)",
      description: "Canonical local form: 0768411196 → display as +33 7 68 41 11 96",
      initialValue: "+33 7 68 41 11 96",
    }),
    defineField({
      name: "phoneE164",
      type: "string",
      title: "Phone (E.164)",
      initialValue: "+33768411196",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "whatsappUrl",
      type: "url",
      title: "WhatsApp URL",
      initialValue: "https://wa.me/33768411196",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
      initialValue: "Strasbourg, France",
    }),
    defineField({
      name: "socials",
      type: "object",
      title: "Social links",
      fields: [
        defineField({ name: "github", type: "url", title: "GitHub" }),
        defineField({ name: "linkedin", type: "url", title: "LinkedIn" }),
      ],
    }),
  ],
});
