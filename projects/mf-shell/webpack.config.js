const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    //"mfShopping": "http://localhost:4201/remoteEntry.js", TODO: Se inyecta de manera dinámica en app-routing.module.ts
    "mfPayment": "http://localhost:4202/remoteEntry.js" //TODO: Forma tradicional de inyectar mf
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  sharedMappings: ["@commons-lib"]

});
