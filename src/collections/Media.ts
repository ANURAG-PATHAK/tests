import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) =>
            user && user.email === "pathakanurag605@gmail.com",
        update: ({ req: { user } }) =>
            user && user.email === "pathakanurag605@gmail.com",
        delete: ({ req: { user } }) =>
            user && user.email === "pathakanurag605@gmail.com",
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
