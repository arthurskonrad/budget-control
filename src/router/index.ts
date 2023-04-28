import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import CreateAccount from "../views/auth/CreateAccount.vue";
import DeleteAccount from "../views/auth/DeleteAccount.vue";
import Balance from "../views/balance/Balance.vue";
import Incomes from "../views/balance/Incomes.vue";
import Transactions from "../views/balance/Transactions.vue";
import Income from "../views/user/Income.vue";
import Transaction from "../views/user/Transaction.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/create-account",
      name: "create-account",
      component: CreateAccount,
    },
    {
      path: "/delete-account",
      name: "delete-account",
      component: DeleteAccount,
    },
    {
      path: "/user/:id/balance",
      name: "balance",
      component: Balance,
    },
    {
      path: "/user/:id/incomes",
      name: "incomes",
      component: Incomes,
    },
    {
      path: "/user/:id/transactions",
      name: "transactions",
      component: Transactions,
    },
    {
      path: "/user/:id/income",
      name: "income",
      component: Income,
    },
    {
      path: "/user/:id/transaction",
      name: "transaction",
      component: Transaction,
    },
  ],
});

export default router;
