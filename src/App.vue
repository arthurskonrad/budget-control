<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/create-account">create account</RouterLink>
        <RouterLink to="/delete-account">delete account</RouterLink>
        <RouterLink to="/user/id/balance">balance</RouterLink>
        <RouterLink to="/user/id/incomes">incomes</RouterLink>
        <RouterLink to="/user/id/transactions">transactions</RouterLink>
        <RouterLink to="/user/id/income">income</RouterLink>
        <RouterLink to="/user/id/transaction">transaction</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
}
</style>
