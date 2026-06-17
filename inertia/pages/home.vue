<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue';
import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="DevShow" />
  <div class="hero">
    <h1>DevShow - Share what you have built</h1>
    <p>
        A small community showcase website to share your creations. Be it a project, tool,
        experiment, or anything they're proud of.
    </p>
    <div>
      <Link :route="'posts.index'" class="button">
          Browse posts created by others
      </Link>
    </div>
  </div>

</template>
