<script setup lang="ts">
import { type Data } from '@generated/data'

const props = defineProps<{
  post: Data.Post
}>()
</script>

<template>
  <div class="container">
      <div>
        <h1>{{ post.title }}</h1>
      </div>

      <div class="post">
        <div className="post-meta">
          <div>By {{post.author.fullName}}</div>

          <span>.</span>
          <div>
            <a :href="post.url" target="_blank" rel="noreferrer">
              {{ post.url }}
            </a>
          </div>
        </div>

        <div class="post-summary">{{ post.summary }}</div>
      </div>
    </div>
</template>