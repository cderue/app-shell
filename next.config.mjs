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
                    'acquisition': 'acquisition@https://micro-frontends-acquisition-kamar3-1de56c66c399e13ffe08e5adad1c.gitlab.io/_next/static/runtime/remoteEntry.js',
                    'suivi': 'suivi@https://micro-frontends-suivi-kamar3-24dfba73c19a6677503e30b0cc2692e5d3.gitlab.io/_next/static/runtime/remoteEntry.js'
                }
            })
        );
        return config;
    },
};
