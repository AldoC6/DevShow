<script setup lang="ts">
import { type Data } from '@generated/data'
import { Link } from '@adonisjs/inertia/vue';


const props = defineProps<{
  posts: Data.Post[]
}>()

</script>

<template>
  <div class="container">
    <div class="posts-list-title">
      <h1>Posts</h1>
      <Link route="posts.create" class="button">Create new post</Link>
    </div>

    <div 
    v-for="post in posts"
    :key="post.id"
    >
      <div class="post-item">
          <h2>{{ post.title }}</h2>

          <div class="post-meta">
            <div>By {{ post.author.fullName }}</div>

            <span>.</span>

            <div>
              <a :href="post.url" target="_blank" rel="noreferrer">
                {{ post.url }}
              </a>
            </div>

            <span>.</span>
            <div>
              <Link route="posts.show" :params="{id: post.id}" >
                View comments
              </Link>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>