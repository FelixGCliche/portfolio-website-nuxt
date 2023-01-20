<template>
  <section class="section-about">
    <h1 class="headline">
      <span>
        <slot name="headline" />
      </span>
    </h1>
    <h2 class="title">
      <slot name="title" />
    </h2>
    <div class="body">
      <slot name="body" />
    </div>
    <ButtonPrimary
      class="section-about-button-contact label"
      url="/contact"
    >
      <slot name="contact" />
    </ButtonPrimary>
  </section>
</template>

<style lang="scss" scoped>
.section-about {
  display: grid;
  gap: 1.5rem;
  margin: 3rem 0;

  &-button-contact {
    width: fit-content;
  }
}
.headline {
  color: theme.$primary;
}
.title {
  color: theme.$secondary;
}
</style>
