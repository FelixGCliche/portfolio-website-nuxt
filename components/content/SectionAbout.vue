<template>
  <section class="section-about">
    <h1 class="headline">
      <slot name="headline" />
    </h1>
    <h2 class="title">
      <slot name="title" />
    </h2>
    <p class="body">
      <slot name="body" />
    </p>
  </section>
</template>

<style lang="scss" scoped>
.section-about {
  display: grid;
  gap: 1.5rem;
  margin: 3rem 0;
}
.headline {
  color: theme.$primary;
  overflow: hidden;

  & > *:after {
    content: '';
    display: inline-block;
    vertical-align: baseline;
    width: 100%;
    margin-right: -100%;
    margin-left: 1rem;
    border-top: 4px solid;
  }
}
.title {
  color: theme.$secondary;
}

.button-contact {
  width: fit-content;
}
</style>
