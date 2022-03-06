const { withFederatedSidecar } = require("@module-federation/nextjs-mf");
const path = require("path");

module.exports = withFederatedSidecar({
  name: "home",
  filename: "static/chunks/remoteEntry.js",
  remotes: {
    frame: "frame@http://localhost:3000/_next/static/chunks/remoteEntry.js",
  },
  exposes: {},
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  webpack5: true,
  webpack(config, options) {
    // const { webpack } = options;
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;

    config.experiments = { topLevelAwait: true };

    config.module.rules.push({
      test: /_app.js/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        remotes: {
          // frame: isServer
          //   ? path.resolve(
          //       __dirname,
          //       "../frame/.next/server/static/runtime/remoteEntry.js"
          //     )
          //   : "frame", // for client, treat it as a global
          frame:
            "frame@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
        shared: {
          "styled-jsx": {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
        },
      })
    );

    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  },
});
