const User = {
    slug: "users",
    fields: [
        {
            name: "email",
            type: "text",
            required: true,
        },
        {
            name: "password",
            type: "password",
            required: true,
        },
    ],
};

export default User;
