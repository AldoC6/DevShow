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

        <div class="post-comments" >
          <h2>Comments</h2>
          <div v-if="post.comments && post.comments.length > 0">
            <div v-for="comment in post.comments" :key="comment.id">
              <p>{{ comment.content }}</p>
              <div class="comment-meta">
                By {{ comment.author.fullName }} on{{' '}} {{ comment.createdAt && new Date(comment.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }) }}
              </div>
            </div>
          </div>
          <div v-else>
            <p>No comments yet.</p>
          </div>
        </div>
      </div>
    </div>
</template>