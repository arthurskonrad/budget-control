<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<script lang="ts">
import api from "./api";
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  name: "App",

  async created() {
    try {
      const response = await api.get("/user/1");
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  },

  components: { NavBar },
};
</script>

<template>
  <main>
    <div class="min-h-full">
      <NavBar />

      <div class="mx-auto max-w-7xl">
        <RouterView />
      </div>
    </div>
  </main>
</template>
