<template>
  <div class="section" id="blog-post">
    <div class="container center">
      
      <h1 class="has-text-right">{{ post.data.title }}</h1>
      <hr>
      
      <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
      <div class="content" v-html="post.data.body"></div>
      <div class="has-text-centered">
        <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="button">
          {{ post.meta.previous_post.title }}
        </router-link>
        <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="button">
          {{ post.meta.next_post.title }} >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            // console.log(res.data)
            this.post = res.data
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },
    created() {
      this.getPost()
    }
  }
</script>

<style>
  
</style>
