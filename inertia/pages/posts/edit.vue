<script setup lang="ts">
import { type Data } from '@generated/data'
import { Form, Link } from '@adonisjs/inertia/vue'


const props = defineProps<{
  post: Data.Post
}>()
</script>

<template>
  <div class="form-container">
    <Link route="posts.show" :params="{id: post.id}">
      &lsaquo; Back to post
    </Link>

    <h1>Edit Post</h1>

    <Form route="posts.update" v-slot="{errors}" :params="{id: post.id }">
      <div>
        <label for="title"> Post Title</label>
        <input 
          type="text"
          name="title"
          id="title"
          :value="post.title"
          :data-invalid="errors.title ? 'true' : undefined"
        >
        <div v-if="errors.title">{{ errors.title }}</div>
      </div>

      <div>
        <label for="url">URL</label>
        <input
          type="url"
          name="url"
          id="url"
          :value="post.url"
          :data-invalid="errors.url ? 'true' : undefined"
          />
          <div v-if="errors.url">{{ errors.url }}</div>
      </div>

      <div>
        <label for="summary">Shor Summary</label>
        <textarea
          id="summary"
          name="summary"
          rows="4"
          :value="post.summary"
          :data-invalid="errors.summary ? 'true' : undefined"
        ></textarea>
        <div v-if="errors.summary">{{ errors.summary }}</div>
      </div>

      <div>
        <button type="submit" class="button">
          Update Post
        </button>
      </div>
    </Form>
    
  </div>
</template>
