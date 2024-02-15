"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechStack = void 0;
exports.TechStack = {
    slug: "tech-stack",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: function () { return true; },
        create: function (_a) {
            var req = _a.req;
            return req.user.role === "admin";
        },
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
};
