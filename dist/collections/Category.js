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
            var req = _a.req;
            return req.user.email === "pathakanurag605@gmail.com";
        },
        update: function (_a) {
            var req = _a.req;
            return req.user.email === "pathakanurag605@gmail.com";
        },
        delete: function (_a) {
            var req = _a.req;
            return req.user.email === "pathakanurag605@gmail.com";
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
