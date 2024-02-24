<template>
  <footer>
    <p>
      This website was built using Vue 3 and Vite ⚡, using images from
      <a
        rel="nofollow"
        href="https://www.toptal.com/designers/subtlepatterns/light-paper-fibers/"
        >toptal.com</a
      >.
    </p>
    <p>
      This website uses cookies for analytics purposes (counting you as a unique
      visitor) but not for anything <strong>evil</strong>.
    </p>
    <p>
      I like to work outside my comfort zone. If I've done anything
      spectacularly wrong, please let me know!
    </p>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
footer {
  font-style: italic;
  text-align: center;
  padding-bottom: 1em;

  p {
    font-size: 1.2rem;
    line-height: 1.2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
