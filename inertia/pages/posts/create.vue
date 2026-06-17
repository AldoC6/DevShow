<script setup lang="ts">
import { Form, Link } from '@adonisjs/inertia/vue';
</script>

<template>
  <div class="form-container">
    <div>
      <Link route="posts.index">
          &lsaquo; Go back to posts listing
      </Link>
      <h1>Share your creation</h1>
      <p>Share the URL and a short summary of your creation</p>
    </div>
    
    <div>
      <Form :route="'posts.store'" v-slot="{errors}" >
        <div>
          <label for="title">Post title</label>
          <input
            :type="'text'"
            :name="'title'"
            :id="'title'"
            :placeholder="'Title of your creation'"
            :data-invalid="errors.title ? true : undefined"
          />
  
          <div v-if="errors.title">{{ errors.title }}</div>
        </div>

        <div>
          <label for="url" >URL</label>
          <input 
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com/my-creation"
            :data-invalid="errors.url ? 'true' : undefined"
          >

          <div v-if="errors.url">{{ errors.url }}</div>
        </div>

        <div>
          <label for="summary">Short Summary</label>
          <textarea
            name="summary"
            id="summary"
            rows="4"
            placeholder="Briefly describe what you are sharing"
            :data-invalid="errors.summary ? 'true' : undefined"
          ></textarea>

          <div v-if="errors.summary">{{ errors.summary }}</div>
        </div>

        <div>
          <button type="submit" class="button" >Publish</button>
        </div>
      </Form>
    </div>

  </div>
</template>