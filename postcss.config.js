module.exports = ({ options, env }) => ({
    plugins: {
        'postcss-preset-env': options['postcss-preset-env']
            ? options['postcss-preset-env']
            : false,
        cssnano: env === 'production' ? options.cssnano : false
    }
})
