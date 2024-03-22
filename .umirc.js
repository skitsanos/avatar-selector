import {defineConfig} from 'umi';

export default defineConfig({
    ignoreMomentLocale: true,

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
