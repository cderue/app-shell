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
                    'acquisition': 'acquisition@https://raw.githubusercontent.com/cderue/acquisition/main/_next/static/runtime/remoteEntry.js',
                    'suivi': 'suivi@https://raw.githubusercontent.com/cderue/suivi/main/_next/static/runtime/remoteEntry.js'
                }
            })
        );
        return config;
    },
};
