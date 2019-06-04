const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const env = process.env.NODE_ENV

module.exports = {
    configureWebpack: config => {
        if (env === 'production') {
            config.plugins.push(
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    routes: ['/', '/about', '/contact'],
                })
            )
        } else {
            // 为开发环境修改配置...
        }
    },
}