<script setup>
defineProps({
  name: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
  position: {
    type: String,
    default: null,
  },
  dates: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="card">
    <h4 class="h3">
      <a rel="nofollow" :href="url">{{ name }}</a>
    </h4>
    <p class="card__jobtitle">
      {{ position }} <span className="card__jobtime">{{ dates }}</span>
    </p>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/placeholders";

.card {
  @extend %card;

  @media (max-width: 480px) {
    flex-basis: 100%;
  }

  &__jobtitle,
  h4,
  &__jobtime {
    text-align: center;
  }

  &__jobtitle {
    font-weight: bold;
  }

  &__jobtime {
    display: block;
    font-weight: normal;
  }
}
</style>
