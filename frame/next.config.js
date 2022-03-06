const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "frame",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./Nav": "./components/Nav.tsx",
  },
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
        remotes: {},
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
