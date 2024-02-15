import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
    },
    access: {
        read: () => true,
        create: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
        delete: ({ req }) => req.user.role === "admin",
    },
    upload: {
        staticURL: "/media",
        staticDir: "media",
        mimeTypes: ["image/*"],
    },
    fields: [
        {
            name: "alt",
            type: "text",
        },
    ],
};
