import * as nodePath from 'path';

const rootDirectory = nodePath.basename(nodePath.resolve());
const clientDirectory = './client';
const outputDirectory = './pub';

export const path = {
    source: {
        htmlFiles: `./${clientDirectory}/pages/*/*.html`,
        styles: `./${clientDirectory}/pages/*/style.scss`
    },

    build: {
        htmlFiles: `./${outputDirectory}/pages/`,
        styles: `./${outputDirectory}/pages/`
    },

    watch: {
        htmlFiles: `./${clientDirectory}/**/*.html`,
        styles: `./${clientDirectory}/**/*.scss`
    },

    clear: outputDirectory
}