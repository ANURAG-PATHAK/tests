import path from "path";
import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
    },
    access: {
        read: () => true,
        create: ({ req }) => req.user.email === "pathakanurag605@gmail.com",
        update: ({ req }) => req.user.email === "pathakanurag605@gmail.com",
        delete: ({ req }) => req.user.email === "pathakanurag605@gmail.com",
    },
    upload: {
        staticURL: path.resolve(process.cwd(), "media"),
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
