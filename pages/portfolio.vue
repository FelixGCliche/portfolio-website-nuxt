<template>
  <main class="page-portfolio">
    <ContentDoc
      path="/portfolio"
      :locale="locale"
    />
    <ContentList
      path="/portfolio/projects"
      :locale="locale"
      v-slot="{ list }"
    >
      <div
        v-for="project in list"
        :key="project._path"
      >
        <h1 class="display">{{ project.title }}</h1>
        <h3 class="title">{{ project.year }}</h3>
        <ul>
          <li
            class="body"
            v-for="tag in project.tags"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </ContentList>
    <!-- </ContentDoc> -->
  </main>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
</script>
