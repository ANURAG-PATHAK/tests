import { Collection, CollectionConfig } from "payload/types";

export const TechStack: CollectionConfig = {
    slug: "tech-stack",
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
            name: "description",
            label: "Description",
            type: "textarea",
        },
    ],
} as CollectionConfig;
