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
