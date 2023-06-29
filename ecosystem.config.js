module.exports = {
    apps : [
        {
            name   : "blog-client",
            script : "npm run start",
            env_production: {
                NODE_ENV: "production",
                PORT: 3049
            }
        }
    ]
}