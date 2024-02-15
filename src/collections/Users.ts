import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    admin: {
        useAsTitle: "email",
    },
    access: {
        read: () => true,
        create: () => true,
        update: ({ req }: { req: any }) => req.user.role === "admin",
        delete: ({ req }: { req: any }) => req.user.role === "admin",
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
