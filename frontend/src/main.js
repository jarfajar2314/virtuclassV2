import "mdb-vue-ui-kit/css/mdb.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";

import Vuex from "vuex";
import Results from "../src/store/result.js";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(router);
// app.use(store);
app.use(Vuex);

export default new Vuex.Store({
	modules: {
		Results,
	},
});

app.mount("#app");
