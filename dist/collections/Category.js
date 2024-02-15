"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
exports.Category = {
    slug: "category",
    admin: {
        useAsTitle: "name",
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
};
