<template>
  <div class="section" id="beers-page">
    <div class="container center">
      <figure class="image is-128x128">
        <img :src="beers.fields.customer_logo">
      </figure>
      <h1 class="is-size-2">{{ beers.fields.headline }}</h1>
      <h3 class="is-size-3">Testimonials</h3>
      <div class="content" v-html="Beers.beer_name"></div>
      <div class="content" v-html="beers.fields.body"></div>
    </div>
  </div>
</template>

<script>
  import { butter } from '@/buttercms'
  export default {
    name: 'beers-page',
    data() {
      return {
        Beers:[],
        slug: this.$route.params.slug,
        beers: {
          slug: '',
          fields: {}
        }
      }
    },
    methods: {
      getBeers() {
        butter.content.retrieve(['beers'])
          .then((res) => {
            this.Beers = res.data.data.beers;
            console.log(this.Beers);
          })
      }
    },
    created() {
      this.getBeers()
    }
  }
</script>

<style>
  
</style>
