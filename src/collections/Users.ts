import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    admin: {
        useAsTitle: "email",
    },
    access: {
        read: ({ req }) => req.user.role === "admin",
        create: () => true,
        update: ({ req }) => req.user.role === "admin",
        delete: ({ req }) => req.user.role === "admin",
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            required: true,
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
        },
    ],
};
