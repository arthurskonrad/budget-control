<script lang="ts">
import TitleHeader from "@/components/TitleHeader/TitleHeader.vue";

export default (await import("vue")).defineComponent({
  components: {
    TitleHeader,
  },
});
</script>

<template>
  <TitleHeader title="Income" />
</template>
