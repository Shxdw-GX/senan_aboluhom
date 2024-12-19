//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
 // transpileDependencies: true
//})

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    client: {
      webSocketURL: 'wss://0.0.0.0:8080', // Force WebSocket to use WSS
    },
    allowedHosts: "all", // Optional: Allow all hosts (helps in dev environments like Codespaces)
  },
});

