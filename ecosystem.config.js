module.exports = {
  apps: [
    {
      name: 'vidtextai',
      script: '.next/standalone/server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
      },
    },
  ],
}
