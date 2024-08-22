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
                    'acquisition': 'acquisition@https://gitlab.octo.tools:15095/micro-frontend-article-acquisition-tous-les-octo-f67fe2f398279a/_next/static/runtime/remoteEntry.js',
                    'suivi': 'suivi@https://gitlab.octo.tools:15095/micro-frontend-article-suivi-tous-les-octos-atel-813b8855e51590/_next/static/runtime/remoteEntry.js'
                }
            })
        );
        return config;
    },
};
