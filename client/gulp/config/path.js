const clientDirectory = './';
const outputDirectory = './public/';

export const path = {
    source: {
        styles: `${clientDirectory}pages/*/*.scss`,
        fonts: `${clientDirectory}fonts/`,
        typescript: `${clientDirectory}**/*.ts`
    },

    build: {
        styles: `${outputDirectory}pages/`,
        fonts: `${outputDirectory}fonts/`,
        typescript: `${outputDirectory}`  
    },

    watch: {
        htmlFiles: `${clientDirectory}**/*.html`,
        styles: `${clientDirectory}**/*.scss`,
        typescript: `${clientDirectory}**/*.ts`,
    },

    clear: outputDirectory
}