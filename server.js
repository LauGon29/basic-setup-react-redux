const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        const server = express();

        server.get('/static/*', (req, res) => {
            let path = req.params['0'];
            res.sendFile(path, {root: './static'});
        });

        server.get('*', (req, res) => {
            handle(req, res);
        });

        server.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${PORT}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
