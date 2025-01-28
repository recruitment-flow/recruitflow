module.exports = {
    apps: [
      {
        name: "RecruitFlow-2024",          // Name of the application
        script: "./server.js",      // Path to the entry point of your application
        instances: 1,            // Number of instances to run (or "max" for all CPUs)
        autorestart: true,       // Auto-restart if the application crashes
        watch: true,            // Watch for changes in files and restart the app
        max_memory_restart: "1G",// Restart if memory usage exceeds 1GB
        env: {                   // Environment variables for development
          NODE_ENV: "development",
        },
        env_production: {        // Environment variables for production
          NODE_ENV: "production",
        }
      }
    ]
  };
  