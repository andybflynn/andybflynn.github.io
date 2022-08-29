<script setup>
import SiteSection from "./SiteSection.vue";
</script>

<template>
  <SiteSection title="Contact" :classes="['contact']" id="contact">
    <p>
      If you want to get in touch don't hesitate to drop me a line at any of the
      following:
    </p>
    <p>
      <span class="icon icon-mail" />
      <a rel="nofollow" href="#">andy@andybflynn.com </a>
    </p>
    <p>
      <span class="icon icon-twitter" />
      <a rel="nofollow" href="https://twitter.com/andybflynn">Twitter </a>
    </p>
    <p>
      <span class="icon icon-linkedin" />
      <a rel="nofollow" href="https://www.linkedin.com/profile/view?id=51764240"
        >LinkedIn
      </a>
    </p>
  </SiteSection>
</template>

<style lang="scss" scoped>
.icon {
  margin-right: 0.5em;
}
</style>
