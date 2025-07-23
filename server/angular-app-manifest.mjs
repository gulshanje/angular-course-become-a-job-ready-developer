
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-course-become-a-job-ready-developer/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-course-become-a-job-ready-developer"
  },
  {
    "renderMode": 2,
    "route": "/angular-course-become-a-job-ready-developer/about"
  },
  {
    "renderMode": 2,
    "route": "/angular-course-become-a-job-ready-developer/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23635, hash: '4da06ebbea29847a7121334bd592ee53d09d1df930d29705576fe1438770c503', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17209, hash: 'f41c4949c34fe7c139d4ecaf1dacf595bd4fca4d4b40dcc246d5ce690fb0275d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 48921, hash: 'e50aafdbf895941fdcd091dd152840aecb3b6d565cc63f97e3224a0113dd7187', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 48915, hash: '249f4f8e686a427e048265bc988e79d11387179506ed65e4001c5ead0ac99aab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 48927, hash: '7f3c5b6e4bfbc35d032ac609beebf5344263814702ac006188de292d16a4afc3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
