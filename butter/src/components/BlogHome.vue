<template>
  <div id="blog-home" class="section">
    <div class="container">
      <h1 class="has-text-right">{{ page_title }}</h1>
      <hr>
      <div class="columns is-multiline" v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
        <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
        <div v-masonry-tile class="item column is-one-third" v-for="(post,index) in posts" :key="post.slug + '_' + index">
          <router-link :to="'/blog/' + post.slug">
            <div class="box">
              
                    <h3 class="blog-title">{{ post.title }}</h3>
                    <p>{{ post.summary }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  
  import { butter } from '@/buttercms'
  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'Blog',
        posts: [],
        categories: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
          // console.log(res.data)
          this.posts = res.data.data
        })
      },
      getCategories() {
        butter.category.list()
          .then((res) => {
            console.log('List of Categories:')
            console.log(res.data.data)
          })
      },
      getPostsByCategory() {
        butter.category.retrieve('example-category', {
            include: 'recent_posts'
          })
          .then((res) => {
            console.log('Posts with specific category:')
            console.log(res)
          })
      }
    },
    created() {
      this.getPosts()
      this.getCategories()
      this.getPostsByCategory()
    }
  }
</script>

<style>

.blog-title{
  color:#CC9933;
  font-size:1.5em;
  font-weight: 800;
}
  
</style>