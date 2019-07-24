module.exports = {
    plugins: ['stylelint-scss'],
    extends: ['stylelint-config-recommended'],
    rules: {
        indentation: 4,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin']
            }
        ]
    }
}
