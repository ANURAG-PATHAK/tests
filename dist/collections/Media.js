"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var path_1 = __importDefault(require("path"));
exports.Media = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
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
    upload: {
        staticURL: path_1.default.resolve(process.cwd(), "media"),
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
