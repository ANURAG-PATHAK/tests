"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
    },
    access: {
        read: function () { return true; },
        create: function (_a) {
            var user = _a.req.user;
            return user && user.role === "admin";
        },
        update: function (_a) {
            var user = _a.req.user;
            return user && user.role === "admin";
        },
        delete: function (_a) {
            var user = _a.req.user;
            return user && user.role === "admin";
        },
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
