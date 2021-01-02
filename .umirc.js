import {defineConfig} from 'umi';

export default defineConfig({
    // ssr: {},
    dynamicImport: {
        loading: '@/components/Loading'
    },

    devServer: {

    },

    nodeModulesTransform: {
        type: 'none'
    },

    //devtool: false,

    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM'
    },

    scripts: process.env.NODE_ENV === 'development' ? [
        'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.development.js',
        'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.development.min.js'
    ] : [
        'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.1/umd/react.production.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js'
    ],

    theme: {
        'border-radius-base': '5px',
        'font-family': '"IBM Plex Sans", sans-serif',
        //'primary-color': '#50327c',
        'error-color': 'crimson'
    },

    title: 'Avatar Selector demo',

    metas: [],

    headScripts: [
        {src: 'https://apis.google.com/js/api.js'}
    ]
});
