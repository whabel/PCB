<template>
  <div class="hello">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-half has-text-centered">
           <img src="../assets/beer.gif">
     
          </div>
          <div class="column is-half">
            <div class="home-content">
                <h2>What is Beer?</h2>
                <p>So, you want to know more about beer… Well, pour yourself a cold one and get comfortable because there’s a whole lot of great stuff to learn about your favourite beverage.</p>
                <a href="/blog/what-is-beer" class="button-1">Bottom's Up!</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    butter
  } from '@/buttercms'
  import BeerSvg from './BeerSvg'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {BeerSvg},
    methods: {
      fetchHeadline() {
        butter.content.retrieve(['homepage_headline'])
          .then((res) => {
            console.log('Headline from ButterCMS')
            console.log(res)
          })
      },
      fetchPosts() {
        butter.post.list({
            page: 1,
            page_size: 10
          })
          .then((res) => {
            console.log('Content from ButterCMS')
            console.log(res)
          })
      }
    },
    created() {
      this.fetchHeadline()
      this.fetchPosts()
    }
  }
</script>

<style>
  .hello{
    margin-top:20vh;
    margin-bottom:20vh;
  }

  .hello .container{
    height:100%;
  }
</style>
