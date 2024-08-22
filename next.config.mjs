import { NextFederationPlugin } from '@module-federation/nextjs-mf';

export default {
    output: 'export',
    webpack: (config, options) => {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'app-shell',
                filename: 'static/runtime/remoteEntry.js',
                exposes: {},
                remotes: {
                    'acquisition': 'acquisition@http://localhost:3001/_next/static/runtime/remoteEntry.js',
                    'suivi': 'suivi@http://localhost:3002/_next/static/runtime/remoteEntry.js'
                }
            })
        );
        return config;
    },
};
