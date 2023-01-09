import { defineConfig } from 'umi';
import { title } from './conf';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  hash: true,
  title,
});
