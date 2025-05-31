const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://YOUR-ODOO-SITE.odoo.com',
    changeOrigin: true,
    headers: {
        host: 'YOUR-ODOO-SITE.odoo.com'
    }
}));

app.listen(10000, () => {
    console.log('Proxy running on port 10000');
});
