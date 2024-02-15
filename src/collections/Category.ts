import { Collection, CollectionConfig } from "payload/types";

export const Category: CollectionConfig = {
    slug: "category",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => user && user.role === "admin",
        update: ({ req: { user } }) => user && user.role === "admin",
        delete: ({ req: { user } }) => user && user.role === "admin",
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
