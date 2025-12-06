<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Dashboard from "./pages/Dashboard.vue";
import Billing from "./pages/Billing.vue";
import Customers from "./pages/Customers.vue";
import Services from "./pages/Services.vue";
import Expenses from "./pages/Expenses.vue";
import Reports from "./pages/Reports.vue";
import Ledger from "./pages/Ledger.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard },
  { path: "/billing", component: Billing },
  { path: "/customers", component: Customers },
  { path: "/services", component: Services },
  { path: "/expenses", component: Expenses },
  { path: "/reports", component: Reports },
  { path: "/ledger", component: Ledger }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
=======
import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Dashboard from "./pages/Dashboard.vue";
import Billing from "./pages/Billing.vue";
import Customers from "./pages/Customers.vue";
import Ledger from "./pages/Ledger.vue";
import Expenses from "./pages/Expenses.vue";
import Reports from "./pages/Reports.vue";
import Services from "./pages/Services.vue";
import Settings from "./pages/Settings.vue";
import { auth } from "./firebase";

const routes = [
  { path: "/", component: Login },
  { path: "/dashboard", component: Dashboard, meta: { auth: true }},
  { path: "/billing", component: Billing, meta: { auth: true }},
  { path: "/customers", component: Customers, meta: { auth: true }},
  { path: "/ledger", component: Ledger, meta: { auth: true }},
  { path: "/expenses", component: Expenses, meta: { auth: true }},
  { path: "/reports", component: Reports, meta: { auth: true }},
  { path: "/services", component: Services, meta: { auth: true }},
  { path: "/settings", component: Settings, meta: { auth: true }}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _, next) => {
  if (to.meta.auth && !auth.currentUser) next("/");
  else next();
});

export default router;
>>>>>>> 690e282eb5642abfbac3004b594c5b45310af133
