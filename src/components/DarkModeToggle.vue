<template>
  <div class="dark-mode-toggle">
    <input id="darkModeToggle" type="checkbox" v-model="darkMode" />
    <label for="darkModeToggle">
      <div class="switch"></div>
      <div class="text"><p class="small">Toggle dark mode</p></div>
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const emit = defineEmits(["change-dark-mode"]);
const darkMode = ref(false);

onMounted(() => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    darkMode.value = true;
  }
});

watch(darkMode, () => {
  emit("change-dark-mode", darkMode.value);
});
</script>

<style lang="scss">
:root {
  --mode-toggle-light-mode-background-color: transparent;
  --mode-toggle-light-mode-pill-color: #444;
  --mode-toggle-light-mode-border-color: #444;
  --mode-toggle-dark-mode-background-color: #444;
  --mode-toggle-dark-mode-pill-color: #b4222a;
  --mode-toggle-dark-mode-border-color: transparent;
}

#body.light {
  --mode-toggle-background-color: var(
    --mode-toggle-light-mode-background-color
  );
  --mode-toggle-border-color: var(--mode-toggle-light-mode-border-color);
  --mode-toggle-pill-color: var(--mode-toggle-light-mode-pill-color);
}

#body.dark {
  --mode-toggle-background-color: var(--mode-toggle-dark-mode-background-color);
  --mode-toggle-border-color: var(--mode-toggle-dark-mode-border-color);
  --mode-toggle-pill-color: var(--mode-toggle-dark-mode-pill-color);
}
.dark-mode-toggle {
  padding-top: 15px;
  padding-left: 15px;
}

#darkModeToggle {
  display: none;
  + label {
    display: flex;
    align-items: center;
    gap: 0.4em;
    .text {
      display: inline-block;
    }
    .switch {
      background-color: var(--mode-toggle-background-color);
      border: 1px solid var(--mode-toggle-border-color);
      border-radius: 25%/50%;
      display: inline-block;
      height: 35px;
      position: relative;
      width: 65px;
      &::before {
        content: "";
        background-color: var(--mode-toggle-pill-color);
        border-radius: 50%/50%;
        position: absolute;
        height: 25px;
        width: 25px;
        top: 5px;
        left: 9%;
        transition: all 300ms ease;
      }
    }
  }
  &:checked + label .switch {
    &::before {
      left: calc(91% - 25px);
    }
  }
}
</style>
