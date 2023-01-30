<template>
  <div class="section">
    <slot />
    <h2
      class="headline"
      v-if="$slots.headline"
    >
      <ContentSlot
        :use="$slots.headline"
        :unwrap="true"
      />
    </h2>
    <h3
      class="title"
      v-if="$slots.title"
    >
      <ContentSlot
        :use="$slots.title"
        :unwrap="true"
      />
    </h3>
    <p
      class="body"
      v-if="$slots.body"
    >
      <ContentSlot
        :use="$slots.body"
        :unwrap="true"
      />
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';

@each $size in map.keys(layout.$breakpoints) {
  @include layout.media-query($size) {
    .section {
      @include layout.layout-flex;

      & > .headline {
        color: theme.$primary;

        @include theme.typography-baseline;
      }

      & > .title {
        color: theme.$secondary;
      }

      & > .body:deep(br) {
        display: block;
        content: '';
        margin-bottom: calc(theme.get-line-height('body', $size) / 2);
      }
    }
  }
}
</style>
