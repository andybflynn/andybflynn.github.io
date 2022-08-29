<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import SiteSection from "./components/SiteSection.vue";
import SiteContact from "./components/SiteContact.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <div>
    <SiteHeader is404 />
    <main>
      <SiteSection title="404">
        <p>
          Whoops! It looks like the page you've requested doesn't exist yet. Why
          not head back to the <a href="/">homepage</a> and try again?
        </p>
      </SiteSection>
      <SiteContact />
      <SiteFooter />
    </main>
  </div>
</template>
