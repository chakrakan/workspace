// tools/next-watch-server/next-watch-server.ts

import { env } from 'process';
import { NextServer } from 'next/dist/server/next';
import { NextServerOptions, ProxyConfig } from '@nrwl/next';

import express from 'express';
import path from 'path';
import chokidar from 'chokidar';

export default async function nextWatchServer(
  app: NextServer,
  settings: NextServerOptions & { [prop: string]: any },
  proxyConfig: ProxyConfig
) {
  const handle = app.getRequestHandler();
  await app.prepare();

  const articlePath = env.ARTICLES_FOLDER;

  // watch folders if specified
  if (articlePath) {
    chokidar
      .watch(articlePath, {
        usePolling: false,
        ignoreInitial: true,
      })
      .on('all', async (filePathContext, eventContext = 'change') => {
        // CAUTION: accessing private APIs
        app['server']['hotReloader'].send('building');
        app['server']['hotReloader'].send('reloadPage');
      });
  }

  const server = express();
  server.disable('x-powered-by');

  // Serve shared assets copied to `public` folder
  server.use(
    express.static(path.resolve(settings.dir, settings.conf.outdir, 'public'))
  );

  // Set up the proxy.
  if (proxyConfig) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(proxyConfig).forEach((context) => {
      server.use(proxyMiddleware(context, proxyConfig[context]));
    });
  }

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all('*', (req, res) => handle(req, res));

  server.listen(settings.port, settings.hostname);
}
