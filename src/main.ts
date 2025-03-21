import { createSSRApp } from 'vue';
import App from './App.vue';
import vantSetup from './vantSetup';

export function createApp() {
  const app = createSSRApp(App);
  vantSetup(app);
  return {
    app
  };
}
