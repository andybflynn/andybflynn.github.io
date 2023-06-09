<script setup>
defineProps({
  title: {
    type: String,
    default: null,
  },
  classes: {
    type: Array,
    default: () => [],
  },
  id: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <section aria-label="{title}" class="section" :id="id">
    <header>
      <h3>{{ title }}</h3>
    </header>
    <div :class="['section__content'].concat(classes).join(' ')">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.section {
  margin-top: 3rem;
  margin-bottom: 5rem;

  &:hover,
  &:focus,
  &:focus-within {
    header {
      background-color: $linkHoverColor;
    }
  }

  header {
    color: white;
    background-color: $baseFontColor;
    padding: 0.5rem;
    width: 105%;
    margin-left: -5%;
    padding-left: 5%;
    transition: background-color 0.4s;

    h3 {
      margin: 0;
    }
  }
}
</style>
