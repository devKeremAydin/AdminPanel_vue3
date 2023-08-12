/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import VueApexCharts from "vue3-apexcharts";
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
app.use(VueApexCharts);
