"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    admin: {
        useAsTitle: "email",
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
        update: function (_a) {
            var req = _a.req;
            return req.user.role === "admin";
        },
        delete: function (_a) {
            var req = _a.req;
            return req.user.role === "admin";
        },
    },
    fields: [
        {
            name: "role",
            type: "select",
            options: ["admin", "user"],
            required: true,
        },
    ],
};