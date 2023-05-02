<script lang="ts">
export default (await import("vue")).defineComponent({
  name: "TitleHeader",

  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <header class="dark:bg-slate-800 bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight dark:text-white text-gray-900">
        {{ title }}
      </h1>
    </div>
  </header>
</template>
