
// Настройка axios
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Настройка vue
import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
const app = createApp(App);
app.use(router);
app.mount('#app');
