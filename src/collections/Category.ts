import { Collection, CollectionConfig } from "payload/types";

export const Category: CollectionConfig = {
    slug: "category",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: () => true,
        create: ({ req }) => req.user.email === "pathakanurag605@gmail.com",
        update: ({ req }) => req.user.email === "pathakanurag605@gmail.com",
        delete: ({ req }) => req.user.email === "pathakanurag605@gmail.com",
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            label: "Slug",
            type: "text",
            required: true,
        },
        {
            name: "description",
            label: "Description",
            type: "textarea",
        },
    ],
} as CollectionConfig;
