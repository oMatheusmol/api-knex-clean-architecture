module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 2,
    bracketSpacing: true,
    arrowParens: 'avoid',
    endOfLine: 'auto',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 4,
            },
        },
    ],
    // https://prettier.io/docs/en/options.html#file-extension-configuration
};
