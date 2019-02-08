const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/p/:id', (req, res) => app.render(req, res, '/post', { id: req.params.id }));

    server.get('*', (req, res) => handle(req, res));

    server.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  });
