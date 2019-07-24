module.exports = {
    processors: ['stylelint-processor-styled-components'],
    plugins: ['stylelint-scss'],
    extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
    rules: {
        indentation: 4
    }
}
