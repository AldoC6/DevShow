<script setup lang="ts">
import { type Data } from '@generated/data'
import { Form, Link } from '@adonisjs/inertia/vue'

const props = defineProps<{
  post: Data.Post.Variants['forDetailedView']
}>()
</script>

<template>
  <div class="container">
      <Link route="posts.index">
        &lsaquo; Go back to posts listing
      </Link>
      <div>
        <h1>{{ post.title }}</h1>
      </div>

      <div class="post">
        <div className="post-meta">
          <div v-if="post.author">By {{post.author.fullName}}</div>

          <span>.</span>
          <div>
            <a :href="post.url" target="_blank" rel="noreferrer">
              {{ post.url }}
            </a>
          </div>
        </div>

        <div class="post-summary">{{ post.summary }}</div>

        <div v-if="post.can.edit" class="post-actions">
          <Link route="posts.edit" :params="{id: post.id}" >
            Edit post
          </Link>
        </div>

        <div v-if="post.can.delete">
          <span>.</span>
          <Form route="posts.destroy" :params="{id: post.id}">
            <button type="submit" class="destructive">
              Delete
            </button>
          </Form>
        </div>

        <div class="post-comments" >
          <h2>Comments</h2>

          <div class="post-comment-form">
            <Form route="comments.store" :params="{ id: post.id }" v-slot="{errors}" >
              <div>
                <textarea 
                  name="content" 
                  id="content"
                  rows="3"
                  placeholder="Share your thoughts..."
                  :data-invalid="errors.content ? 'true' : undefined"
                  >                
                </textarea>
                <div v-if="errors.content">{{ errors.content }}</div>
              </div>
              <div>
                <button type="submit" class="button">Post Comment</button>
              </div>
            </Form>
          </div>
          <div v-if="post.comments && post.comments.length > 0">
            <div v-for="comment in post.comments" :key="comment.id">
              <p>{{ comment.content }}</p>
              <div class="comment-meta">
                By {{ comment.author.fullName }} on {{ comment.createdAt && new Date(comment.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }) }}
              </div>
              <div v-if="comment.can.delete" class="comment-actions">
                <Form route="comments.destroy" :params="{id: comment.id}">
                  <button type="submit" class="destructive">
                    Delete
                  </button>
                </Form>
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
