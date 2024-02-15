import { Collection, CollectionConfig } from "payload/types";

export const Category: CollectionConfig = {
    slug: "category",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
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
