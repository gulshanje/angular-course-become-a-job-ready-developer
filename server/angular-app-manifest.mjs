
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
    'index.csr.html': {size: 23635, hash: '76be9be6d5195952d9a3dd2e105870788fbf8aac1675c4d1008091952a74d9b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17209, hash: '78e795ce4a4a1a451cb489e2c3a2a89929f1d82756ae4dfa711f90412072b6c2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48915, hash: '249f4f8e686a427e048265bc988e79d11387179506ed65e4001c5ead0ac99aab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 48927, hash: '7f3c5b6e4bfbc35d032ac609beebf5344263814702ac006188de292d16a4afc3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 48921, hash: 'e50aafdbf895941fdcd091dd152840aecb3b6d565cc63f97e3224a0113dd7187', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
