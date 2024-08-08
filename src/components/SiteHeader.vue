<script setup>
defineProps({
  is404: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <header class="mainHeader">
    <div>
      <h1>
        <template v-if="is404">
          <span>4<span class="mainHeader__highlight">0</span>4</span>
        </template>
        <template v-else>
          <span>andy <span class="mainHeader__highlight">b</span> flynn</span>
        </template>
      </h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/placeholders";

@at-root {
  #body.dark {
    .mainHeader h1 {
      color: #aaa;
    }
  }
}

.mainHeader {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #333;
    font-family: sans-serif;
    font-size: 6em;
  }

  h2 {
    border: $highlightBorder;
    border-radius: 2px;
    color: $baseFontColor;
    font-family: roboto;
    padding: 1rem;
  }

  &__highlight {
    color: $linkHoverColor;
  }
}
</style>
