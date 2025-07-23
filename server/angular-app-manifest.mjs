
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ang-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ang-app"
  },
  {
    "renderMode": 2,
    "route": "/ang-app/about"
  },
  {
    "renderMode": 2,
    "route": "/ang-app/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23599, hash: 'd35e69f38349e333f5534739ed415e05ae9c033eeac519af3b03b50888c1e2eb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: '017700aea29ab82cd2b08f362202d52c1cbdd5ebfa126ad365bd5ae8b31e1aa6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48771, hash: '143a4a26084cbf86912261faf3d780ca555e61c1a12ddf442645cd00ccb3724e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 48777, hash: 'd6447cb0764ff37fa4e95d487359e310d254530cccdba802a71f461e73e40f79', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 48783, hash: '05e0d857e5fc4988877c25630c09177b1f63e166d926ee4fdbb625a102b11e61', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
