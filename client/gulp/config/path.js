const clientDirectory = './';
const outputDirectory = './pub/';

export const path = {
    source: {
        styles: `${clientDirectory}pages/*/*.scss`,
        fonts: `${clientDirectory}fonts/`,
        typescript: `${clientDirectory}**/*.ts`,
        images: `${clientDirectory}img/**/*`
    },

    build: {
        styles: `${outputDirectory}pages/`,
        fonts: `${outputDirectory}fonts/`,
        typescript: `${outputDirectory}`,
        images: `${outputDirectory}img/`
    },

    watch: {
        htmlFiles: `${clientDirectory}**/*.html`,
        styles: `${clientDirectory}**/*.scss`,
        typescript: `${clientDirectory}**/*.ts`,
    },

    clear: outputDirectory
}